import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";
import { networkSites } from "@/data/networkSites";

export const metadata: Metadata = {
  title: "Guide alle gole del Cilento",
  description:
    "Vista globale per navigare tra le guide indipendenti dedicate alle gole e alle aree naturali del Cilento.",
};

export default function GoleNetworkPage() {
  return (
    <>
      <PageHero
        title="Guide alle gole del Cilento"
        text="Una vista unica per passare tra le guide indipendenti dedicate alle gole, ai fiumi e alle aree naturali del Cilento."
        image="/gole-del-calore-hero.jpg"
        imageAlt="Fiume tra gole rocciose nel Cilento"
      />
      <Section
        title="Siti disponibili"
        text="Questa sezione e pensata per crescere: quando avremo altri siti, compariranno qui in modo ordinato."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {networkSites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              className="rounded-lg border border-forest/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-serif text-2xl font-bold text-forest">
                  {site.name}
                </h2>
                {site.current ? (
                  <span className="rounded-full bg-river px-3 py-1 text-xs font-bold uppercase text-forest">
                    sito attuale
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm font-semibold uppercase text-water">
                {site.area}
              </p>
              <p className="mt-3 leading-7 text-moss">{site.description}</p>
              <span className="mt-5 inline-block text-sm font-bold uppercase text-forest">
                Apri guida -&gt;
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
