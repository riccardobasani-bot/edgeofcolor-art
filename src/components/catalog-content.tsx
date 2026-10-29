"use client";

import Link from "next/link";
import { ArtworkCard } from "@/components/artwork-card";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Artwork } from "@/lib/artworks";
import { useLocale } from "@/lib/i18n/locale-context";

export function CatalogContent({ artworks }: { artworks: Artwork[] }) {
  const { t } = useLocale();

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
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {t("catalogTitle")}
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
        <div className="mb-12 max-w-2xl">
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

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </main>
    </div>
  );
}
