import Image from "next/image";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { FAQList } from "@/components/UI";
import { faqs } from "@/data/site";

const quickLinks = [
  {
    title: "Come arrivare",
    text: "Indicazioni stradali, parcheggi e mezzi pubblici.",
    href: "/come-arrivare",
    icon: "car",
  },
  {
    title: "Sentieri",
    text: "I percorsi piu belli tra natura, storia e panorami.",
    href: "/sentieri",
    icon: "hike",
  },
  {
    title: "Cosa fare",
    text: "Canoe, pedalo, bagno e altre attivita.",
    href: "/cosa-fare",
    icon: "canoe",
  },
  {
    title: "Consigli utili",
    text: "Quando andare, cosa portare e norme da rispettare.",
    href: "/cosa-portare",
    icon: "info",
  },
];

const tips = [
  ["Orari consigliati", "Al mattino presto o nel tardo pomeriggio per evitare folla e caldo."],
  ["Cosa portare", "Scarpe da trekking o con suola antiscivolo, acqua, costume e cambio."],
  ["Periodo migliore", "Da aprile a ottobre. Attenzione dopo forti piogge."],
  ["Rispetta la natura", "Non lasciare rifiuti, segui i sentieri e rispetta flora e fauna."],
];

const articles = [
  {
    tag: "Guida",
    title: "Le Gole del Calore: cosa sono e dove si trovano",
    text: "Tutto quello che c'e da sapere sulle Gole del Calore tra Felitto e Magliano.",
    href: "/come-arrivare",
    image: "/ponte-gole-calore.jpg",
    alt: "Ponte in pietra sul fiume Calore",
  },
  {
    tag: "Sentieri",
    title: "I migliori sentieri da percorrere",
    text: "Percorsi per tutti i livelli tra boschi, ponti, mulini e viste sul fiume.",
    href: "/sentieri",
    image: "/sentiero-gole-calore.jpg",
    alt: "Escursionisti su un sentiero nel bosco",
  },
  {
    tag: "Cosa fare",
    title: "Canoe, pedalo e attivita sul fiume",
    text: "Vivi le Gole del Calore dall'acqua: noleggi, consigli e regole utili.",
    href: "/cosa-fare",
    image: "/canoa-gole-calore.jpg",
    alt: "Canoa sul fiume tra le gole",
  },
  {
    tag: "Nei dintorni",
    title: "Cosa vedere nei dintorni",
    text: "Borghi, siti storici e sapori locali da scoprire prima o dopo la tua visita.",
    href: "/chi-siamo",
    image: "/borghi-cilento.jpg",
    alt: "Borgo collinare nel Cilento",
  },
];

function Icon({ name }: { name: string }) {
  const common = "h-8 w-8";
  if (name === "car") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M5 16h14l-1.5-5h-11L5 16Zm2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 11l1.3-4h7.4L17 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "hike") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M13 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 8l-2 5 4 2 2 6M8 13l-3 7M12 10l3 3 3 1M16 7v14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "canoe") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path d="M4 15c5 4 11 4 16 0M7 13l10-4M8 7l8 8M6 20h12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path d="M12 17v-6M12 7h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const quickFaqs = faqs.slice(0, 5);

  return (
    <>
      <FAQSchema items={quickFaqs} />
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0">
          <Image
            src="/gole-del-calore-hero.jpg"
            alt="Fiume tra gole rocciose e vegetazione"
            fill
            priority
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-0 md:pt-24">
          <div className="max-w-2xl text-white">
            <h1 className="hero-shadow font-serif text-5xl font-bold leading-tight md:text-7xl">
              Gole del Calore: guida completa per visitarle
            </h1>
            <div className="mt-7 h-1 w-32 bg-water" />
            <p className="hero-shadow mt-7 max-w-xl text-xl leading-8">
              Sentieri, parcheggi, attivita, canoe, pedalo e consigli pratici
              per organizzare la tua visita tra Felitto e Magliano.
            </p>
          </div>

          <div className="relative mt-8 grid gap-5 md:-mb-16 md:grid-cols-4 md:px-5">
            {quickLinks.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="rounded-lg bg-white p-7 text-forest shadow-xl transition hover:-translate-y-1"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-river text-forest">
                  <Icon name={item.icon} />
                </span>
                <h2 className="mt-5 font-serif text-2xl font-bold">{item.title}</h2>
                <p className="mt-2 min-h-12 text-sm leading-5 text-moss">{item.text}</p>
                <span className="mt-5 block text-right text-3xl text-forest">-&gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 pt-24 pb-9 md:pt-28">
        <div className="mx-auto max-w-7xl rounded-lg border border-water/30 bg-river p-6">
          <div className="grid items-center gap-6 md:grid-cols-[140px_1fr]">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-water/15 text-forest">
              <svg viewBox="0 0 48 48" className="h-20 w-20" aria-hidden="true">
                <path d="M24 5 30 10l8 1 1 8 5 5-5 6-1 8-8 1-6 5-6-5-8-1-1-8-5-6 5-5 1-8 8-1 6-5Z" fill="currentColor" opacity=".9" />
                <path d="m15 25 6 6 13-14" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-forest">
                Consigli pratici in breve
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-4">
                {tips.map(([title, text]) => (
                  <div key={title} className="border-forest/15 md:border-l md:pl-5">
                    <p className="font-bold text-forest">{title}</p>
                    <p className="mt-1 text-sm leading-5 text-moss">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe6] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-bold text-forest">
              Guide e approfondimenti
            </h2>
            <Link href="/sentieri" className="hidden text-sm font-bold uppercase text-forest md:block">
              Vai alla guida completa -&gt;
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {articles.map((article) => (
              <article key={article.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-forest px-2 py-1 text-xs font-bold uppercase text-white">
                    {article.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-bold leading-6 text-forest">
                    {article.title}
                  </h3>
                  <p className="mt-2 min-h-16 text-sm leading-6 text-moss">{article.text}</p>
                  <Link href={article.href} className="mt-5 inline-block text-sm font-bold uppercase text-forest">
                    Leggi di piu -&gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 font-serif text-3xl font-bold text-forest">
            Domande frequenti
          </h2>
          <FAQList items={quickFaqs} />
          <div className="mt-6 text-center">
            <Link href="/faq" className="btn-secondary min-w-64">
              Vai a tutte le FAQ -&gt;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
