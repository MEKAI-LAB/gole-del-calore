import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatti della guida indipendente sulle Gole del Calore.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        title="Contatti"
        text="Per segnalazioni, correzioni o collaborazioni editoriali puoi scriverci."
      />
      <Section title="Scrivici">
        <div className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          <p>
            Email:{" "}
            <a className="font-semibold text-water" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          </p>
          <p className="mt-3">
            Non siamo un ufficio informazioni ufficiale. Per emergenze,
            prenotazioni, divieti o servizi locali contatta fonti ufficiali e
            operatori del territorio.
          </p>
          <p className="mt-3">
            Puoi scriverci per proporre correzioni, aggiornamenti su accessi e
            sentieri, segnalare informazioni non piu attuali o richiedere la
            rimozione di contenuti non corretti. Le segnalazioni utili sono
            quelle con data, luogo preciso e una breve descrizione verificabile.
          </p>
        </div>
      </Section>
      <Section title="Cosa non gestiamo">
        <div className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          <p>
            Non gestiamo prenotazioni per canoe, guide, parcheggi, ristoranti o
            strutture ricettive. Non possiamo dare conferme in tempo reale su
            portata del fiume, divieti temporanei o meteo locale. Per questi
            aspetti serve contattare operatori, enti locali o fonti ufficiali.
          </p>
        </div>
      </Section>
    </>
  );
}
