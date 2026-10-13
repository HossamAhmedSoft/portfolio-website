"use client";

import React from "react";
import { 
  Mail, 
  ArrowUp, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2,
  Phone
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t, isAr } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#06080E] text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800/80 items-start">
          
          {/* Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-sky-400/40 bg-slate-900 shadow-sm shrink-0">
                <img 
                  src="/assets/branding/portfolio-icon.jpg" 
                  alt="Hossam Ahmed Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight block">
                  {isAr ? "حسام أحمد" : "Hossam Ahmed"}
                </span>
                <span className="text-[11px] font-mono text-sky-500">
                  {isAr ? "هندسة البرمجيات والأنظمة" : "Software Engineering"}
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {t.footer.summary}
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAr ? "جميع الـ 22 مستودعاً عاماً موثقة ومتزامنة على GitHub" : "All 22 Public GitHub Repositories Verified & Synchronized"}</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.navTitle}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-sky-500 transition-colors">{t.nav.overview}</a>
              <a href="#firebot-case-study" className="hover:text-sky-500 transition-colors">{t.nav.firebot}</a>
              <a href="#projects" className="hover:text-sky-500 transition-colors">{t.nav.projects}</a>
              <a href="#skills" className="hover:text-sky-500 transition-colors">{t.nav.skills}</a>
              <a href="#experience" className="hover:text-sky-500 transition-colors">{t.nav.experience}</a>
              <a href="#certifications" className="hover:text-sky-500 transition-colors">{t.nav.credentials}</a>
              <a href="#education" className="hover:text-sky-500 transition-colors">{t.nav.education}</a>
              <a href="#contact" className="hover:text-sky-500 transition-colors">{t.nav.contact}</a>
            </div>
          </div>

          {/* Connect & Top Action (3 cols) */}
          <div className="md:col-span-3 space-y-3 md:text-end">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.socialTitle}
            </h4>
            <div className="flex items-center md:justify-end gap-2">
              <a
                href="https://wa.me/201286677999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-200 dark:border-emerald-800/80"
                aria-label="Chat on WhatsApp (+201286677999)"
                title="WhatsApp (+201286677999)"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
              </a>
              <a
                href="tel:+201286677999"
                className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors border border-sky-200 dark:border-sky-800/80"
                aria-label="Call 01286677999"
                title="Call (01286677999)"
              >
                <Phone className="w-4 h-4 text-sky-500" />
              </a>
              <a
                href="https://github.com/HossamAhmedSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:Kabtinhosa@yahoo.com"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
              {isAr ? "القاهرة، مصر · جامعة ICT NCTU · 01286677999" : "Cairo, Egypt · ICT NCTU · 01286677999"}
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 dark:text-slate-500 text-[11px]">
          <div>
            {isAr 
              ? "© 2026 حسام أحمد. مبني بأحدث تقنيات Next.js 16، TypeScript، و Tailwind CSS."
              : "© 2026 Hossam Ahmed. Built with Next.js 16, TypeScript, and Tailwind CSS."}
          </div>
          <div className="font-mono">
            {isAr ? "أكواد برمجية حقيقية 100% موثقة بالكامل" : "Zero invented statistics · 100% verified engineering codebases"}
          </div>
        </div>

      </div>
    </footer>
  );
}
