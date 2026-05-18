import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section } from "@/components/UI";
import { guidePages } from "@/data/guides";

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

  return (
    <>
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
