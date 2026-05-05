export const siteConfig = {
  name: "Gole del Calore Guide",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gole-del-calore.vercel.app",
  description:
    "Guida indipendente alle Gole del Calore tra Felitto, Remolino e Magliano Vetere.",
  ogImage: "/gole-del-calore-hero.jpg",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Localit%C3%A0%20Remolino%2C%20Felitto%2C%20SA",
};

export const navItems = [
  { label: "Come arrivare", href: "/come-arrivare" },
  { label: "Sentieri", href: "/sentieri" },
  { label: "Cosa fare", href: "/cosa-fare" },
  { label: "Cosa portare", href: "/cosa-portare" },
  { label: "FAQ", href: "/faq" },
];

export const pages = [
  { href: "/", priority: 1 },
  { href: "/come-arrivare", priority: 0.9 },
  { href: "/sentieri", priority: 0.9 },
  { href: "/cosa-fare", priority: 0.85 },
  { href: "/cosa-portare", priority: 0.8 },
  { href: "/faq", priority: 0.8 },
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
    text: "La scelta principale. Parti presto, evita caldo forte e controlla la traccia.",
  },
  {
    title: "Bagno nel fiume",
    text: "Possibile solo dove consentito e con acqua sicura. Rocce scivolose: scarpe da scoglio utili.",
  },
  {
    title: "Canoa",
    text: "Attivita stagionale in zona Remolino. Orari, prezzi e prenotazioni vanno verificati.",
  },
  {
    title: "Kayak",
    text: "Alternativa piu sportiva alla canoa. Meglio chiedere condizioni e livello dell'acqua.",
  },
  {
    title: "Pedalo",
    text: "Opzione semplice per vedere il fiume dal basso. Disponibilita variabile.",
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
    text: "Abbina il borgo alla natura. Utile anche per mangiare e chiedere info aggiornate.",
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
      "In Campania, nel Cilento interno, lungo il fiume Calore. Il tratto piu visitato e tra Felitto, localita Remolino, e Magliano Vetere/Magliano Nuovo.",
  },
  {
    question: "Dove si parcheggia?",
    answer:
      "Molti visitatori puntano l'area Remolino a Felitto. Posti, accessi e regole possono cambiare: verificare prima della partenza.",
  },
  {
    question: "Si puo fare il bagno?",
    answer:
      "In alcuni punti si entra in acqua, ma dipende da stagione, portata, divieti e sicurezza. Verifica sempre sul posto.",
  },
  {
    question: "Ci sono canoe e pedalo?",
    answer:
      "Nella zona Remolino sono presenti attivita stagionali come canoa, kayak e pedalo. Orari e disponibilita vanno verificati.",
  },
  {
    question: "Sono adatte ai bambini?",
    answer:
      "Si per passeggiate brevi e aree semplici, con adulti attenti. I sentieri lunghi sono meglio per bambini abituati a camminare.",
  },
  {
    question: "Quanto dura la visita?",
    answer:
      "Da 1-2 ore per una sosta breve a mezza giornata o giornata intera se fai sentieri e attivita sul fiume.",
  },
  {
    question: "Serve prenotare?",
    answer:
      "Per camminare di solito no, ma per canoe, guide, gruppi e alta stagione e meglio controllare e prenotare.",
  },
  {
    question: "Ci sono ristoranti?",
    answer:
      "A Felitto e nei dintorni trovi punti ristoro, ma aperture e posti cambiano. In alta stagione conviene chiamare.",
  },
  {
    question: "Qual e il periodo migliore?",
    answer:
      "Primavera, inizio estate e autunno sono spesso piu comodi per camminare. In estate meglio mattina presto.",
  },
  {
    question: "Il sito e ufficiale?",
    answer:
      "No. Questo sito e una guida indipendente e non ufficiale. Per orari, servizi, divieti e sicurezza verifica fonti locali aggiornate.",
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
