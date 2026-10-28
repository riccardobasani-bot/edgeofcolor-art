"use client";

import { locales, localeMeta } from "@/lib/i18n/messages";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/artworks";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t("language")}
    >
      {locales.map((code: Locale) => {
        const meta = localeMeta[code];
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            title={meta.label}
            className={cn(
              "inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm transition",
              active
                ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--ink)]"
                : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--ink)]",
            )}
          >
            <span className="text-base leading-none" aria-hidden>
              {meta.flag}
            </span>
            <span className="sr-only">{meta.label}</span>
          </button>
        );
      })}
    </div>
  );
}
