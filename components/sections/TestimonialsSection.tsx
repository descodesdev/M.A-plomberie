import { ShieldCheck, Handshake, Clock } from "lucide-react";
import Card from "@/components/ui/Card";

const ENGAGEMENTS = [
  {
    icon: ShieldCheck,
    title: "Devis gratuit et transparent",
    description: "Un devis détaillé avant toute intervention, sans surprise sur la facture.",
  },
  {
    icon: Handshake,
    title: "Travail soigné",
    description: "Chaque intervention est réalisée avec sérieux, dans le respect de votre logement.",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    description: "Une prise de contact rapide par téléphone pour planifier votre intervention.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="avis" className="bg-[#0B1330] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Nos engagements</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
          Entreprise récente, à l&apos;écoute de ses premiers clients pour construire une relation de
          confiance durable.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ENGAGEMENTS.map((item) => (
            <Card key={item.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15">
                <item.icon size={24} className="text-accent-blue" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
