import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { stripCRLF, escapeHtml } from "@/lib/sanitize";
import { shortRatelimit, dailyRatelimit } from "@/lib/ratelimit";
import { EMAIL, SITE_URL } from "@/lib/constants";

export const runtime = "nodejs";

const GENERIC_ERROR = NextResponse.json(
  { ok: false, error: "Une erreur est survenue." },
  { status: 400 },
);

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin") ?? request.headers.get("referer");
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(SITE_URL).origin;
  } catch {
    return false;
  }
}

async function verifyTurnstile(token: string | null, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV !== "production";
  if (!token) return false;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return GENERIC_ERROR;
  }

  const ip = getClientIp(request);

  if (shortRatelimit && dailyRatelimit) {
    const [shortResult, dailyResult] = await Promise.all([
      shortRatelimit.limit(ip),
      dailyRatelimit.limit(ip),
    ]);
    if (!shortResult.success || !dailyResult.success) {
      return NextResponse.json(
        { ok: false, error: "Trop de tentatives, réessayez plus tard." },
        { status: 429 },
      );
    }
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return GENERIC_ERROR;
  }

  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    consent: formData.get("consent") === "on",
    company: formData.get("company")?.toString() ?? "",
    ts: formData.get("ts")?.toString() ?? "0",
  };

  // Honeypot : rejet silencieux si rempli (réponse générique, pas d'info à un bot)
  if (raw.company) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return GENERIC_ERROR;
  }

  const elapsed = Date.now() - parsed.data.ts;
  const THIRTY_MINUTES = 30 * 60 * 1000;
  if (elapsed < 3000 || elapsed > THIRTY_MINUTES) {
    return GENERIC_ERROR;
  }

  const turnstileToken = formData.get("cf-turnstile-response")?.toString() ?? null;
  const turnstileOk = await verifyTurnstile(turnstileToken, ip);
  if (!turnstileOk) {
    return GENERIC_ERROR;
  }

  const name = stripCRLF(parsed.data.name);
  const email = stripCRLF(parsed.data.email);
  const message = escapeHtml(stripCRLF(parsed.data.message));

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (apiKey && fromEmail) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: fromEmail,
        to: process.env.CONTACT_TO_EMAIL ?? EMAIL,
        replyTo: email,
        subject: "Nouveau message depuis le site M.A Plomberie",
        html: `<p><strong>Nom :</strong> ${escapeHtml(name)}</p><p><strong>Email :</strong> ${escapeHtml(email)}</p><p><strong>Message :</strong><br/>${message}</p>`,
      });
    } catch {
      return GENERIC_ERROR;
    }
  }

  return NextResponse.json({ ok: true });
}
