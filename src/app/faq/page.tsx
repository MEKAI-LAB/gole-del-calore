import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { FAQList, PageHero, Section } from "@/components/UI";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ Gole del Calore",
  description:
    "Domande frequenti sulle Gole del Calore: dove sono, parcheggi, bagno, canoe, bambini, durata, prenotazioni e periodo migliore.",
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={faqs} />
      <PageHero
        title="FAQ sulle Gole del Calore"
        text="Risposte rapide per organizzare la visita. Le informazioni operative vanno sempre verificate prima della partenza."
      />
      <Section title="Prima di leggere le FAQ">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Le risposte sotto sono pensate per orientarti, non per sostituire
            informazioni locali aggiornate. Le Gole del Calore sono un ambiente
            naturale e alcune condizioni cambiano con stagione, meteo, portata
            del fiume, gestione dei servizi e manutenzione dei sentieri.
          </p>
          <p>
            Se devi prenotare una attivita, organizzare un gruppo, visitare con
            bambini piccoli o partire dopo piogge intense, controlla sempre con
            fonti locali prima di metterti in viaggio.
          </p>
        </div>
      </Section>
      <Section title="Domande frequenti">
        <FAQList items={faqs} />
      </Section>
    </>
  );
}
