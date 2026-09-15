import Link from "next/link";
import {
  DESCODES_URL,
  EMAIL,
  NOM_ENTREPRISE,
  PHONE_DISPLAY,
  PHONE_E164,
  VILLE,
  CODE_POSTAL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B1F] py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-bold tracking-widest text-white">
              {NOM_ENTREPRISE.toUpperCase()}
            </p>
            <p className="mt-2">
              {CODE_POSTAL} {VILLE} — Indre-et-Loire
            </p>
          </div>

          <div>
            <p className="font-semibold text-white/80">Contact</p>
            <p className="mt-2">
              <a href={`tel:${PHONE_E164}`} className="hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-white/80">Informations légales</p>
            <p className="mt-2">
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </p>
            <p>
              <Link href="/politique-confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {NOM_ENTREPRISE}. Tous droits réservés.
          </p>
          <p>
            Site réalisé par{" "}
            <a
              href={DESCODES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 hover:text-white"
            >
              DesCodes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
