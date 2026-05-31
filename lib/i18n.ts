"use client";

import { createContext, useContext } from "react";
import { t as translate, type UiStringKey } from "@/data/i18n/uiStrings";

export type Language = "ko" | "en";

export const LANGUAGES: Language[] = ["ko", "en"];
export const DEFAULT_LANGUAGE: Language = "ko";
export const LANGUAGE_STORAGE_KEY = "dojo-language";

export function isLanguage(value: unknown): value is Language {
  return value === "ko" || value === "en";
}

export function otherLanguage(lang: Language): Language {
  return lang === "ko" ? "en" : "ko";
}

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  toggleLang: () => {}
});

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

// Returns a translation helper bound to the active language.
export function useT(): (key: UiStringKey) => string {
  const { lang } = useLanguage();
  return (key: UiStringKey) => translate(key, lang);
}

// Closed set of track difficulty labels shared across domains.
const LEVEL_LABELS_KO: Record<string, string> = {
  Beginner: "입문",
  Intermediate: "중급",
  Advanced: "고급",
  Expert: "전문가",
  Foundations: "기초",
  Core: "핵심",
  Practitioner: "실무"
};

export function localizeLevel(level: string, lang: Language): string {
  if (lang === "en") return level;
  return LEVEL_LABELS_KO[level] ?? level;
}
