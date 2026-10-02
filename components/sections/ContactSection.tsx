import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
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

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#070B1F] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
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
            <a
              href={`tel:${PHONE_E164}`}
              className="mt-2 flex items-center gap-3 text-white/80 hover:text-white"
            >
              <Phone size={20} className="text-accent-red" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-white">
              Besoin d&apos;une information ou d&apos;un devis ? Envoyez-nous un mail
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 flex items-center gap-3 text-white/80 hover:text-white"
            >
              <Mail size={20} className="text-accent-blue" aria-hidden="true" />
              {EMAIL}
            </a>
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

      </div>
    </section>
  );
}
