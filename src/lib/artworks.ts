import artworksData from "../../data/artworks.json";

export const ARTWORK_CATEGORIES = [
  "mountain-landscapes",
  "portraits",
  "music-inspired-pieces",
  "surreal-figurative-works",
] as const;

export type ArtworkCategory = (typeof ARTWORK_CATEGORIES)[number];
export type Locale = "en" | "es" | "it";
export type LocaleKey = Locale;

type LocalizedText = Record<Locale, string>;

type ArtworkDimensions = {
  widthCm?: number;
  heightCm?: number;
  pieces?: number;
};

export type Artwork = {
  id: string;
  slug: string;
  image: string;
  featured: boolean;
  priceUsd: number | null;
  available: boolean;
  title: LocalizedText;
  caption: LocalizedText;
  dimensions?: ArtworkDimensions;
  category?: ArtworkCategory;
};

const categoryMap: Record<string, ArtworkCategory> = {
  "work-01": "music-inspired-pieces",
  "work-02": "surreal-figurative-works",
  "work-03": "surreal-figurative-works",
  "work-04": "portraits",
  "work-05": "mountain-landscapes",
  "work-06": "music-inspired-pieces",
  "work-07": "surreal-figurative-works",
  "work-08": "music-inspired-pieces",
  "work-09": "music-inspired-pieces",
  "work-10": "surreal-figurative-works",
  "work-11": "mountain-landscapes",
  "work-12": "mountain-landscapes",
  "work-13": "music-inspired-pieces",
  "work-14": "mountain-landscapes",
  "work-15": "mountain-landscapes",
  "work-16": "mountain-landscapes",
  "work-17": "mountain-landscapes",
  "work-18": "surreal-figurative-works",
  "work-19": "music-inspired-pieces",
  "work-20": "mountain-landscapes",
  "work-21": "surreal-figurative-works",
  "work-22": "surreal-figurative-works",
  "work-23": "surreal-figurative-works",
  "work-24": "mountain-landscapes",
  "work-25": "surreal-figurative-works",
  "work-26": "portraits",
  "work-27": "surreal-figurative-works",
  "work-28": "mountain-landscapes",
  "work-29": "portraits",
  "work-30": "mountain-landscapes",
  "work-31": "surreal-figurative-works",
  "work-32": "surreal-figurative-works",
  "work-33": "mountain-landscapes",
  "work-34": "portraits",
  "work-35": "music-inspired-pieces",
  "work-36": "surreal-figurative-works",
  "work-37": "portraits",
  "work-38": "portraits",
  "work-39": "surreal-figurative-works",
  "work-40": "mountain-landscapes",
  "work-41": "surreal-figurative-works",
  "work-42": "surreal-figurative-works",
  "work-43": "mountain-landscapes",
  "work-44": "portraits",
  "work-45": "music-inspired-pieces",
};

export const artworks: Artwork[] = (artworksData as Artwork[]).map((artwork) => ({
  ...artwork,
  category:
    artwork.category ?? categoryMap[artwork.id] ?? "surreal-figurative-works",
}));

export function getFeaturedArtworks() {
  return artworks.filter((artwork) => artwork.featured);
}

export function getArtworkTitle(artwork: Artwork, locale: Locale) {
  return artwork.title?.[locale] ?? artwork.title?.en ?? "Untitled";
}

export function getArtworkCaption(artwork: Artwork, locale: Locale) {
  return artwork.caption?.[locale] ?? artwork.caption?.en ?? "";
}

export function formatArtworkDimensions(artwork: Artwork) {
  const { widthCm, heightCm, pieces } = artwork.dimensions ?? {};

  if (!widthCm || !heightCm) {
    return null;
  }

  return {
    size: `${widthCm} × ${heightCm} cm`,
    pieces,
  };
}
