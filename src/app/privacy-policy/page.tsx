import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy del sito Gole del Calore Guide.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy policy"
        text="Informativa sintetica per un sito editoriale indipendente dedicato alle Gole del Calore."
      />
      <Section title="Titolare e contatti">
        <div className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          <p>
            Questo sito e una guida editoriale indipendente. Per richieste su
            dati personali, correzioni o informazioni pubblicate puoi scrivere a{" "}
            <a className="font-semibold text-water" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
          <p className="mt-3">
            Non siamo un ente pubblico, un ufficio turistico, un gestore di
            servizi o un operatore di prenotazioni.
          </p>
        </div>
      </Section>
      <Section title="Dati trattati">
        <p className="max-w-3xl leading-8 text-moss">
          Il sito non richiede account e non contiene un database utenti.
          Durante la navigazione possono essere trattati dati tecnici come
          indirizzo IP, user agent, log di sicurezza e informazioni necessarie
          alla consegna delle pagine. Questi dati sono legati al funzionamento
          tecnico del sito e alla protezione dell&apos;infrastruttura.
        </p>
      </Section>
      <Section title="Email e segnalazioni">
        <p className="max-w-3xl leading-8 text-moss">
          Se ci scrivi via email, useremo i dati presenti nel messaggio solo per
          rispondere alla richiesta, valutare una correzione o gestire una
          collaborazione editoriale. Non vendiamo liste di contatti e non
          inviamo newsletter automatiche da questo sito.
        </p>
      </Section>
      <Section title="Pubblicita">
        <p className="max-w-3xl leading-8 text-moss">
          Il sito puo usare Google AdSense. Quando gli annunci saranno attivi,
          Google potra trattare dati secondo le proprie informative e secondo le
          preferenze dell&apos;utente. Eventuali annunci non modificano la natura
          editoriale indipendente dei contenuti pubblicati.
        </p>
      </Section>
      <Section title="Aggiornamenti">
        <p className="max-w-3xl leading-8 text-moss">
          Questa informativa puo essere aggiornata quando cambiano servizi,
          strumenti tecnici o requisiti normativi. Ultimo aggiornamento:{" "}
          {siteConfig.lastUpdated}.
        </p>
      </Section>
    </>
  );
}
