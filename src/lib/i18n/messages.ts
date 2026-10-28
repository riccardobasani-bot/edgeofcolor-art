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
    brand: "MarcyArt",
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
    catalogSub: "Every available piece from the studio — prices are listed in USD.",
    shippingTitle: "Ships internationally",
    shippingBody:
      "Marcello ships worldwide. Ask about framing, lead times, and delivery to your country.",
    aboutTitle: "Who is Marcello Basani?",
    aboutBody:
      "Once a youth national 100-meter runner and a pianist who moves from classical scales to paint on canvas, Marcello collected degrees, passport stamps, and perspectives across Italy, Denmark, England, and the United States — then decided academic borders were too narrow. He has lived and worked in Italy, Denmark, the UK, the USA, Mexico, Nepal, Ecuador, Guyana, and Uruguay. A multicultural family — Italian meeting Indian-American — keeps the breakfast table an idea lab. His art is schema-free, irreverent, and oneiric: athletic urgency, musical structure, and nomadic mysticism.",
    quote:
      "They say to find yourself you must stay in one place. I did the opposite: I traveled the world, and when I got tired of running, I started painting.",
    priceLabel: "Price",
    available: "Available",
    sold: "Sold",
    backHome: "Back to home",
    contactEmail: "studio@marcyart.example",
    footerNote: "© Marcello Basani — EdgeOfColor / MarcyArt",
    language: "Language",
  },
  es: {
    brand: "MarcyArt",
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
    catalogSub: "Todas las piezas disponibles del estudio — precios en USD.",
    shippingTitle: "Envíos internacionales",
    shippingBody:
      "Marcello envía a todo el mundo. Pregunta por enmarcado, plazos y entrega a tu país.",
    aboutTitle: "¿Quién es Marcello Basani?",
    aboutBody:
      "Antes corredor juvenil de 100 metros a nivel nacional y pianista que pasa de las escalas clásicas a la pintura, Marcello reunió títulos, sellos de pasaporte y perspectivas en Italia, Dinamarca, Inglaterra y Estados Unidos — y decidió que las fronteras académicas eran demasiado estrechas. Ha vivido y trabajado en Italia, Dinamarca, el Reino Unido, EE. UU., México, Nepal, Ecuador, Guyana y Uruguay. Una familia multicultural — lo italiano con lo indoamericano — convierte el desayuno en un laboratorio de ideas. Su arte es libre de esquemas, irreverente y onírico: urgencia atlética, estructura musical y misticismo nómada.",
    quote:
      "Dicen que para encontrarte debes quedarte en un solo lugar. Yo hice lo contrario: recorrí el mundo, y cuando me cansé de correr, empecé a pintar.",
    priceLabel: "Precio",
    available: "Disponible",
    sold: "Vendido",
    backHome: "Volver al inicio",
    contactEmail: "studio@marcyart.example",
    footerNote: "© Marcello Basani — EdgeOfColor / MarcyArt",
    language: "Idioma",
  },
  it: {
    brand: "MarcyArt",
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
    catalogSub: "Tutte le opere disponibili dallo studio — prezzi in USD.",
    shippingTitle: "Spedizioni internazionali",
    shippingBody:
      "Marcello spedisce in tutto il mondo. Chiedi di cornici, tempi e consegna nel tuo paese.",
    aboutTitle: "Chi è Marcello Basani?",
    aboutBody:
      "Prima corridore giovanile dei 100 metri per la Nazionale e pianista che passa dalle scale classiche alla tela, Marcello ha raccolto lauree, timbri sul passaporto e prospettive in Italia, Danimarca, Inghilterra e Stati Uniti — poi ha deciso che i confini accademici erano troppo stretti. Ha vissuto e lavorato in Italia, Danimarca, UK, USA, Messico, Nepal, Ecuador, Guyana e Uruguay. Una famiglia multiculturale — Italia e cultura indiano-americana — rende la colazione un laboratorio di idee. La sua arte è senza schemi, irriverente e onirica: urgenza atletica, struttura musicale e misticismo nomade.",
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
