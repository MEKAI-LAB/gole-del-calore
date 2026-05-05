import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { Card, PageHero, Section } from "@/components/UI";
import { activities } from "@/data/site";

export const metadata: Metadata = {
  title: "Cosa fare alle Gole del Calore",
  description:
    "Trekking, bagno nel fiume, canoa, kayak, pedalo, torrentismo, picnic, fotografia e visita a Felitto.",
};

export default function CosaFarePage() {
  return (
    <>
      <PageHero
        title="Cosa fare alle Gole del Calore"
        text="Idee pratiche per una visita lenta, sportiva o in famiglia. Alcune attivita sono stagionali e vanno confermate."
      />

      <Section title="Attivita">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Card key={activity.title} title={activity.title} text={activity.text} />
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-6xl px-4">
        <AdSlot slot="cosa-fare-middle" format="horizontal" />
      </div>

      <Section title="Nota sicurezza">
        <p className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          Il fiume cambia con pioggia, stagione e portata. Per bagno,
          torrentismo e attivita in acqua usa buon senso, attrezzatura corretta
          e informazioni locali aggiornate.
        </p>
      </Section>
    </>
  );
}
