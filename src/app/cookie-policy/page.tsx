import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Cookie policy del sito Gole del Calore Guide.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie policy"
        text="Informazioni sull&apos;uso di cookie e tecnologie simili su questo sito editoriale indipendente."
      />
      <Section title="Cookie tecnici">
        <p className="max-w-3xl leading-8 text-moss">
          Il sito pubblica contenuti informativi statici. Alcuni servizi tecnici
          necessari al funzionamento, come hosting, sicurezza, distribuzione dei
          file e protezione della navigazione, possono trattare dati tecnici
          standard. Questi strumenti servono a mostrare le pagine, mantenere il
          sito veloce e ridurre errori di caricamento.
        </p>
      </Section>
      <Section title="Pubblicita e servizi terzi">
        <p className="max-w-3xl leading-8 text-moss">
          Il sito puo includere script pubblicitari Google AdSense. Quando gli
          annunci saranno attivi, Google e i suoi partner potranno usare cookie
          o tecnologie simili per misurare annunci, limitare abusi e mostrare
          contenuti pubblicitari in base alle impostazioni dell&apos;utente. La
          gestione del consenso andra mostrata quando richiesta dalla normativa
          applicabile.
        </p>
      </Section>
      <Section title="Come gestire i cookie">
        <div className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          <p>
            Puoi cancellare o bloccare i cookie dalle impostazioni del browser.
            Puoi anche gestire le preferenze pubblicitarie dal tuo account
            Google. Se segnali problemi su consenso o cookie, scrivi a{" "}
            <a className="font-semibold text-water" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-moss">
            Ultimo aggiornamento: {siteConfig.lastUpdated}.
          </p>
        </div>
      </Section>
    </>
  );
}
