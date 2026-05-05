import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy del sito Gole del Calore Guide.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy policy"
        text="Bozza informativa per un sito editoriale senza database e pronto per future integrazioni pubblicitarie."
      />
      <Section title="Dati trattati">
        <p className="max-w-3xl leading-8 text-moss">
          Al momento il sito pubblica contenuti statici e non richiede account.
          Eventuali log tecnici del hosting possono includere dati tecnici di
          navigazione. Se verranno attivati moduli, analytics o AdSense, questa
          pagina andra aggiornata prima della pubblicazione.
        </p>
      </Section>
      <Section title="Pubblicita">
        <p className="max-w-3xl leading-8 text-moss">
          Il sito prevede spazi pubblicitari ma non contiene codice Google
          AdSense reale. Prima della attivazione andranno configurati consenso,
          cookie e informative richieste.
        </p>
      </Section>
    </>
  );
}
