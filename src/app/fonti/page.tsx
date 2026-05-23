import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";
import { siteConfig, trustedSources } from "@/data/site";

export const metadata: Metadata = {
  title: "Fonti e aggiornamenti",
  description:
    "Come vengono aggiornate le informazioni della guida indipendente alle Gole del Calore.",
};

export default function FontiPage() {
  return (
    <>
      <PageHero
        title="Fonti e aggiornamenti"
        text="Questa pagina spiega come trattiamo informazioni variabili come accessi, parcheggi, attivita sul fiume e condizioni dei sentieri."
      />
      <Section title="Come usiamo le fonti">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Gole del Calore Guide e una guida indipendente e non ufficiale. Le
            informazioni pubblicate hanno scopo pratico e orientativo: aiutano a
            preparare la visita, ma non sostituiscono comunicazioni ufficiali,
            ordinanze, avvisi di sicurezza o conferme degli operatori locali.
          </p>
          <p>
            Quando un dato puo cambiare rapidamente, preferiamo indicarlo come
            da verificare prima della partenza. Questo vale soprattutto per
            parcheggi, divieti, noleggi, attivita in acqua, condizioni del fiume,
            stato dei sentieri e aperture dei punti ristoro.
          </p>
        </div>
      </Section>
      <Section title="Fonti utili">
        <div className="grid gap-4 md:grid-cols-3">
          {trustedSources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              className="rounded-lg bg-white p-5 leading-7 text-moss shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-serif text-2xl font-bold text-forest">
                {source.label}
              </h2>
              <p className="mt-3 text-sm">
                Apri la fonte per controllare informazioni locali aggiornate.
              </p>
            </a>
          ))}
        </div>
      </Section>
      <Section title="Segnalazioni">
        <div className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          <p>
            Se noti informazioni non aggiornate, puoi scrivere a{" "}
            <a className="font-semibold text-water" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            . Le segnalazioni piu utili indicano data, punto preciso, cosa e
            cambiato e una fonte o foto verificabile.
          </p>
          <p className="mt-3">
            Ultimo aggiornamento editoriale: {siteConfig.lastUpdated}.
          </p>
        </div>
      </Section>
    </>
  );
}
