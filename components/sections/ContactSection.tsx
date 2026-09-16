"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import {
  ADRESSE_RUE,
  CODE_POSTAL,
  EMAIL,
  FACEBOOK_URL,
  HORAIRES,
  INSTAGRAM_URL,
  NOM_ENTREPRISE,
  PHONE_DISPLAY,
  PHONE_E164,
  VILLE,
} from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [loadedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("ts", String(loadedAt));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#070B1F] px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Contactez {NOM_ENTREPRISE}
          </h2>
          <p className="mt-4 text-white/60">
            Une question, un projet, une urgence ? Contactez-nous, nous vous répondons rapidement.
          </p>

          <div className="mt-8 flex items-start gap-3 text-white/80">
            <MapPin size={20} className="mt-0.5 shrink-0 text-accent-red" aria-hidden="true" />
            <p>
              {NOM_ENTREPRISE}
              <br />
              {ADRESSE_RUE}
              <br />
              {CODE_POSTAL} {VILLE}, France
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 text-white/80">
            <Clock size={20} className="mt-0.5 shrink-0 text-accent-blue" aria-hidden="true" />
            <div>
              <p className="font-semibold text-white">Nos horaires</p>
              <ul className="mt-1 space-y-0.5">
                {HORAIRES.map((h) => (
                  <li key={h.jours}>
                    {h.jours} : {h.horaire}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-white">Appelez-nous</p>
            <div className="mt-2 space-y-2">
              <a
                href={`tel:${PHONE_E164}`}
                className="flex items-center gap-3 text-white/80 hover:text-white"
              >
                <Phone size={20} className="text-accent-red" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/80 hover:text-white"
              >
                <Mail size={20} className="text-accent-blue" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram M.A Plomberie"
              className="text-white/70 hover:text-white"
            >
              <Instagram size={22} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook M.A Plomberie"
              className="text-white/70 hover:text-white"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <Field label="Nom" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Message" name="message" as="textarea" required />

          {/* Honeypot anti-bot — champ caché, ne jamais le remplir */}
          <input
            name="company"
            type="text"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <input name="ts" type="hidden" value={loadedAt} readOnly />

          {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
            <div
              className="cf-turnstile mt-2"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            />
          ) : null}

          <label className="mt-4 flex items-start gap-2 text-sm text-white/70">
            <input type="checkbox" name="consent" required className="mt-1" />
            <span>
              J&apos;accepte que mes données soient utilisées pour traiter ma demande. Voir la{" "}
              <a href="/politique-confidentialite" className="text-accent-blue underline">
                politique de confidentialité
              </a>
              .
            </span>
          </label>

          <Button type="submit" variant="primary" className="mt-6 w-full" disabled={status === "loading"}>
            {status === "loading" ? "Envoi en cours…" : "Envoyer"}
          </Button>

          {status === "success" ? (
            <p className="mt-4 text-sm text-green-400" role="status">
              Votre message a bien été envoyé. Nous vous répondons rapidement.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-4 text-sm text-accent-red" role="alert">
              Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
