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
    brand: "EdgeOfColor Art - Mar Cielo",
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
    aboutTitle: "Behind EdgeOfColor Art",
    aboutBody:
      "EdgeOfColor Art is an independent painting practice driven by experimentation rather than a fixed artistic language. The work moves freely between abstraction and suggestion, combining color, texture, gesture and layered surfaces to create images that are intuitive, atmospheric and sometimes oneiric. The process is deliberately exploratory. Acrylics, pigments and mixed techniques are built up, altered, covered and rediscovered, allowing each painting to develop through an interplay of intention and chance. Rather than illustrating a predetermined idea, the work emerges through the act of painting itself. EdgeOfColor Art is less interested in defining the artist than in letting the paintings establish their own identity. ",
    quote:
      "They say that to find yourself you must stay in the same place. I did the opposite: I traveled the world, and when I got tired of running, I started painting.",
    priceLabel: "Price",
    available: "Available",
    sold: "Sold",
    backHome: "Back to home",
    contactEmail: "studio@marcyart.example",
    footerNote: "© EdgeOfColor / MarcyArt",
    language: "Language",
  },
  es: {
    brand: "EdgeOfColor Art",
    brandSubtitle: "Fragmentos de experiencia que toman forma",
    tagline: "Cada lienzo cuenta una historia",
    artist: "EdgeOfColor Art",
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
      "Marcello envía a todo el mundo. Pregunta por enmarcado, plazos y entrega a tu país.",
    commissionTitle: "Encargos",
    commissionBody:
      "Marcello también pinta por encargo. Comparte un tamaño, un tema o un ambiente, y trabajará contigo desde el primer boceto hasta el lienzo terminado.",
    aboutTitle: "¿Quién es Marcello Basani?",
    aboutBody:
      "Antes corredor juvenil de 100 metros a nivel nacional y pianista que pasa de las escalas clásicas a la pintura, Marcello reunió títulos, sellos de pasaporte y perspectivas en Italia, Dinamarca, Inglaterra y Estados Unidos hasta que las fronteras académicas le resultaron demasiado estrechas. Vivir y trabajar en Italia, Dinamarca, el Reino Unido, EE. UU., México, Nepal, Ecuador, Guyana y Uruguay se convirtió en otra forma de educación, y cada lugar dejó su huella. Su familia entrelaza Italia con la India y América, y mantiene los caminos nórdicos en su órbita; la mesa del desayuno sigue siendo un laboratorio de ideas. Su arte es libre de esquemas, irreverente y onírico: urgencia atlética, estructura musical y misticismo nómada.",
    quote:
      "Dicen que para encontrarte a ti mismo debes permanecer en el mismo lugar. Yo hice lo contrario: recorrí el mundo, y cuando me cansé de correr, empecé a pintar.",
    priceLabel: "Precio",
    available: "Disponible",
    sold: "Vendido",
    backHome: "Volver al inicio",
    contactEmail: "studio@marcyart.example",
    footerNote: "© EdgeOfColor / MarcyArt",
    language: "Idioma",
  },
  it: {
    brand: "EdgeOfColor Art",
    brandSubtitle: "Frammenti di esperienza che prendono forma",
    tagline: "Ogni tela racconta una storia",
    artist: "EdgeOfColor Art",
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
    aboutTitle: "Dietro EdgeOfColor Art",
    aboutBody:
      "EdgeOfColor Art è una pratica pittorica indipendente, guidata dalla sperimentazione piuttosto che da un linguaggio artistico definito. Il lavoro si muove liberamente tra astrazione e suggestione, combinando colore, materia, gesto e superfici stratificate per creare immagini intuitive, atmosferiche e talvolta oniriche. Il processo è volutamente esplorativo. Acrilici, pigmenti e tecniche miste vengono sovrapposti, modificati, coperti e riscoperti, lasciando che ogni dipinto si sviluppi attraverso il dialogo tra intenzione e caso. Piuttosto che illustrare un’idea prestabilita, l’opera emerge attraverso l’atto stesso del dipingere.EdgeOfColor Art è meno interessato a definire l’artista che a lasciare che siano i dipinti a costruire la propria identità.",
    quote:
      "Dicono che per trovare te stesso tu debba rimanere nello stesso posto. Io ho fatto il contrario: ho girato il mondo, e quando mi sono stancato di correre, ho iniziato a dipingere.",
    priceLabel: "Prezzo",
    available: "Disponibile",
    sold: "Venduto",
    backHome: "Torna alla home",
    contactEmail: "studio@marcyart.example",
    footerNote: "© EdgeOfColor / MarcyArt",
    language: "Lingua",
  },
} as const;

export type MessageKey = keyof (typeof messages)["en"];
