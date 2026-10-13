"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  dir: "ltr" | "rtl";
  isAr: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Arabic as requested by user ("عايزه عربي و انجليزي"), with easy toggle
  const [lang, setLangState] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("hossam_portfolio_lang") as Language | null;
      if (savedLang === "en" || savedLang === "ar") {
        setLangState(savedLang);
        applyLanguage(savedLang);
      } else {
        // Default to Arabic if not previously set
        applyLanguage("ar");
      }
    } catch (e) {
      applyLanguage("ar");
    }
    setMounted(true);
  }, []);

  const applyLanguage = (newLang: Language) => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  };

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("hossam_portfolio_lang", newLang);
    } catch (e) {
      // Storage unavailable
    }
    applyLanguage(newLang);
  };

  const toggleLanguage = () => {
    const nextLang = lang === "ar" ? "en" : "ar";
    setLanguage(nextLang);
  };

  const value: LanguageContextType = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    isAr: lang === "ar",
    toggleLanguage,
    setLanguage,
    t: translations[lang] || translations.ar,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
