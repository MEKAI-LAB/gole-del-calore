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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gole del Calore Guide",
  url: siteConfig.url,
  inLanguage: "it-IT",
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: "Gole del Calore Guide",
    url: siteConfig.url,
    email: siteConfig.contactEmail,
  },
};

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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8111339542021351"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
