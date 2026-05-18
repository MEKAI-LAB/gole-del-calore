import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/UI";
import { activities } from "@/data/site";

export const metadata: Metadata = {
  title: "Cosa fare alle Gole del Calore",
  description:
    "Trekking, bagno nel fiume, canoa, kayak, pedalo, torrentismo, picnic, fotografia e visita a Felitto.",
};

export default function CosaFarePage() {
  return (
    <>
      <PageHero
        title="Cosa fare alle Gole del Calore"
        text="Idee pratiche per organizzare una visita lenta, sportiva o in famiglia. Alcune attivita sono stagionali e vanno sempre confermate."
        image="/canoa-gole-calore.jpg"
        imageAlt="Canoa sul fiume tra rocce e bosco"
      />

      <Section title="Attivita principali">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Card key={activity.title} title={activity.title} text={activity.text} />
          ))}
        </div>
      </Section>

      <Section title="Come scegliere cosa fare">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Se hai poche ore, scegli una passeggiata breve in area Remolino,
            una sosta vicino al fiume e una visita a Felitto. E il modo piu
            semplice per capire il luogo senza trasformare la giornata in una
            escursione impegnativa.
          </p>
          <p>
            Se hai mezza giornata, puoi aggiungere un tratto di sentiero o una
            attivita in acqua, quando disponibile. In questo caso conviene
            arrivare presto, portare cambio asciutto e lasciare margine per il
            rientro. Il fiume e bello, ma non va trattato come un parco urbano:
            fondo irregolare, rocce umide e acqua fredda richiedono attenzione.
          </p>
          <p>
            Se hai una giornata intera, puoi combinare trekking, pausa pranzo,
            bagno solo dove consentito e visita al borgo. Questa e la scelta piu
            completa, ma anche quella che richiede piu preparazione: acqua,
            scarpe adatte, protezione dal sole e informazioni aggiornate.
          </p>
        </div>
      </Section>

      <Section title="Attivita in acqua">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Canoa, kayak e pedalo
            </h2>
            <p className="mt-3">
              Sono tra le esperienze piu richieste, ma non vanno considerate
              sempre disponibili. Dipendono da stagione, portata, organizzazione
              degli operatori e condizioni del fiume. Prima di partire verifica
              orari, prezzi, eta minima, modalita di prenotazione e cosa e
              incluso.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Bagno nel fiume
            </h2>
            <p className="mt-3">
              Il bagno puo essere piacevole nei punti adatti, ma serve prudenza.
              Entra solo dove consentito, evita tuffi improvvisati, usa scarpe
              da scoglio e non sottovalutare acqua fredda, correnti e rocce
              scivolose.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Nota sicurezza">
        <p className="max-w-3xl rounded-lg bg-white p-5 leading-8 text-moss">
          Il fiume cambia con pioggia, stagione e portata. Per bagno,
          torrentismo e attivita in acqua usa buon senso, attrezzatura corretta
          e informazioni locali aggiornate. Se non conosci il tratto, non
          improvvisare discese o percorsi fuori sentiero.
        </p>
      </Section>
    </>
  );
}
