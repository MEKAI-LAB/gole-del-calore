import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  title,
  text,
  image,
  imageAlt = "",
  children,
}: {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1fr_0.9fr] md:items-center md:py-16">
        <div>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-forest md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-moss">{text}</p>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
        {image ? (
          <div className="relative min-h-72 overflow-hidden rounded-lg shadow-sm">
            <Image
              src={image}
              alt={imageAlt}
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
              priority
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <h2 className="font-serif text-3xl font-bold text-forest">{title}</h2>
        {text ? <p className="mt-2 max-w-2xl leading-7 text-moss">{text}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function Card({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="h-full rounded-lg border border-forest/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="font-serif text-xl font-bold text-forest">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-moss">{text}</p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export function AdviceBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border-l-4 border-water bg-water/10 p-5 text-sm leading-6 text-forest">
      <strong>Consiglio pratico: </strong>
      {children}
    </div>
  );
}

export function FAQList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="rounded-lg border border-forest/10 bg-white p-5">
          <summary className="cursor-pointer font-semibold text-forest">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-moss">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
