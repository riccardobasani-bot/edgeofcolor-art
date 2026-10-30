import type { Locale } from "@/lib/artworks";

export const locales: Locale[] = ["en", "es", "it"];

export const localeMeta: Record<
  Locale,
  { label: string; flag: string; htmlLang: string; numberLocale: string }
> = {
  en: { label: "English", flag: "🇺🇸", htmlLang: "en", numberLocale: "en-US" },
  es: { label: "Español", flag: "🇪🇸", htmlLang: "es", numberLocale: "es-ES" },
  it: { label: "Italiano", flag: "🇮🇹", htmlLang: "it", numberLocale: "it-IT" },
};

export const messages = {
  en: {
    brand: "Kromo Atlas - EdgeOfColor Art",
    brandSubtitle: "Fragments of Experience Shaped into Form",
    tagline: "Every Canvas tells a Story",
    artist: "EdgeOfColor Art",
    series: "EdgeOfColor",
    navHome: "Home",
    navCatalog: "Catalog",
    navContact: "Contact",
    heroHeadline: "Visual anarchy. Cosmic rhythm. Never standing still.",
    heroSub:
      "Paintings born from speed, music, and a life lived across continents — portals for walls that can take a challenge.",
    ctaExplore: "Explore the works",
    ctaContact: "Contact the artist",
    ctaFullCatalog: "View full catalog",
    featuredTitle: "Featured works",
    featuredSub: "A first look at the EdgeOfColor collection.",
    catalogTitle: "Full catalog",
    catalogSub: "Every available piece from the studio. Dimensions are listed where known.",
    dimensionsLabel: "Dimensions",
    piecesLabel: "pieces",
    shippingTitle: "Ships internationally",
    shippingBody:
      "EdgeOfColor Art ships worldwide. Ask about framing, lead times, and delivery to your country.",
    commissionTitle: "Commissions",
    commissionBody:
      "EdgeOfColor Art also paints on commission. Share a size, subject, or mood, and he will work with you from the first sketch to the finished canvas.",
    aboutTitle: "Behind Kromo Atlas / EdgeOfColor Art",
    aboutBody:
      "EdgeOfColor Art is an independent painting practice shaped by color, rhythm, and movement. The work drifts between mountain light, portraiture, music, and figurative imagination, building vivid worlds where saturated tones, layered textures, and gestural marks become a language of their own. Acrylics, pigments, and mixed media are applied, scraped, reworked, and rediscovered until each canvas holds a pulse of energy and atmosphere. Rather than following a fixed script, each painting emerges from instinct, memory, and the thrill of discovery. EdgeOfColor Art is less interested in defining a single style than in letting every work reveal its own chromatic identity.",
    quote:
      "They say that to find yourself you must stay in the same place. I did the opposite: I traveled the world, and when I got tired of running, I started painting.",
    priceLabel: "Price",
    available: "Available",
    sold: "Sold",
    backHome: "Back to home",
    contactEmail: "marcybasa@gmail.com",
    footerNote: "© Kromo Atlas / EdgeOfColor",
    language: "Language",
  },
  es: {
    brand: "EdgeOfColor Art",
    brandSubtitle: "Fragmentos de experiencia que toman forma",
    tagline: "Cada lienzo cuenta una historia",
    artist: "Kromo Atlas / EdgeOfColor Art",
    series: "EdgeOfColor",
    navHome: "Inicio",
    navCatalog: "Catálogo",
    navContact: "Contacto",
    heroHeadline: "Anarquía visual. Ritmo cósmico. Nunca quedarse quieto.",
    heroSub:
      "Pinturas nacidas de la velocidad, la música y una vida vivida entre continentes — portales para paredes que aceptan el desafío.",
    ctaExplore: "Explorar las obras",
    ctaContact: "Contactar al artista",
    ctaFullCatalog: "Ver catálogo completo",
    featuredTitle: "Obras destacadas",
    featuredSub: "Una primera mirada a la colección EdgeOfColor.",
    catalogTitle: "Catálogo completo",
    catalogSub: "Todas las piezas disponibles del estudio. Dimensiones indicadas cuando se conocen.",
    dimensionsLabel: "Dimensiones",
    piecesLabel: "piezas",
    shippingTitle: "Envíos internacionales",
    shippingBody:
      "EdgeOfColor Art envía a todo el mundo. Pregunta por enmarcado, plazos y entrega a tu país.",
    commissionTitle: "Encargos",
    commissionBody:
      "EdgeOfColor Art también pinta por encargo. Comparte un tamaño, un tema o un ambiente, y trabajará contigo desde el primer boceto hasta el lienzo terminado.",
    aboutTitle: "Detrás de Kromo Atlas / EdgeOfColor Art",
    aboutBody:
      "EdgeOfColor Art es una práctica pictórica independiente moldeada por el color, el ritmo y el movimiento. La obra se desplaza entre la luz de las montañas, los retratos, la música y la imaginación figurativa, creando mundos vibrantes donde los tonos saturados, las texturas superpuestas y los trazos gestuales se convierten en un lenguaje propio. Acrílicos, pigmentos y técnicas mixtas se aplican, raspan, reescriben y redescubren hasta que cada lienzo guarda un pulso de energía y atmósfera. En lugar de seguir un guion fijo, cada pintura surge del instinto, la memoria y la emoción del descubrimiento. EdgeOfColor Art está menos interesado en definir un único estilo que en dejar que cada obra revele su propia identidad cromática.",
    quote:
      "Dicen que para encontrarte a ti mismo debes permanecer en el mismo lugar. Yo hice lo contrario: recorrí el mundo, y cuando me cansé de correr, empecé a pintar.",
    priceLabel: "Precio",
    available: "Disponible",
    sold: "Vendido",
    backHome: "Volver al inicio",
    contactEmail: "marcybasa@gmail.com",
    footerNote: "© Kromo Atlas / EdgeOfColor",
    language: "Idioma",
  },
  it: {
    brand: "EdgeOfColor Art",
    brandSubtitle: "Frammenti di esperienza che prendono forma",
    tagline: "Ogni tela racconta una storia",
    artist: "Kromo Atlas / EdgeOfColor Art",
    series: "EdgeOfColor",
    navHome: "Home",
    navCatalog: "Catalogo",
    navContact: "Contatti",
    heroHeadline: "Anarchia visiva. Ritmo cosmico. Mai stare fermi.",
    heroSub:
      "Dipinti nati dalla velocità, dalla musica e da una vita vissuta tra i continenti — portali per pareti che accettano la sfida.",
    ctaExplore: "Esplora le opere",
    ctaContact: "Contatta l'artista",
    ctaFullCatalog: "Vedi il catalogo completo",
    featuredTitle: "Opere in evidenza",
    featuredSub: "Uno sguardo alla collezione EdgeOfColor.",
    catalogTitle: "Catalogo completo",
    catalogSub: "Tutte le opere disponibili dallo studio. Dimensioni indicate quando note.",
    dimensionsLabel: "Dimensioni",
    piecesLabel: "pezzi",
    shippingTitle: "Spedizioni internazionali",
    shippingBody:
      "EdgeOfColor Art spedisce in tutto il mondo. Chiedi di cornici, tempi e consegna nel tuo paese.",
    commissionTitle: "Commissioni",
    commissionBody:
      "EdgeOfColor Art dipinge anche su commissione. Condividi una misura, un soggetto o un'atmosfera, e lavorerà con te dal primo schizzo alla tela finita.",
    aboutTitle: "Dietro Kromo Atlas / EdgeOfColor Art",
    aboutBody:
      "EdgeOfColor Art è una pratica pittorica indipendente modellata dal colore, dal ritmo e dal movimento. Il lavoro si muove tra la luce delle montagne, il ritratto, la musica e l'immaginazione figurativa, costruendo mondi vivaci in cui toni saturi, texture stratificate e tratti gestuali diventano una lingua propria. Acrilici, pigmenti e tecniche miste vengono applicati, raschiati, rielaborati e riscoperti finché ogni tela porta in sé il battito di energia e atmosfera. Piuttosto che seguire uno script fisso, ogni dipinto nasce dall'istinto, dalla memoria e dal piacere della scoperta. EdgeOfColor Art è meno interessato a definire un unico stile che a lasciare che ogni opera riveli la propria identità cromatica.",
    quote:
      "Dicono che per trovare te stesso tu debba rimanere nello stesso posto. Io ho fatto il contrario: ho girato il mondo, e quando mi sono stancato di correre, ho iniziato a dipingere.",
    priceLabel: "Prezzo",
    available: "Disponibile",
    sold: "Venduto",
    backHome: "Torna alla home",
    contactEmail: "marcybasa@gmail.com",
    footerNote: "© Kromo Atlas / EdgeOfColor",
    language: "Lingua",
  },
} as const;

export type MessageKey = keyof (typeof messages)["en"];
