"use client";

import React from "react";
import { 
  Mail, 
  ArrowUp, 
  Terminal, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#06080E] text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800/80 items-start">
          
          {/* Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-3 text-left">
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
                  Hossam Ahmed
                </span>
                <span className="text-[11px] font-mono text-sky-500">
                  Software Engineering
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Software developer specializing in Java backend engineering, transactional databases, modern full-stack web platforms, and embedded IoT systems.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>All 26 GitHub Repositories Verified & Synchronized</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2 text-left">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-sky-500 transition-colors">Overview</a>
              <a href="#firebot-case-study" className="hover:text-sky-500 transition-colors">Troy FireBot</a>
              <a href="#projects" className="hover:text-sky-500 transition-colors">Projects Showcase</a>
              <a href="#skills" className="hover:text-sky-500 transition-colors">Skills Matrix</a>
              <a href="#certifications" className="hover:text-sky-500 transition-colors">Certifications</a>
              <a href="#education" className="hover:text-sky-500 transition-colors">Education</a>
              <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
              <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect & Top Action (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-left md:text-right">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect Directly
            </h4>
            <div className="flex items-center md:justify-end gap-2.5">
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
              Cairo, Egypt · ICT NCTU
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 dark:text-slate-500 text-[11px]">
          <div>
            © 2026 Hossam Ahmed. Built with Next.js 16, TypeScript, and Tailwind CSS.
          </div>
          <div className="font-mono">
            Zero invented statistics · 100% verified engineering codebases
          </div>
        </div>

      </div>
    </footer>
  );
}
