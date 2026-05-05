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
      <Section title="Domande frequenti">
        <FAQList items={faqs} />
      </Section>
    </>
  );
}
