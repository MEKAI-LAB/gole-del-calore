import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Section } from "@/components/UI";
import { guidePages } from "@/data/guides";

type Props = {
  params: Promise<{ slug: string }>;
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

  return (
    <>
      <PageHero title={guide.title} text={guide.intro} image="/gole-del-calore-hero.jpg" imageAlt="Gole del Calore" />
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
              <Link key={item.slug} href={`/guide/${item.slug}`} className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-forest">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-moss">{item.description}</p>
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}
