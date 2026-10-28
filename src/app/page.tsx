import { HomeContent } from "@/components/home-content";
import { artworks, getFeaturedArtworks } from "@/lib/artworks";

export default function HomePage() {
  const featured = getFeaturedArtworks();
  const heroArtwork =
    artworks.find((a) => a.id === "work-01") ?? featured[0] ?? artworks[0];

  return <HomeContent featured={featured} heroArtwork={heroArtwork} />;
}
