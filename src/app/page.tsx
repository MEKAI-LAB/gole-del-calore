import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FAQSchema } from "@/components/FAQSchema";
import { Card, FAQList, Section } from "@/components/UI";
import { faqs, guides, quickCards, siteConfig } from "@/data/site";

export default function Home() {
  const quickFaqs = faqs.slice(0, 5);

  return (
    <>
      <FAQSchema items={quickFaqs} />
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
          <div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-forest md:text-6xl">
              Gole del Calore: guida completa per visitarle
            </h1>
            <p className="mt-5 text-lg leading-8 text-moss">
              Sentieri, parcheggi, attivita, canoe, pedalo e consigli pratici
              per organizzare la tua visita tra Felitto e Magliano.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.mapsUrl} target="_blank" className="btn-primary">
                Apri su Google Maps
              </a>
              <Link href="/sentieri" className="btn-secondary">
                Scopri i sentieri
              </Link>
              <Link href="/cosa-portare" className="btn-secondary">
                Cosa portare
              </Link>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg">
            <Image
              src="/gole-del-calore-hero.png"
              alt="Fiume tra gole rocciose e vegetazione"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>

      <Section title="Info rapide">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickCards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-6xl px-4 py-2">
        <AdSlot slot="home-after-intro" format="horizontal" />
      </div>

      <Section
        title="FAQ rapide"
        text="Risposte brevi alle domande piu cercate prima di partire."
      >
        <FAQList items={quickFaqs} />
      </Section>

      <Section title="Guide utili" text="Struttura pronta per aggiungere articoli blog.">
        <div className="grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <Card key={guide.title} {...guide} />
          ))}
        </div>
      </Section>
    </>
  );
}
