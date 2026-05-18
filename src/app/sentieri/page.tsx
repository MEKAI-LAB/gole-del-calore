import type { Metadata } from "next";
import { AdviceBox, PageHero, Section } from "@/components/UI";
import { trails } from "@/data/site";

export const metadata: Metadata = {
  title: "Sentieri Gole del Calore",
  description:
    "Sentieri e percorsi alle Gole del Calore: anello da Felitto, Magliano Vetere, Remolino e Ponte Medievale.",
};

export default function SentieriPage() {
  return (
    <>
      <PageHero
        title="Sentieri alle Gole del Calore"
        text="Percorsi indicativi per scegliere la visita giusta. Le condizioni possono cambiare: controlla sempre tracce e informazioni aggiornate."
        image="/sentiero-gole-calore.jpg"
        imageAlt="Escursionisti su un sentiero nel bosco"
      />

      <Section title="Come leggere questi percorsi">
        <div className="max-w-3xl space-y-5 leading-8 text-moss">
          <p>
            I sentieri delle Gole del Calore non vanno scelti solo guardando la
            distanza. Fondo, ombra, caldo, acqua, segnaletica e stagione possono
            cambiare molto la difficolta percepita. Un percorso breve vicino al
            fiume puo essere semplice in una giornata asciutta e piu delicato
            dopo pioggia o piena.
          </p>
          <p>
            Per una prima visita conviene partire da un itinerario breve in area
            Remolino. Gli anelli piu lunghi verso Felitto e Magliano sono piu
            interessanti per chi vuole camminare davvero e ha gia scarpe,
            acqua, traccia offline e margine di tempo.
          </p>
        </div>
      </Section>

      <Section title="Lista sentieri">
        <div className="grid gap-5">
          {trails.map((trail) => (
            <article key={trail.name} className="rounded-lg bg-white p-5 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest">
                {trail.name}
              </h2>
              <div className="mt-4 grid gap-3 text-sm text-moss sm:grid-cols-2 lg:grid-cols-3">
                <p><strong>Partenza:</strong> {trail.start}</p>
                <p><strong>Durata:</strong> {trail.duration}</p>
                <p><strong>Distanza:</strong> {trail.distance}</p>
                <p><strong>Difficolta:</strong> {trail.difficulty}</p>
                <p><strong>Dislivello:</strong> {trail.elevation}</p>
                <p><strong>Bambini:</strong> {trail.kids}</p>
              </div>
              <p className="mt-4 leading-7 text-moss">{trail.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Quale scegliere">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Prima volta
            </h2>
            <p className="mt-3">
              Scegli il percorso breve in area Remolino. Ti permette di capire
              ambiente, accessi e tempi senza allontanarti troppo dai punti piu
              frequentati.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Mezza giornata
            </h2>
            <p className="mt-3">
              Valuta un anello da Felitto se sei abituato a camminare. Parti
              presto e lascia margine per soste, caldo e foto.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 leading-7 text-moss">
            <h2 className="font-serif text-2xl font-bold text-forest">
              Escursionisti
            </h2>
            <p className="mt-3">
              I collegamenti verso Magliano e i tratti meno battuti richiedono
              traccia aggiornata, passo sicuro e informazioni recenti.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Prima di camminare">
        <AdviceBox>
          Porta scarpe da trekking, acqua e mappa offline. Dopo piogge o piene
          evita tratti esposti e chiedi conferma sul posto.
        </AdviceBox>
      </Section>
    </>
  );
}
