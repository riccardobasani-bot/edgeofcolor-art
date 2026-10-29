import artworksData from "../../data/artworks.json";

export type Locale = "en" | "es" | "it";

export type LocalizedString = {
  en: string;
  es: string;
  it: string;
};

export type ArtworkDimensions = {
  widthCm: number;
  heightCm: number;
  pieces?: number;
};

export type Artwork = {
  id: string;
  slug: string;
  image: string;
  featured: boolean;
  priceUsd: number | null;
  available: boolean;
  title: LocalizedString;
  caption: LocalizedString;
  dimensions?: ArtworkDimensions;
};

export const artworks = artworksData as Artwork[];

export function getFeaturedArtworks() {
  return artworks.filter((a) => a.featured);
}

export function getArtworkTitle(artwork: Artwork, locale: Locale) {
  return artwork.title[locale] || artwork.title.en;
}

export function getArtworkCaption(artwork: Artwork, locale: Locale) {
  return artwork.caption[locale] || artwork.caption.en;
}

export function formatArtworkDimensions(artwork: Artwork) {
  const d = artwork.dimensions;
  if (!d) return null;
  const size = `${d.widthCm} × ${d.heightCm} cm`;
  if (d.pieces && d.pieces > 1) return { size, pieces: d.pieces };
  return { size, pieces: null as number | null };
}
