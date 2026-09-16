import Image from "next/image";
import { Caveat } from "next/font/google";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO_SUBTITLE, HERO_TITLE, NOM_ENTREPRISE, PHONE_E164, ZONE } from "@/lib/constants";

const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-start overflow-hidden bg-[#0B1330] px-4 pt-28 sm:px-6 sm:pt-32"
    >
      <Image
        src="/hero-plombier.png"
        alt="Plombier resserrant un raccord de chauffage avec une clé à molette"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B1330]/75" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-red/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-blue/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-xl text-center sm:mx-0 sm:max-w-2xl sm:text-left">
          <p
            className={`${caveat.className} text-[3.15rem] text-white sm:text-[3.9375rem] md:text-[4.725rem]`}
          >
            {NOM_ENTREPRISE}
          </p>
          <p className="mb-4 mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
            Plombier — Chauffage — Climatisation
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">{HERO_TITLE}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 sm:mx-0">{HERO_SUBTITLE}</p>
          <p className="mt-2 text-sm text-white/50">{ZONE}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-start">
            <Button href={`tel:${PHONE_E164}`} variant="primary">
              <Phone size={18} aria-hidden="true" />
              Appeler maintenant
            </Button>
            <Button href="#contact" variant="secondary">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
