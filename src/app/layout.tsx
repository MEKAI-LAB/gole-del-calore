import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Header, Footer } from "@/components/SiteChrome";
import { siteConfig } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gole del Calore: guida indipendente tra Felitto e Magliano",
    template: "%s | Gole del Calore",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Gole del Calore: guida completa per visitarle",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${lora.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
