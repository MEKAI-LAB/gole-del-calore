import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl font-bold text-forest">
          Gole del Calore
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-moss md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-water">
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="btn-primary text-sm" href={siteConfig.mapsUrl} target="_blank">
          Apri Maps
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
    </footer>
  );
}
