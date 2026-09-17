/**
 * Filigrane temporaire "EN CONSTRUCTION" — flou tout le site en arrière-plan.
 * À SUPPRIMER dès validation du site par le client (voir import dans app/layout.tsx).
 */
import { Wrench } from "lucide-react";
import { NOM_ENTREPRISE } from "@/lib/constants";

const TILE_COUNT = 24;

export default function UnderConstructionOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#0B1330]/90 backdrop-blur-2xl"
    >
      <div className="absolute -inset-[30%] flex rotate-[-10deg] flex-wrap content-center justify-center gap-x-14 gap-y-10">
        {Array.from({ length: TILE_COUNT }).map((_, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-3 whitespace-nowrap text-3xl font-black uppercase tracking-[0.2em] sm:text-4xl ${
              i % 3 === 0
                ? "text-accent-red/25"
                : i % 3 === 1
                  ? "text-accent-blue/25"
                  : "text-white/10"
            }`}
          >
            <Wrench className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden="true" />
            En construction
          </span>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent-red/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-accent-blue/20 blur-3xl"
      />

      <div className="relative flex h-full w-full items-center justify-center px-4">
        <div className="relative rounded-3xl border border-white/15 bg-[#0B1330]/95 px-8 py-10 text-center shadow-2xl shadow-black/50 sm:px-16 sm:py-14">
          <div className="flex items-center justify-center gap-4">
            <Wrench className="h-10 w-10 rotate-[-20deg] text-accent-red sm:h-12 sm:w-12" aria-hidden="true" />
            <Wrench className="h-10 w-10 rotate-[20deg] text-accent-blue sm:h-12 sm:w-12" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-black uppercase tracking-wide text-white sm:text-5xl">
            En construction
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/60 sm:text-base">
            Le nouveau site de {NOM_ENTREPRISE} est en cours de finalisation.
            Merci de votre patience.
          </p>
        </div>
      </div>
    </div>
  );
}
