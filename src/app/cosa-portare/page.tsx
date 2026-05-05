import type { Metadata } from "next";
import { AdviceBox, PageHero, Section } from "@/components/UI";
import { packingGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Cosa portare alle Gole del Calore",
  description:
    "Checklist per visitare le Gole del Calore: visita breve, giornata intera e trekking.",
};

export default function CosaPortarePage() {
  return (
    <>
      <PageHero
        title="Cosa portare alle Gole del Calore"
        text="Checklist semplice per evitare errori comuni. Lo smartphone prende poco in alcuni punti: salva mappe e info prima."
      />

      <Section title="Checklist pratica">
        <div className="grid gap-4 md:grid-cols-3">
          {packingGroups.map((group) => (
            <div key={group.title} className="rounded-lg bg-white p-5 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest">
                {group.title}
              </h2>
              <ul className="mt-4 grid gap-2 text-moss">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Da non dimenticare">
        <AdviceBox>
          Porta sempre una busta per i rifiuti. Le gole sono un ambiente
          naturale fragile: lascia il posto meglio di come lo trovi.
        </AdviceBox>
      </Section>
    </>
  );
}
