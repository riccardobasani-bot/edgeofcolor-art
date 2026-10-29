"use client";

import Image from "next/image";
import {
  formatArtworkDimensions,
  getArtworkCaption,
  getArtworkTitle,
  type Artwork,
} from "@/lib/artworks";
import { useLocale } from "@/lib/i18n/locale-context";
import { localeMeta } from "@/lib/i18n/messages";
import { formatPriceUsd } from "@/lib/utils";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const { locale, t } = useLocale();
  const title = getArtworkTitle(artwork, locale);
  const caption = getArtworkCaption(artwork, locale);
  const dims = formatArtworkDimensions(artwork);
  const showPrice =
    typeof artwork.priceUsd === "number" && Number.isFinite(artwork.priceUsd);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--panel)]">
        <Image
          src={artwork.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 space-y-1.5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
            {title}
          </h3>
          {showPrice ? (
            <p className="shrink-0 text-sm font-medium text-[var(--accent-deep)]">
              {formatPriceUsd(
                artwork.priceUsd as number,
                localeMeta[locale].numberLocale,
              )}
            </p>
          ) : null}
        </div>
        {dims ? (
          <p className="text-sm text-[var(--ink)]/80">
            <span className="text-[var(--muted)]">{t("dimensionsLabel")}: </span>
            {dims.size}
            {dims.pieces ? ` (${dims.pieces} ${t("piecesLabel")})` : null}
          </p>
        ) : null}
        <p className="text-sm leading-relaxed text-[var(--muted)]">{caption}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          {artwork.available ? t("available") : t("sold")}
        </p>
      </div>
    </article>
  );
}
