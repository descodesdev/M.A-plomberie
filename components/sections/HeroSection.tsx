import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO_SUBTITLE, HERO_TITLE, PHONE_E164, ZONE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#0B1330] px-4 pt-16 text-center sm:px-6"
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

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
          Plombier — Chauffage — Climatisation
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">{HERO_TITLE}</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">{HERO_SUBTITLE}</p>
        <p className="mt-2 text-sm text-white/50">{ZONE}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`tel:${PHONE_E164}`} variant="primary">
            <Phone size={18} aria-hidden="true" />
            Appeler maintenant
          </Button>
          <Button href="#contact" variant="secondary">
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </section>
  );
}
