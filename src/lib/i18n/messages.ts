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
      "EdgeOfColor Art is an independent painting practice defined by experimentation rather than a fixed style. The work moves fluidly between atmospheric landscapes, portraiture, musical references and figurative invention, weaving color, texture, gesture and layered surfaces into images that feel intuitive, luminous and sometimes dreamlike. The process is deliberately exploratory: acrylics, pigments and mixed media are built, altered, covered and rediscovered as each painting takes shape through a dialogue between intention and chance. Rather than illustrating a premeditated idea, the work emerges in the act of painting itself. EdgeOfColor Art is less concerned with defining the artist than with allowing each work to discover its own identity.",
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
      "EdgeOfColor Art es una práctica pictórica independiente definida por la experimentación más que por un estilo fijo. El trabajo se desplaza fluidamente entre paisajes atmosféricos, retratos, referencias musicales e invención figurativa, entrelazando color, textura, gesto y superficies estratificadas en imágenes intuitivas, luminosas y a veces oníricas. El proceso es deliberadamente exploratorio: acrílicos, pigmentos y medios mixtos se construyen, se alteran, se cubren y se redescubren mientras cada pintura toma forma a través del diálogo entre intención y azar. Antes que ilustrar una idea preconcebida, la obra surge en el propio acto de pintar. EdgeOfColor Art está menos preocupado por definir al artista que por dejar que cada obra descubra su propia identidad.",
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
      "EdgeOfColor Art è una pratica pittorica indipendente definita dall'esperienza e dall'esplorazione, più che da uno stile fisso. Il lavoro si muove con fluidità tra paesaggi atmosferici, ritratti, riferimenti musicali e invenzione figurativa, intrecciando colore, texture, gesto e superfici stratificate in immagini intuitive, luminose e talvolta oniriche. Il processo è deliberatamente esplorativo: acrilici, pigmenti e media misti vengono costruiti, trasformati, coperti e riscoperti mentre ciascun dipinto prende forma attraverso il dialogo tra intenzione e caso. Piuttosto che illustrare un'idea premeditata, l'opera prende vita nell'atto stesso del dipingere. EdgeOfColor Art è meno interessato a definire l'artista che a lasciare che ciascuna opera scopra la propria identità.",
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
