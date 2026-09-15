import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B1330] px-4 text-center text-white">
      <h1 className="text-4xl font-bold">Page introuvable</h1>
      <p className="mt-4 text-white/60">Cette page n&apos;existe pas ou plus.</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-accent-red px-6 py-3 font-semibold text-white"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
