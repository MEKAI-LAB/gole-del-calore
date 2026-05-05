import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { AdviceBox, PageHero, Section } from "@/components/UI";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Come arrivare alle Gole del Calore",
  description:
    "Indicazioni pratiche per arrivare alle Gole del Calore, con focus su Felitto, localita Remolino e parcheggi.",
};

export default function ComeArrivarePage() {
  return (
    <>
      <PageHero
        title="Come arrivare alle Gole del Calore"
        text="Il punto piu usato per una prima visita e Felitto, localita Remolino. Da qui partono passeggiate, aree di sosta e molte attivita sul fiume."
        image="/borghi-cilento.jpg"
        imageAlt="Borgo collinare nel Cilento"
      >
        <a href={siteConfig.mapsUrl} target="_blank" className="btn-primary">
          Apri su Google Maps
        </a>
      </PageHero>

      <Section title="Indicazioni generali">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-2xl font-bold text-forest">Da nord</h2>
            <p className="mt-3 leading-7 text-moss">
              Entra nel Cilento interno dalla zona Vallo della Lucania o uscita
              piu comoda in base alla partenza. Ultimo tratto con strade locali.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-2xl font-bold text-forest">Da sud</h2>
            <p className="mt-3 leading-7 text-moss">
              Valuta itinerario da Roccadaspide, Castel San Lorenzo o aree
              interne. I tempi cambiano molto in estate.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-2xl font-bold text-forest">Da lontano</h2>
            <p className="mt-3 leading-7 text-moss">
              Parti presto. Salva mappa offline, porta contanti e controlla
              meteo, piena del fiume e apertura servizi.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Felitto e localita Remolino">
        <p className="max-w-3xl leading-8 text-moss">
          Remolino e la zona piu pratica per chi vuole vedere il fiume senza
          fare subito un trekking lungo. Qui si concentrano accessi, sosta e
          attivita stagionali. Le strade finali possono essere strette: guida
          piano e considera traffico nei weekend.
        </p>
      </Section>

      <div className="mx-auto max-w-6xl px-4">
        <AdSlot slot="arrivare-middle" format="horizontal" />
      </div>

      <Section title="Parcheggi">
        <div className="grid gap-4 md:grid-cols-2">
          <AdviceBox>
            I parcheggi in area Remolino possono cambiare per stagione,
            gestione e afflusso. Verificare sempre prima di partire.
          </AdviceBox>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            Nei giorni affollati arriva al mattino. Non bloccare strade,
            accessi agricoli o passaggi di emergenza. Se trovi pieno, torna
            verso il paese e chiedi indicazioni locali.
          </div>
        </div>
      </Section>

      <Section title="Informazioni da verificare prima di partire">
        <ul className="grid gap-3 text-moss md:grid-cols-2">
          <li>Stato sentieri dopo pioggia o vento forte.</li>
          <li>Orari e disponibilita di canoa, kayak e pedalo.</li>
          <li>Eventuali divieti di balneazione o accesso.</li>
          <li>Parcheggi, navette, aree picnic e punti ristoro.</li>
        </ul>
      </Section>
    </>
  );
}
