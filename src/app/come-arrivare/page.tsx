import type { Metadata } from "next";
import { AdviceBox, PageHero, Section } from "@/components/UI";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Come arrivare alle Gole del Calore",
  description:
    "Indicazioni pratiche per arrivare alle Gole del Calore, con focus su Felitto, localita Remolino, parcheggi e consigli di viaggio.",
};

export default function ComeArrivarePage() {
  return (
    <>
      <PageHero
        title="Come arrivare alle Gole del Calore"
        text="Il riferimento piu usato per una prima visita e Felitto, localita Remolino. Da qui si raggiungono il fiume, le aree di sosta e molti punti di partenza."
        image="/borghi-cilento.jpg"
        imageAlt="Borgo collinare nel Cilento"
      >
        <a href={siteConfig.mapsUrl} target="_blank" className="btn-primary">
          Apri su Google Maps
        </a>
      </PageHero>

      <Section title="Prima cosa da sapere">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Le Gole del Calore si trovano nel Cilento interno. La zona e diversa
            da una localita balneare classica: le strade finali sono locali, i
            tempi di percorrenza possono allungarsi nei weekend e la copertura
            telefonica non e sempre stabile. Per questo conviene preparare la
            visita prima di arrivare.
          </p>
          <p>
            Se e la prima volta, la scelta piu semplice e impostare sul
            navigatore Felitto e poi localita Remolino. In alternativa puoi
            organizzare la visita dal versante di Magliano Vetere o Magliano
            Nuovo, soprattutto se il tuo obiettivo e camminare su percorsi piu
            escursionistici.
          </p>
        </div>
      </Section>

      <Section title="Indicazioni generali">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-2xl font-bold text-forest">Da nord</h2>
            <p className="mt-3 leading-7 text-moss">
              Chi arriva da Salerno, Napoli o dall&apos;autostrada deve mettere in
              conto un tratto finale su strade interne. Non guardare solo i
              chilometri: nel Cilento interno curve, attraversamenti dei paesi e
              traffico stagionale incidono molto sui tempi.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-2xl font-bold text-forest">Da sud</h2>
            <p className="mt-3 leading-7 text-moss">
              Da sud puoi valutare itinerari interni in base alla partenza. Se
              non conosci la zona, evita di arrivare al tramonto: orientarsi,
              parcheggiare e capire gli accessi al fiume e piu facile con luce.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-2xl font-bold text-forest">Da lontano</h2>
            <p className="mt-3 leading-7 text-moss">
              Parti presto, salva la mappa offline, porta contanti e tieni una
              seconda opzione per mangiare o fare una sosta. In alta stagione e
              meglio chiamare prima ristoranti, guide o operatori.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Felitto e localita Remolino">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Remolino e la zona piu pratica per chi vuole vedere il fiume senza
            iniziare subito con un trekking lungo. Qui si concentrano molte
            ricerche dei visitatori per passeggiate, aree vicine all&apos;acqua e
            attivita stagionali come canoa o pedalo.
          </p>
          <p>
            Il vantaggio e la comodita. Lo svantaggio e che nei giorni affollati
            puo diventare il punto piu congestionato. Arrivare presto aiuta a
            trovare parcheggio, scegliere con calma e non camminare nelle ore
            piu calde.
          </p>
        </div>
      </Section>

      <Section title="Parcheggi">
        <div className="grid gap-4 md:grid-cols-2">
          <AdviceBox>
            I parcheggi in area Remolino possono cambiare per stagione,
            gestione e afflusso. Verifica prima di partire, soprattutto in
            agosto, nei weekend e nei giorni festivi.
          </AdviceBox>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            Non lasciare l&apos;auto in punti che bloccano strade, accessi agricoli o
            passaggi di emergenza. Se l&apos;area e piena, torna verso il paese e
            chiedi indicazioni locali. Una camminata in piu e meglio di una
            sosta rischiosa o scomoda per altri.
          </div>
        </div>
      </Section>

      <Section title="Informazioni da verificare prima di partire">
        <ul className="grid gap-3 text-moss md:grid-cols-2">
          <li>Stato dei sentieri dopo pioggia, vento forte o manutenzioni.</li>
          <li>Orari e disponibilita di canoa, kayak, pedalo o guide.</li>
          <li>Eventuali divieti di balneazione, accesso o sosta.</li>
          <li>Parcheggi, navette, aree picnic e punti ristoro aperti.</li>
          <li>Previsioni meteo e rischio temporali nel pomeriggio.</li>
          <li>Copertura telefonica e mappe offline gia salvate.</li>
        </ul>
      </Section>
    </>
  );
}
