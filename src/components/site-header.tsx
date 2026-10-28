"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/lib/i18n/locale-context";

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-xl tracking-[0.08em] text-white md:text-2xl">
            {t("brand")}
          </span>
          <span className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-white/70">
            {t("artist")} · {t("series")}
          </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link
            href="/#featured"
            className="hidden text-sm text-white/85 transition hover:text-white sm:inline"
          >
            {t("navHome")}
          </Link>
          <Link
            href="/catalog"
            className="text-sm text-white/85 transition hover:text-white"
          >
            {t("navCatalog")}
          </Link>
          <a
            href="#contact"
            className="hidden text-sm text-white/85 transition hover:text-white md:inline"
          >
            {t("navContact")}
          </a>
          <LanguageSwitcher className="rounded-lg bg-black/35 p-1 backdrop-blur-sm" />
        </nav>
      </div>
    </header>
  );
}
