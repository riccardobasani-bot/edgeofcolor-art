"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
};

export function Hero({ imageSrc, imageAlt }: HeroProps) {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.35em] text-[var(--accent)] md:text-base">
            {t("artist")}
          </p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {t("series")}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
            {t("heroHeadline")}
          </p>
          <p className="mt-3 max-w-xl text-base text-white/70 md:text-lg">
            {t("heroSub")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#featured" className="btn-primary">
              {t("ctaExplore")}
            </Link>
            <a href="#contact" className="btn-ghost">
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
