export const siteConfig = {
  name: "Gole del Calore Guide",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://legoledelcalore.it",
  description:
    "Guida indipendente alle Gole del Calore tra Felitto, Remolino e Magliano Vetere.",
  ogImage: "/gole-del-calore-hero.jpg",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Localit%C3%A0%20Remolino%2C%20Felitto%2C%20SA",
  contactEmail: "redazione@legoledelcalore.it",
  publishedDate: "2026-05-05",
  modifiedDate: "2026-05-24",
  lastUpdated: "24 maggio 2026",
};

export const navItems = [
  { label: "Come arrivare", href: "/come-arrivare" },
  { label: "Sentieri", href: "/sentieri" },
  { label: "Cosa fare", href: "/cosa-fare" },
  { label: "Cosa portare", href: "/cosa-portare" },
  { label: "Guide", href: "/guide" },
  { label: "Altre gole", href: "/gole" },
  { label: "FAQ", href: "/faq" },
];

export const pages = [
  { href: "/", priority: 1 },
  { href: "/come-arrivare", priority: 0.9 },
  { href: "/sentieri", priority: 0.9 },
  { href: "/cosa-fare", priority: 0.85 },
  { href: "/cosa-portare", priority: 0.8 },
  { href: "/guide", priority: 0.85 },
  { href: "/gole", priority: 0.7 },
  { href: "/faq", priority: 0.8 },
  { href: "/fonti", priority: 0.55 },
  { href: "/chi-siamo", priority: 0.5 },
  { href: "/contatti", priority: 0.5 },
  { href: "/privacy-policy", priority: 0.3 },
  { href: "/cookie-policy", priority: 0.3 },
];

export const quickCards = [
  {
    title: "Come arrivare",
    text: "Punta su Felitto e localita Remolino. La strada finale puo essere stretta.",
    href: "/come-arrivare",
  },
  {
    title: "Sentieri",
    text: "Percorsi brevi e anelli piu lunghi verso Magliano e Ponte Medievale.",
    href: "/sentieri",
  },
  {
    title: "Cosa fare",
    text: "Trekking, bagno dove consentito, canoa, kayak, pedalo, picnic e foto.",
    href: "/cosa-fare",
  },
  {
    title: "Consigli utili",
    text: "Scarpe buone, acqua, contanti e dati aggiornati prima di partire.",
    href: "/cosa-portare",
  },
];

export const trails = [
  {
    name: "Anello da Felitto",
    start: "Centro di Felitto o area Remolino",
    duration: "4-5 ore",
    distance: "circa 8 km A/R",
    difficulty: "Media",
    elevation: "contenuto, con tratti irregolari",
    kids: "Si, se abituati a camminare",
    description:
      "Percorso classico lungo il Calore. Tocca vecchi mulini, tratti ombreggiati e punti panoramici. Verificare stato del sentiero e acqua nel periodo scelto.",
  },
  {
    name: "Anello da Magliano Vetere",
    start: "Magliano Vetere / Magliano Nuovo",
    duration: "4-6 ore",
    distance: "8-10 km indicativi",
    difficulty: "Media-impegnativa",
    elevation: "variabile",
    kids: "Solo per ragazzi allenati",
    description:
      "Itinerario piu escursionistico verso le gole e i collegamenti storici con Felitto. Richiede passo sicuro e traccia aggiornata.",
  },
  {
    name: "Percorso breve area Remolino",
    start: "Localita Remolino",
    duration: "1-2 ore",
    distance: "2-4 km indicativi",
    difficulty: "Facile-media",
    elevation: "basso",
    kids: "Si, con attenzione vicino all'acqua",
    description:
      "Scelta comoda per una prima visita, una passeggiata e soste al fiume. Ideale se hai poco tempo o vuoi restare vicino ai servizi.",
  },
  {
    name: "Verso Ponte Medievale / Pretatetta",
    start: "Remolino o versante Magliano",
    duration: "da verificare",
    distance: "da verificare",
    difficulty: "Media",
    elevation: "da verificare",
    kids: "Da valutare sul posto",
    description:
      "Voce da approfondire. Alcuni tratti possono cambiare per frane, piena o manutenzione. Cerca tracce recenti e chiedi info locali.",
  },
];

export const activities = [
  {
    title: "Trekking",
    text: "La scelta principale per capire davvero il paesaggio. Parti presto, evita caldo forte e controlla la traccia prima di entrare nei tratti piu isolati.",
  },
  {
    title: "Bagno nel fiume",
    text: "Possibile solo dove consentito e con acqua sicura. Il fondo cambia, le rocce sono scivolose e dopo la pioggia il fiume puo diventare pericoloso.",
  },
  {
    title: "Canoa",
    text: "Attivita stagionale nella zona di Remolino. Orari, prezzi, eta minima e prenotazioni vanno verificati con gli operatori locali prima di partire.",
  },
  {
    title: "Kayak",
    text: "Alternativa piu sportiva alla canoa. Meglio chiedere condizioni, livello dell'acqua e tratto effettivamente percorribile nella giornata scelta.",
  },
  {
    title: "Pedalo",
    text: "Opzione semplice per vedere il fiume dal basso senza fare un trekking lungo. Disponibilita variabile in base a stagione e portata.",
  },
  {
    title: "Torrentismo",
    text: "Da fare solo con guide e attrezzatura corretta. Non improvvisare.",
  },
  {
    title: "Picnic e relax",
    text: "Porta via tutti i rifiuti. In estate scegli ombra e acqua a sufficienza.",
  },
  {
    title: "Fotografia",
    text: "Luce bella al mattino e nel tardo pomeriggio. Custodia impermeabile consigliata.",
  },
  {
    title: "Visita a Felitto",
    text: "Abbina il borgo alla natura. Utile anche per mangiare, comprare acqua, chiedere info aggiornate e completare la visita con piu calma.",
  },
];

export const packingGroups = [
  {
    title: "Visita breve",
    items: ["scarpe comode", "acqua", "cappello", "crema solare", "contanti"],
  },
  {
    title: "Giornata intera",
    items: [
      "costume",
      "telo",
      "scarpe da scoglio",
      "repellente insetti",
      "busta rifiuti",
      "powerbank",
      "custodia impermeabile",
    ],
  },
  {
    title: "Trekking",
    items: [
      "scarpe da trekking",
      "acqua extra",
      "traccia offline",
      "snack",
      "kit base",
      "giacca leggera",
    ],
  },
];

export const faqs = [
  {
    question: "Dove si trovano le Gole del Calore?",
    answer:
      "Le Gole del Calore si trovano in Campania, nel Cilento interno, lungo il fiume Calore. Il tratto piu cercato dai visitatori e quello tra Felitto, localita Remolino, e l'area verso Magliano Vetere e Magliano Nuovo.",
  },
  {
    question: "Dove si parcheggia?",
    answer:
      "Molti visitatori puntano l'area Remolino a Felitto, perche e comoda per una prima visita e per le attivita sul fiume. Nei weekend estivi i posti possono finire presto. Accessi, tariffe e regole possono cambiare: verificare prima della partenza.",
  },
  {
    question: "Si puo fare il bagno?",
    answer:
      "In alcuni punti si entra in acqua, ma non va dato per scontato. Dipende da stagione, portata del fiume, divieti, meteo e sicurezza. Dopo piogge forti o acqua torbida e meglio evitare e chiedere conferma sul posto.",
  },
  {
    question: "Ci sono canoe e pedalo?",
    answer:
      "Nella zona Remolino possono essere presenti attivita stagionali come canoa, kayak e pedalo. Orari, disponibilita, prezzi e prenotazione non sono sempre uguali: controllare con operatori locali prima di organizzare la giornata.",
  },
  {
    question: "Sono adatte ai bambini?",
    answer:
      "Si per passeggiate brevi e aree semplici, con adulti attenti e scarpe adatte. I sentieri lunghi, i tratti vicino all'acqua e le zone con fondo irregolare sono meglio per bambini gia abituati a camminare.",
  },
  {
    question: "Quanto dura la visita?",
    answer:
      "Una sosta breve puo durare 1-2 ore. Per passeggiata, pausa al fiume e rientro considera mezza giornata. Se vuoi fare sentieri piu lunghi, attivita in acqua e visita al borgo, metti in conto una giornata intera.",
  },
  {
    question: "Serve prenotare?",
    answer:
      "Per camminare in autonomia di solito no, ma per canoe, pedalo, guide, gruppi numerosi e periodi di alta stagione e meglio controllare prima. Prenotare riduce il rischio di arrivare e non trovare disponibilita.",
  },
  {
    question: "Ci sono ristoranti?",
    answer:
      "A Felitto e nei dintorni trovi punti ristoro, agriturismi e bar, ma aperture, giorni di chiusura e posti disponibili cambiano. In alta stagione conviene chiamare e non contare solo sull'improvvisazione.",
  },
  {
    question: "Qual e il periodo migliore?",
    answer:
      "Primavera, inizio estate e autunno sono spesso i periodi piu comodi per camminare. In piena estate meglio mattina presto o tardo pomeriggio. Dopo piogge intense controlla sempre condizioni del fiume e sentieri.",
  },
  {
    question: "Il sito e ufficiale?",
    answer:
      "No. Questo sito e una guida indipendente e non ufficiale. Per orari, servizi, divieti e sicurezza verifica fonti locali aggiornate.",
  },
];

export const trustedSources = [
  {
    label: "Comune di Felitto",
    href: "https://www.comune.felitto.sa.it/",
  },
  {
    label: "Parco Nazionale del Cilento, Vallo di Diano e Alburni",
    href: "https://www.cilentoediano.it/",
  },
  {
    label: "Google Maps - localita Remolino",
    href: "https://www.google.com/maps/search/?api=1&query=Localit%C3%A0%20Remolino%2C%20Felitto%2C%20SA",
  },
];

export const guides = [
  {
    title: "Prima volta alle Gole del Calore",
    text: "Itinerario semplice: Remolino, passeggiata breve, pausa al fiume e rientro.",
    href: "/come-arrivare",
  },
  {
    title: "Sentieri da scegliere",
    text: "Differenze tra percorso breve, anello da Felitto e tratti verso Magliano.",
    href: "/sentieri",
  },
  {
    title: "Checklist per non sbagliare",
    text: "Cosa portare per bagno, trekking e giornata intera nel Cilento interno.",
    href: "/cosa-portare",
  },
];
