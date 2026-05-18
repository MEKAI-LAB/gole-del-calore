import type { Metadata } from "next";
import { AdviceBox, PageHero, Section } from "@/components/UI";
import { packingGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Cosa portare alle Gole del Calore",
  description:
    "Checklist per visitare le Gole del Calore: visita breve, giornata intera, bagno nel fiume e trekking.",
};

export default function CosaPortarePage() {
  return (
    <>
      <PageHero
        title="Cosa portare alle Gole del Calore"
        text="Checklist semplice per evitare errori comuni. In alcuni punti il telefono prende poco: salva mappe e informazioni prima."
        image="/ponte-gole-calore.jpg"
        imageAlt="Ponte in pietra sul fiume Calore"
      />

      <Section title="Checklist pratica">
        <div className="grid gap-4 md:grid-cols-3">
          {packingGroups.map((group) => (
            <div key={group.title} className="rounded-lg bg-white p-5 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest">
                {group.title}
              </h2>
              <ul className="mt-4 grid gap-2 text-moss">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Perche questi oggetti servono davvero">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            Le Gole del Calore non richiedono attrezzatura estrema per una
            visita semplice, ma non sono nemmeno una passeggiata cittadina. La
            differenza la fanno scarpe, acqua e organizzazione. Con scarpe lisce
            o sandali poco stabili, anche pochi metri su roccia umida possono
            diventare scomodi.
          </p>
          <p>
            Porta sempre piu acqua di quanto pensi, soprattutto se cammini in
            estate. Nei tratti assolati il caldo si sente, mentre vicino al fiume
            l&apos;umidita puo aumentare la sensazione di fatica. Uno snack semplice
            aiuta se la visita dura piu del previsto.
          </p>
          <p>
            Per bagno e attivita in acqua servono costume, telo, cambio asciutto
            e custodia impermeabile. Le scarpe da scoglio sono utili per
            proteggere il piede e avere piu presa su pietre e fondo irregolare.
          </p>
        </div>
      </Section>

      <Section title="Errori da evitare">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Arrivare senza contanti
            </h2>
            <p className="mt-3">
              Non tutti i servizi in aree interne sono sempre gestibili con
              carta. Avere contanti evita problemi per parcheggi, piccoli
              acquisti o punti ristoro.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Fidarsi solo del telefono
            </h2>
            <p className="mt-3">
              Salva mappe offline, screenshot delle informazioni utili e numero
              degli operatori contattati. La copertura puo essere debole proprio
              quando serve orientarsi.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Da non dimenticare">
        <AdviceBox>
          Porta sempre una busta per i rifiuti. Le gole sono un ambiente
          naturale fragile: lascia il posto meglio di come lo trovi.
        </AdviceBox>
      </Section>
    </>
  );
}
