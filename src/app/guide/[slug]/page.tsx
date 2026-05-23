import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section } from "@/components/UI";
import { guidePages } from "@/data/guides";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const guideHeroImages: Record<string, { image: string; alt: string }> = {
  "dove-si-trovano-gole-del-calore": {
    image: "/ponte-gole-calore.jpg",
    alt: "Ponte in pietra sul fiume Calore",
  },
  "itinerario-mezza-giornata": {
    image: "/sentiero-gole-calore.jpg",
    alt: "Sentiero nel bosco verso le Gole del Calore",
  },
  "bagno-nel-fiume-sicurezza": {
    image: "/gole-del-calore-hero.jpg",
    alt: "Acqua del fiume Calore tra le rocce",
  },
  "canoa-pedalo-remolino": {
    image: "/canoa-gole-calore.jpg",
    alt: "Canoa sul fiume Calore",
  },
  "visitare-con-bambini": {
    image: "/sentiero-gole-calore.jpg",
    alt: "Passeggiata nel verde nel Cilento interno",
  },
  "periodo-migliore": {
    image: "/gole-del-calore-hero.jpg",
    alt: "Fiume Calore tra gole e vegetazione",
  },
  "dove-parcheggiare": {
    image: "/borghi-cilento.jpg",
    alt: "Borgo del Cilento vicino alle Gole del Calore",
  },
  "cosa-vedere-a-felitto": {
    image: "/borghi-cilento.jpg",
    alt: "Borgo collinare nel Cilento",
  },
  "errori-da-evitare": {
    image: "/sentiero-gole-calore.jpg",
    alt: "Sentiero naturale con fondo irregolare",
  },
  "itinerario-un-giorno": {
    image: "/ponte-gole-calore.jpg",
    alt: "Ponte e paesaggio fluviale alle Gole del Calore",
  },
  "cosa-vedere-nei-dintorni": {
    image: "/borghi-cilento.jpg",
    alt: "Paese del Cilento interno",
  },
};

export function generateStaticParams() {
  return guidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidePages.find((item) => item.slug === slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guidePages.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const hero = guideHeroImages[guide.slug] ?? {
    image: "/gole-del-calore-hero.jpg",
    alt: "Gole del Calore",
  };
  const pageUrl = `${siteConfig.url}/guide/${guide.slug}`;
  const organizationId = `${siteConfig.url}/#organization`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: guide.title,
    description: guide.description,
    url: pageUrl,
    image: [`${siteConfig.url}${hero.image}`],
    datePublished: siteConfig.publishedDate,
    dateModified: siteConfig.modifiedDate,
    inLanguage: "it-IT",
    author: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: pageUrl,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guide",
        item: `${siteConfig.url}/guide`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero title={guide.title} text={guide.intro} image={hero.image} imageAlt={hero.alt} />
      {guide.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          <div className="max-w-3xl space-y-5 leading-8 text-moss">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>
      ))}
      <Section title="Informazioni da verificare">
        <div className="max-w-3xl rounded-lg border border-water/30 bg-river p-5 leading-8 text-forest">
          <p>
            Prima di partire controlla sempre meteo, stato del fiume, eventuali
            divieti temporanei, parcheggi, disponibilita di canoe o pedalo e
            apertura dei punti ristoro. Questo sito e indipendente e non
            ufficiale, quindi le informazioni variabili vanno confermate con
            fonti locali aggiornate.
          </p>
          <p className="mt-3 text-sm text-moss">
            Ultimo aggiornamento editoriale: 24 maggio 2026.
          </p>
        </div>
      </Section>
      <Section title="Continua la guida">
        <div className="grid gap-4 md:grid-cols-3">
          {guidePages
            .filter((item) => item.slug !== guide.slug)
            .slice(0, 3)
            .map((item) => (
              <Link key={item.slug} href={`/guide/${item.slug}`} className="rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="font-serif text-xl font-bold text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-moss">{item.description}</p>
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}
