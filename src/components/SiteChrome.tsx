import Link from "next/link";
import { navItems, siteConfig, trustedSources } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-forest/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link href="/" className="flex items-center gap-2 text-forest">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-river">
            <svg viewBox="0 0 42 42" className="h-8 w-8" aria-hidden="true">
              <path d="M21 4c5 5 7 10 4 15-5-1-8-4-8-8 0-3 2-5 4-7Z" fill="currentColor" />
              <path d="M9 15c7-1 12 1 15 7-7 2-12 1-15-7Z" fill="currentColor" opacity=".9" />
              <path d="M30 17c-6 1-10 4-12 10 7 0 11-3 12-10Z" fill="currentColor" opacity=".75" />
              <path d="M7 31c9-4 18-4 28 0M10 36c7-3 14-3 22 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-bold uppercase tracking-wide">
              Gole del Calore
            </span>
            <span className="block text-sm text-moss">Guida indipendente</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-xs font-bold uppercase text-forest lg:flex">
          <Link href="/" className="border-b-2 border-water pb-1">Home</Link>
          <Link href="/sentieri" className="hover:text-water">Sentieri</Link>
          <Link href="/cosa-fare" className="hover:text-water">Cosa fare</Link>
          <Link href="/come-arrivare" className="hover:text-water">Informazioni</Link>
          <Link href="/cosa-portare" className="hover:text-water">Guida</Link>
          <Link href="/faq" className="hover:text-water">FAQ</Link>
        </nav>
        <a
          className="grid h-11 w-11 place-items-center rounded-full text-forest hover:bg-river"
          href={siteConfig.mapsUrl}
          target="_blank"
          aria-label="Cerca su Google Maps"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="m21 21-4.3-4.3M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-bold">Gole del Calore</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-cream/75">
            Guida indipendente e non ufficiale per organizzare una visita tra
            Felitto, Remolino e Magliano Vetere.
          </p>
          <p className="mt-3 text-sm text-cream/70">
            Ultimo aggiornamento: {siteConfig.lastUpdated}
          </p>
        </div>
        <div>
          <p className="font-semibold">Guida</p>
          <div className="mt-3 grid gap-2 text-sm text-cream/75">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Sito</p>
          <div className="mt-3 grid gap-2 text-sm text-cream/75">
            <Link href="/chi-siamo">Chi siamo</Link>
            <Link href="/contatti">Contatti</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/cookie-policy">Cookie policy</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs leading-6 text-cream/60">
        Fonti utili:{" "}
        {trustedSources.map((source, index) => (
          <span key={source.href}>
            <a href={source.href} target="_blank" className="underline hover:text-white">
              {source.label}
            </a>
            {index < trustedSources.length - 1 ? "; " : "."}
          </span>
        ))}
      </div>
    </footer>
  );
}
