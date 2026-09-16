"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { NOM_ENTREPRISE, PHONE_DISPLAY, PHONE_E164 } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pourquoi-nous", label: "Pourquoi nous" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open && panelRef.current) {
      const focusable = panelRef.current.querySelector<HTMLElement>("a, button");
      focusable?.focus();
    }
  }, [open]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#0B1330]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-center gap-2" aria-label={NOM_ENTREPRISE}>
          <Image
            src="/logo.png"
            alt={NOM_ENTREPRISE}
            width={280}
            height={226}
            priority
            className="h-[88px] w-auto sm:h-24"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_E164}`}
            className="flex items-center gap-2 rounded-full bg-accent-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-red/90"
          >
            <Phone size={16} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="flex flex-col gap-1 border-t border-white/10 bg-[#0B1330] px-4 pb-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-white/90 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_E164}`}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent-red px-4 py-3 font-semibold text-white"
          >
            <Phone size={16} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>
      ) : null}
    </header>
  );
}
