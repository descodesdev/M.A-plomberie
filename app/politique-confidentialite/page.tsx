import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAIL, NOM_DIRIGEANT, NOM_ENTREPRISE, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${NOM_ENTREPRISE}`,
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 text-white/80 sm:px-6">
        <h1 className="text-3xl font-bold text-white">Politique de confidentialité</h1>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Responsable de traitement</h2>
          <p>
            {NOM_ENTREPRISE} — {NOM_DIRIGEANT}, joignable par email à {EMAIL} ou par téléphone au{" "}
            {PHONE_DISPLAY}.
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Données collectées</h2>
          <p>
            Via le formulaire de contact : nom, adresse email, message. L&apos;adresse IP est
            techniquement traitée à des fins de sécurité (limitation du nombre de requêtes,
            prévention du spam).
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Finalité</h2>
          <p>Ces données sont collectées uniquement pour répondre à votre demande de contact ou de devis.</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Base légale</h2>
          <p>
            Le traitement repose sur votre consentement (case à cocher lors de l&apos;envoi du
            formulaire) et sur l&apos;intérêt légitime de {NOM_ENTREPRISE} à répondre aux demandes de
            ses prospects et clients.
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Durée de conservation</h2>
          <p>
            Les données transmises via le formulaire de contact sont conservées 12 mois maximum à
            compter de leur réception, sauf obligation légale contraire ou relation commerciale
            engagée.
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Destinataires des données</h2>
          <p>
            Les données peuvent être traitées par les prestataires techniques suivants, dans le cadre
            strict du fonctionnement du site :
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Vercel Inc. (hébergement)</li>
            <li>Resend (envoi des emails de contact)</li>
            <li>Cloudflare (protection anti-spam du formulaire, Turnstile)</li>
          </ul>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de
            suppression, de portabilité et d&apos;opposition sur vos données personnelles. Pour
            exercer ces droits, contactez-nous à {EMAIL}.
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue underline"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques
            strictement nécessaires au fonctionnement du site (le cas échéant, protection anti-spam
            Cloudflare Turnstile) peuvent être déposés.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
