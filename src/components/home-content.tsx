"use client";

import Link from "next/link";
import { ArtworkCard } from "@/components/artwork-card";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import {
  getArtworkTitle,
  type Artwork,
} from "@/lib/artworks";
import { useLocale } from "@/lib/i18n/locale-context";

type HomeContentProps = {
  featured: Artwork[];
  heroArtwork: Artwork;
};

export function HomeContent({ featured, heroArtwork }: HomeContentProps) {
  const { locale, t } = useLocale();
  const heroAlt = getArtworkTitle(heroArtwork, locale);

  return (
    <>
      <SiteHeader />
      <Hero imageSrc={heroArtwork.image} imageAlt={heroAlt} />

      <section
        id="featured"
        className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mb-12 max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--ink)] md:text-5xl">
            {t("featuredTitle")}
          </h2>
          <p className="mt-3 text-lg text-[var(--muted)]">{t("featuredSub")}</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        <div className="mt-14">
          <Link href="/catalog" className="btn-primary">
            {t("ctaFullCatalog")}
          </Link>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)] md:text-4xl">
              {t("aboutTitle")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {t("aboutBody")}
            </p>
          </div>
          <blockquote className="self-center border-l-2 border-[var(--accent)] pl-5">
            <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-[var(--ink)] md:text-3xl">
              {t("heroHeadline")}
            </p>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              {t("shippingTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-[var(--muted)]">
              {t("shippingBody")}
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
              {t("commissionTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-[var(--muted)]">
              {t("commissionBody")}
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl">
              {t("brand")}
            </p>
            <p className="mt-2 text-sm text-white/65">{t("footerNote")}</p>
          </div>
          <a
            href={`mailto:${t("contactEmail")}`}
            className="text-lg text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {t("contactEmail")}
          </a>
        </div>
      </footer>
    </>
  );
}
