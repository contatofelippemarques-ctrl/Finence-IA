"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, localeNames, locales, dictionary } = useLanguage();

  return (
    <label className={cn("flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-sm text-white/80", compact && "px-2")}>
      <Languages className="h-4 w-4 text-teal-300" />
      <span className={compact ? "sr-only" : ""}>{dictionary.common.language}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        className="bg-transparent text-white outline-none"
        aria-label={dictionary.common.language}
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-slate-950 text-white">
            {localeNames[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
