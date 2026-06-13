"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, localeNames, locales, rtlLocales } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/types";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: (typeof dictionaries)[Locale];
  dir: "ltr" | "rtl";
  localeNames: typeof localeNames;
  locales: Locale[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function normalizeLocale(value?: string | null): Locale {
  if (!value) return "en";
  const short = value.toLowerCase().split("-")[0] as Locale;
  return locales.includes(short) ? short : "en";
}

export function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("finance-ia-locale");
  if (stored) return normalizeLocale(stored);
  return normalizeLocale(window.navigator.language);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const detected = detectBrowserLocale();
    setLocaleState(detected);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("finance-ia-locale", nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = rtlLocales.includes(nextLocale) ? "rtl" : "ltr";
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      dictionary: dictionaries[locale],
      dir: rtlLocales.includes(locale) ? "rtl" : "ltr",
      localeNames,
      locales
    }),
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = value.dir;
  }, [locale, value.dir]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
