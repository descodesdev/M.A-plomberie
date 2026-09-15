import { Droplet, Flame, Snowflake, Wrench } from "lucide-react";
import Card from "@/components/ui/Card";
import { SERVICES, type Service } from "@/lib/constants";

const ICONS: Record<Service["icon"], typeof Wrench> = {
  wrench: Wrench,
  flame: Flame,
  snowflake: Snowflake,
  droplet: Droplet,
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0B1330] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Nos services</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
          Des interventions fiables en plomberie, chauffage et climatisation, adaptées à vos besoins.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Card key={service.id}>
                <Icon size={32} className="text-accent-blue" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/60">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
