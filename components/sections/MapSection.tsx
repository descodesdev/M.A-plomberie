import { GOOGLE_MAPS_EMBED_SRC, VILLE, ZONE } from "@/lib/constants";

export default function MapSection() {
  return (
    <section id="zone" className="bg-[#070B1F] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Zone d&apos;intervention
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-white/60">{ZONE}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title={`Carte Google Maps — ${VILLE}`}
            src={GOOGLE_MAPS_EMBED_SRC}
            width="100%"
            height="480"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
