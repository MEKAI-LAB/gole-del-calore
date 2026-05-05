import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Informazioni su Gole del Calore Guide, guida indipendente e non ufficiale.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        title="Chi siamo"
        text="Questo sito nasce per raccogliere informazioni pratiche e leggibili sulle Gole del Calore."
      />
      <Section title="Guida indipendente">
        <p className="max-w-3xl leading-8 text-moss">
          Gole del Calore Guide e un progetto editoriale indipendente. Non e il
          sito ufficiale del Comune, del Parco, della Pro Loco o dei gestori
          locali. I contenuti sono originali, indicativi e pensati per aiutare i
          visitatori a prepararsi meglio.
        </p>
      </Section>
      <Section title="Metodo">
        <p className="max-w-3xl leading-8 text-moss">
          Dove i dati possono cambiare, come orari, parcheggi, noleggi,
          prenotazioni, divieti e condizioni dei sentieri, invitiamo a
          verificare prima della partenza.
        </p>
      </Section>
    </>
  );
}
