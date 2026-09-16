import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ADRESSE_RUE,
  CODE_POSTAL,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  NOM_ENTREPRISE,
  PHONE_DISPLAY,
  SITE_URL,
  VILLE,
  ZONE,
} from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${NOM_ENTREPRISE} — Plombier chauffagiste à ${VILLE} (37)`,
  description: `Plombier à ${VILLE}, Indre-et-Loire. Plomberie, chauffage et climatisation. Devis gratuit. ${ZONE}. Tél. ${PHONE_DISPLAY}.`,
  keywords: ["plombier Monnaie", "plomberie Indre-et-Loire", "chauffagiste Tours", "climatisation Monnaie"],
  openGraph: {
    title: `${NOM_ENTREPRISE} — Plombier chauffagiste à ${VILLE}`,
    description: `Plomberie, chauffage et climatisation à ${VILLE} et ses environs. Devis gratuit.`,
    url: SITE_URL,
    siteName: NOM_ENTREPRISE,
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: NOM_ENTREPRISE,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    areaServed: ZONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADRESSE_RUE,
      addressLocality: VILLE,
      postalCode: CODE_POSTAL,
      addressRegion: "Indre-et-Loire",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    url: SITE_URL,
  };

  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-[#0B1330] font-sans text-white antialiased">
        {children}
        <script
          type="application/ld+json"
          nonce={nonce}
          // JSON-LD contrôlé côté serveur, aucune donnée utilisateur — échappement non requis
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
          <script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
            nonce={nonce}
          />
        ) : null}
      </body>
    </html>
  );
}
