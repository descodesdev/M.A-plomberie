"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B1330] px-4 text-center text-white">
      <h1 className="text-3xl font-bold">Une erreur est survenue</h1>
      <p className="mt-4 text-white/60">
        Veuillez réessayer ou nous contacter directement par téléphone.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-accent-red px-6 py-3 font-semibold"
      >
        Réessayer
      </button>
    </div>
  );
}
