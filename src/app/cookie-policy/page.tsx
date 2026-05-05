import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Cookie policy del sito Gole del Calore Guide.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie policy"
        text="Bozza per sito statico. Da aggiornare prima di attivare analytics, advertising o servizi terzi."
      />
      <Section title="Cookie attuali">
        <p className="max-w-3xl leading-8 text-moss">
          In questa versione il sito non imposta cookie di profilazione propri.
          Il hosting o eventuali servizi tecnici possono usare strumenti
          necessari al funzionamento.
        </p>
      </Section>
      <Section title="Futuro AdSense">
        <p className="max-w-3xl leading-8 text-moss">
          Prima di inserire Google AdSense reale servira gestire consenso,
          categorie cookie, link alle preferenze e testi legali aggiornati.
        </p>
      </Section>
    </>
  );
}
