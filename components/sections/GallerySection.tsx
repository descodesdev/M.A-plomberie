import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GallerySection() {
  return (
    <section id="galerie" className="bg-[#0B1330] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Galerie</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
          Un aperçu de nos interventions. Photos libres de droits en attendant nos réalisations —
          bientôt remplacées par de vraies photos de chantiers.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
