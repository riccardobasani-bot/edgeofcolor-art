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
    brand: "EdgeOfColor Art",
    artist: "Marcello Basani",
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
      "Marcello ships worldwide. Ask about framing, lead times, and delivery to your country.",
    aboutTitle: "Who is Marcello Basani?",
    aboutBody:
      "Once a youth national 100-meter runner and a pianist who moves from classical scales to paint on canvas, Marcello gathered degrees, passport stamps, and perspectives across Italy, Denmark, England, and the United States until academic borders felt too narrow. Living and working through Italy, Denmark, the UK, the USA, Mexico, Nepal, Ecuador, Guyana, and Uruguay became its own kind of education, each place leaving a mark. His family braids Italy with India and America, and keeps Nordic roads in its orbit; the breakfast table stays an idea lab. His art is schema-free, irreverent, and oneiric: athletic urgency, musical structure, and nomadic mysticism.",
    quote:
      "They say that to find yourself you must stay in the same place. I did the opposite: I traveled the world, and when I got tired of running, I started painting.",
    priceLabel: "Price",
    available: "Available",
    sold: "Sold",
    backHome: "Back to home",
    contactEmail: "studio@marcyart.example",
    footerNote: "© Marcello Basani — EdgeOfColor / MarcyArt",
    language: "Language",
  },
  es: {
    brand: "EdgeOfColor Art",
    artist: "Marcello Basani",
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
    footerNote: "© Marcello Basani — EdgeOfColor / MarcyArt",
    language: "Idioma",
  },
  it: {
    brand: "EdgeOfColor Art",
    artist: "Marcello Basani",
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
      "Marcello spedisce in tutto il mondo. Chiedi di cornici, tempi e consegna nel tuo paese.",
    aboutTitle: "Chi è Marcello Basani?",
    aboutBody:
      "Prima corridore giovanile dei 100 metri per la Nazionale e pianista che passa dalle scale classiche alla tela, Marcello ha raccolto lauree, timbri sul passaporto e prospettive in Italia, Danimarca, Inghilterra e Stati Uniti finché i confini accademici gli sono sembrati troppo stretti. Vivere e lavorare in Italia, Danimarca, UK, USA, Messico, Nepal, Ecuador, Guyana e Uruguay è diventata un'altra forma di educazione, e ogni luogo ha lasciato un segno. La sua famiglia intreccia l'Italia con l'India e l'America, e tiene le strade nordiche nella propria orbita; la colazione resta un laboratorio di idee. La sua arte è senza schemi, irriverente e onirica: urgenza atletica, struttura musicale e misticismo nomade.",
    quote:
      "Dicono che per trovare te stesso tu debba rimanere nello stesso posto. Io ho fatto il contrario: ho girato il mondo, e quando mi sono stancato di correre, ho iniziato a dipingere.",
    priceLabel: "Prezzo",
    available: "Disponibile",
    sold: "Venduto",
    backHome: "Torna alla home",
    contactEmail: "studio@marcyart.example",
    footerNote: "© Marcello Basani — EdgeOfColor / MarcyArt",
    language: "Lingua",
  },
} as const;

export type MessageKey = keyof (typeof messages)["en"];
