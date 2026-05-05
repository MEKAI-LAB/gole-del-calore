import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { AdviceBox, PageHero, Section } from "@/components/UI";
import { trails } from "@/data/site";

export const metadata: Metadata = {
  title: "Sentieri Gole del Calore",
  description:
    "Sentieri e percorsi alle Gole del Calore: anello da Felitto, Magliano Vetere, Remolino e Ponte Medievale.",
};

export default function SentieriPage() {
  return (
    <>
      <PageHero
        title="Sentieri alle Gole del Calore"
        text="Percorsi indicativi per scegliere la visita giusta. Le condizioni possono cambiare: controlla sempre tracce e informazioni aggiornate."
      />

      <Section title="Lista sentieri">
        <div className="grid gap-5">
          {trails.map((trail) => (
            <article key={trail.name} className="rounded-lg bg-white p-5 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest">
                {trail.name}
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-moss sm:grid-cols-2 lg:grid-cols-3">
                <p><strong>Partenza:</strong> {trail.start}</p>
                <p><strong>Durata:</strong> {trail.duration}</p>
                <p><strong>Distanza:</strong> {trail.distance}</p>
                <p><strong>Difficolta:</strong> {trail.difficulty}</p>
                <p><strong>Dislivello:</strong> {trail.elevation}</p>
                <p><strong>Bambini:</strong> {trail.kids}</p>
              </div>
              <p className="mt-4 leading-7 text-moss">{trail.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-6xl px-4">
        <AdSlot slot="sentieri-middle" format="horizontal" />
      </div>

      <Section title="Prima di camminare">
        <AdviceBox>
          Porta scarpe da trekking, acqua e mappa offline. Dopo piogge o piene
          evita tratti esposti e chiedi conferma sul posto.
        </AdviceBox>
      </Section>
    </>
  );
}
