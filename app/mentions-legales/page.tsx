import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ASSURANCE_RCP,
  CODE_NAF,
  CODE_POSTAL,
  EMAIL,
  FORME_JURIDIQUE,
  NOM_DIRIGEANT,
  NOM_ENTREPRISE,
  PHONE_DISPLAY,
  SIREN,
  SIRET,
  TVA_MENTION,
  VILLE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mentions légales — ${NOM_ENTREPRISE}`,
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 text-white/80 sm:px-6">
        <h1 className="text-3xl font-bold text-white">Mentions légales</h1>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Éditeur du site</h2>
          <p>Dénomination : {NOM_ENTREPRISE}</p>
          <p>Nom du dirigeant : {NOM_DIRIGEANT}</p>
          <p>Forme juridique : {FORME_JURIDIQUE}</p>
          <p>Adresse : {CODE_POSTAL} {VILLE}, France</p>
          <p>SIRET : {SIRET}</p>
          <p>SIREN : {SIREN} — immatriculé au Répertoire National des Entreprises (RNE)</p>
          <p>Code APE/NAF : {CODE_NAF}</p>
          <p>{TVA_MENTION}</p>
          <p>Téléphone : {PHONE_DISPLAY}</p>
          <p>Email : {EMAIL}</p>
          <p>Directeur de la publication : {NOM_DIRIGEANT}</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Responsable technique</h2>
          <p>
            Conception et développement du site :{" "}
            <a href="https://www.descodes.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">
              DesCodes
            </a>
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Hébergement</h2>
          <p>Vercel Inc.</p>
          <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Assurance professionnelle</h2>
          <p>Assurance responsabilité civile professionnelle : {ASSURANCE_RCP}</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Médiation de la consommation</h2>
          <p>
            Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de litige,
            le client peut recourir gratuitement à un médiateur de la consommation. Les coordonnées du
            médiateur compétent seront communiquées sur demande auprès de {NOM_ENTREPRISE}.
          </p>
          <p>
            Plateforme de règlement en ligne des litiges (RLL) de la Commission européenne :{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue underline"
            >
              ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-bold text-white">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logo) est protégé par le
            droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation
            préalable.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
