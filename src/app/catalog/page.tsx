import { CatalogContent } from "@/components/catalog-content";
import { artworks } from "@/lib/artworks";

export default function CatalogPage() {
  return <CatalogContent artworks={artworks} />;
}
