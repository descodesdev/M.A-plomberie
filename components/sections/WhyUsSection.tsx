import { BadgeCheck, MapPin, Zap } from "lucide-react";
import Card from "@/components/ui/Card";
import { WHY_US } from "@/lib/constants";

const ICONS = [Zap, MapPin, BadgeCheck];

export default function WhyUsSection() {
  return (
    <section id="pourquoi-nous" className="bg-[#070B1F] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Pourquoi nous</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WHY_US.map((item, index) => {
            const Icon = ICONS[index % ICONS.length] ?? BadgeCheck;
            return (
              <Card key={item.id} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-red/15">
                  <Icon size={24} className="text-accent-red" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
