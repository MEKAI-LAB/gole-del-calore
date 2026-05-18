import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";
import { siteConfig } from "@/data/site";

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
        text="Gole del Calore Guide raccoglie informazioni pratiche per chi vuole visitare l&apos;area tra Felitto, Remolino e Magliano Vetere."
      />
      <Section title="Guida indipendente">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Questo sito e un progetto editoriale indipendente. Non e il sito
            ufficiale del Comune, del Parco, della Pro Loco, di un operatore di
            noleggio o di un servizio turistico. L&apos;obiettivo e aiutare chi cerca
            informazioni semplici prima di partire: dove orientarsi, cosa
            aspettarsi, quali domande fare agli operatori locali e quali aspetti
            verificare prima della visita.
          </p>
          <p>
            Le Gole del Calore sono un ambiente naturale vivo. Sentieri, accessi
            al fiume, parcheggi, divieti, noleggi e condizioni dell&apos;acqua
            possono cambiare anche in poco tempo. Per questo evitiamo di
            presentare come definitive le informazioni che dipendono da stagione
            o gestione locale.
          </p>
        </div>
      </Section>
      <Section title="Metodo editoriale">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">Praticita</h2>
            <p className="mt-3">
              Scriviamo pensando a chi consulta il sito da smartphone, magari
              mentre sta organizzando la partenza o e gia nel Cilento interno.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">Prudenza</h2>
            <p className="mt-3">
              Dove i dati possono cambiare, consigliamo di verificare con fonti
              locali aggiornate invece di promettere orari o servizi fissi.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">Aggiornamenti</h2>
            <p className="mt-3">
              Accettiamo segnalazioni su errori, accessi non piu validi o
              contenuti da migliorare. Ultimo aggiornamento: {siteConfig.lastUpdated}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
