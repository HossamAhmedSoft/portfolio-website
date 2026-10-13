"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  Phone
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface NavbarProps {
  onOpenCV: () => void;
  onOpenPalette: () => void;
}

export function Navbar({ onOpenCV, onOpenPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.overview, href: "#hero" },
    { label: t.nav.firebot, href: "#firebot-case-study" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.aiEngineering, href: "#ai-engineering" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.credentials, href: "#certifications" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-[#080B11]/90 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo Emblem */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1 shrink-0"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-sky-400/50 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform bg-slate-900 shrink-0">
            <img 
              src="/assets/branding/portfolio-icon.jpg" 
              alt="Hossam Ahmed Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="text-start whitespace-nowrap">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base block group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors leading-tight">
              Hossam Ahmed
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono leading-tight">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick WhatsApp Contact Button */}
          <a
            href="https://wa.me/201286677999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (+201286677999)"
            className="flex items-center gap-1.5 p-2 2xl:px-2.5 2xl:py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Chat on WhatsApp (+201286677999)"
          >
            <WhatsAppIcon className="w-4 h-4 2xl:w-3.5 2xl:h-3.5 text-emerald-500 shrink-0" />
            <span className="hidden 2xl:inline font-mono">WhatsApp</span>
          </a>

          {/* Quick Direct Call Button */}
          <a
            href="tel:+201286677999"
            aria-label="Call Hossam Ahmed (+201286677999)"
            className="hidden sm:flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold whitespace-nowrap text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title="Call Hossam directly (01286677999)"
          >
            <Phone className="w-4 h-4 text-sky-500 shrink-0" />
          </a>

          {/* Theme Toggle Button (Dark / Light) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Quick Launcher / Command Palette Trigger */}
          <button
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title={t.nav.quickLauncher}
          >
            <Terminal className="w-3.5 h-3.5 text-sky-500 shrink-0" />
            <span className="text-[10px] text-slate-400 font-normal">Ctrl+K</span>
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/HossamAhmedSoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub (@HossamAhmedSoft)"
            className="hidden sm:flex items-center gap-1.5 p-2 rounded-lg text-xs font-medium whitespace-nowrap text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4 shrink-0" />
          </a>

          {/* CV / Resume Button */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white bg-sky-500 hover:bg-sky-600 rounded-lg shadow-sm shadow-sky-500/30 transition-all hover:shadow-md hover:shadow-sky-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>{t.nav.cv}</span>
          </button>

          {/* Mobile / Tablet Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-start px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPalette();
              }}
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <Terminal className="w-4 h-4 text-sky-500" />
              <span>{t.nav.quickLauncher}</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/201286677999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-lg"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+201286677999"
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80 rounded-lg"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>01286677999</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

