"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  Cpu
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface NavbarProps {
  onOpenCV: () => void;
  onOpenPalette: () => void;
}

export function Navbar({ onOpenCV, onOpenPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "FireBot", href: "#firebot-case-study" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-[#080B11]/85 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo Emblem */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-sky-400/50 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform bg-slate-900 shrink-0">
            <img 
              src="/assets/branding/portfolio-icon.jpg" 
              alt="Hossam Ahmed Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg block group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              Hossam Ahmed
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block -mt-1 font-mono">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Terminal className="w-3.5 h-3.5 text-sky-500" />
            <span className="text-[10px] text-slate-400 font-normal">Ctrl+K</span>
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/HossamAhmedSoft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* CV / Resume Button */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-lg shadow-sm shadow-sky-500/30 transition-all hover:shadow-md hover:shadow-sky-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
          >
            <FileText className="w-4 h-4" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <a
              href="https://github.com/HossamAhmedSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@HossamAhmedSoft</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
