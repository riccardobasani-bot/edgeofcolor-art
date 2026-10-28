import artworksData from "../../data/artworks.json";

export type Locale = "en" | "es" | "it";

export type LocalizedString = {
  en: string;
  es: string;
  it: string;
};

export type Artwork = {
  id: string;
  slug: string;
  image: string;
  featured: boolean;
  priceUsd: number;
  available: boolean;
  title: LocalizedString;
  caption: LocalizedString;
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
