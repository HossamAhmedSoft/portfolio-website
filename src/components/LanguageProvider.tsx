"use client";

import React, { createContext, useContext, useEffect } from "react";
import { Language, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  dir: "ltr" | "rtl";
  isAr: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const defaultContextValue: LanguageContextType = {
  lang: "en",
  dir: "ltr",
  isAr: false,
  toggleLanguage: () => {},
  setLanguage: () => {},
  t: translations.en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      localStorage.removeItem("hossam_portfolio_lang");
    } catch {
      // Storage unavailable
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  }, []);

  return (
    <LanguageContext.Provider value={defaultContextValue}>
      <div dir="ltr">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context || defaultContextValue;
}


