"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArtworkCard } from "@/components/artwork-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Artwork, ArtworkCategory } from "@/lib/artworks";
import { ARTWORK_CATEGORIES } from "@/lib/artworks";
import { useLocale } from "@/lib/i18n/locale-context";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "mountain-landscapes", label: "Mountain Landscapes" },
  { id: "portraits", label: "Portraits" },
  { id: "music-inspired-pieces", label: "Music-Inspired Pieces" },
  { id: "surreal-figurative-works", label: "Surreal / Figurative Works" },
] as const;

export function CatalogContent({ artworks }: { artworks: Artwork[] }) {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<"all" | ArtworkCategory>("all");

  const filteredArtworks = useMemo(() => {
    if (activeFilter === "all") return artworks;
    return artworks.filter((artwork) => artwork.category === activeFilter);
  }, [artworks, activeFilter]);

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--line)] bg-[var(--panel)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-xl tracking-[0.06em] text-[var(--ink)]"
            >
              {t("brand")}
            </Link>
            <p className="mt-1.5 max-w-[18rem] text-[0.68rem] leading-snug tracking-[0.04em] text-[var(--muted)]">
              {t("brandSubtitle")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {t("backHome")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="mb-8 max-w-2xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--ink)] md:text-5xl">
            {t("catalogTitle")}
          </h1>
          <p className="mt-3 text-lg text-[var(--muted)]">{t("catalogSub")}</p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            {t("shippingTitle")}. {t("shippingBody")}
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {t("commissionTitle")}. {t("commissionBody")}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id as "all" | ArtworkCategory)}
                className={[
                  "rounded-full border px-4 py-2 text-sm transition",
                  isActive
                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                    : "border-[var(--line)] bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--ink)]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </main>
    </div>
  );
}
