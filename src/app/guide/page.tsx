import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/UI";
import { guidePages } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guide Gole del Calore",
  description:
    "Tutte le guide pratiche per visitare le Gole del Calore: itinerari, parcheggi, bagno nel fiume, bambini, periodo migliore e dintorni.",
};

export default function GuideIndexPage() {
  return (
    <>
      <PageHero
        title="Guide alle Gole del Calore"
        text={
          "Approfondimenti pratici per organizzare la visita, scegliere l'itinerario giusto e sapere cosa verificare prima di partire."
        }
        image="/ponte-gole-calore.jpg"
        imageAlt={"Ponte in pietra nell'area delle Gole del Calore"}
      />
      <Section title="Tutte le guide">
        <div className="grid gap-4 md:grid-cols-2">
          {guidePages.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-serif text-2xl font-bold text-forest">
                {guide.title}
              </h2>
              <p className="mt-3 leading-7 text-moss">{guide.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
