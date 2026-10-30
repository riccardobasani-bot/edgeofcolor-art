"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArtworkCard } from "@/components/artwork-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Artwork, ArtworkCategory } from "@/lib/artworks";
import { ARTWORK_CATEGORIES } from "@/lib/artworks";
import { useLocale } from "@/lib/i18n/locale-context";

const CATEGORY_LABELS: Record<ArtworkCategory, string> = {
  "mountain-landscapes": "Mountain Landscapes",
  portraits: "Portraits",
  "music-inspired-pieces": "Music-Inspired Pieces",
  "surreal-figurative-works": "Surreal / Figurative Works",
};

const FILTERS = [
  { id: "all", label: "All works" },
  ...ARTWORK_CATEGORIES.map((category) => ({
    id: category,
    label: CATEGORY_LABELS[category],
  })),
] as const;

export function CatalogContent({ artworks }: { artworks: Artwork[] }) {
  const { t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<"all" | ArtworkCategory>("all");

  const groupedArtworks = useMemo(
    () =>
      ARTWORK_CATEGORIES.map((category) => ({
        id: category,
        label: CATEGORY_LABELS[category],
        items: artworks.filter((artwork) => artwork.category === category),
      })),
    [artworks],
  );

  const visibleGroups = useMemo(() => {
    if (activeFilter === "all") {
      return groupedArtworks.filter((group) => group.items.length > 0);
    }

    return groupedArtworks.filter((group) => group.id === activeFilter);
  }, [activeFilter, groupedArtworks]);

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
                  "rounded-full border px-4 py-2 text-sm font-medium tracking-[0.04em] transition-all duration-200",
                  isActive
                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] shadow-sm"
                    : "border-[var(--line)] bg-[var(--panel)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-16">
          {visibleGroups.map((group) => (
            <section key={group.id} className="scroll-mt-24">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-[var(--line)] pb-3">
                <div>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                    Collection
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[var(--ink)] md:text-4xl">
                    {group.label}
                  </h2>
                </div>
                <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {group.items.length} {group.items.length === 1 ? "piece" : "pieces"}
                </span>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
