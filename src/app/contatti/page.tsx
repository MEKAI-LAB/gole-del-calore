import type { Metadata } from "next";
import { PageHero, Section } from "@/components/UI";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatti della guida indipendente sulle Gole del Calore.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        title="Contatti"
        text="Per segnalazioni, correzioni o collaborazioni editoriali puoi scriverci."
      />
      <Section title="Scrivici">
        <div className="max-w-2xl rounded-lg bg-white p-5 leading-8 text-moss">
          <p>
            Email:{" "}
            <a className="font-semibold text-water" href="mailto:info@example.com">
              info@example.com
            </a>
          </p>
          <p className="mt-3">
            Non siamo un ufficio informazioni ufficiale. Per emergenze,
            prenotazioni, divieti o servizi locali contatta fonti ufficiali e
            operatori del territorio.
          </p>
        </div>
      </Section>
    </>
  );
}
