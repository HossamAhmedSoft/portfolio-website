"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowLeft,
  Terminal, 
  Database, 
  Cpu, 
  Globe,
  Mail, 
  CheckCircle2, 
  FileText,
  Layers,
  ShieldCheck,
  Phone
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useLanguage } from "./LanguageProvider";

interface HeroProps {
  onOpenCV: () => void;
}

export function Hero({ onOpenCV }: HeroProps) {
  const { t, isAr, dir } = useLanguage();

  const verifiedPillars = [
    { icon: Terminal, label: t.hero.pillars.java.label, desc: t.hero.pillars.java.desc },
    { icon: Database, label: t.hero.pillars.database.label, desc: t.hero.pillars.database.desc },
    { icon: Globe, label: t.hero.pillars.fullstack.label, desc: t.hero.pillars.fullstack.desc },
    { icon: Cpu, label: t.hero.pillars.embedded.label, desc: t.hero.pillars.embedded.desc }
  ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Subtle Geometric Grid */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Developer Portrait & Status Badge */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200/90 dark:border-slate-800 shadow-md max-w-fit">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-sky-400 shadow-md shadow-sky-500/25 bg-slate-900 shrink-0 group">
                <Image 
                  src="/assets/profile/hossam-ahmed.jpg" 
                  alt="Hossam Ahmed" 
                  width={80}
                  height={80}
                  priority
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.hero.statusBadge}</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                  {isAr ? "حسام أحمد" : "Hossam Ahmed"}
                </div>
                <div className="text-xs font-mono text-sky-600 dark:text-sky-400">
                  {isAr ? "مهندس ومطور برمجيات" : "Software Developer & Systems Engineer"}
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              {t.hero.headlineStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400">
                {t.hero.headlineHighlight}
              </span>
              {t.hero.headlineEnd}
            </h1>

            {/* Position Summary */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              {t.hero.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                <span>{t.hero.viewCV}</span>
              </button>

              <a
                href="https://wa.me/201286677999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-sm"
                aria-label="Chat on WhatsApp (+201286677999)"
                title="Chat on WhatsApp (+201286677999)"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                <span className="font-mono text-xs">WhatsApp</span>
              </a>

              <a
                href="tel:+201286677999"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700 transition-all"
                aria-label="Call 01286677999"
                title="Call 01286677999"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span className="font-mono text-xs">01286677999</span>
              </a>

              <a
                href="https://github.com/HossamAhmedSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:border-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="hidden sm:inline font-mono text-xs">@HossamAhmedSoft</span>
              </a>
            </div>

            {/* Verified Pillar Cards */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {verifiedPillars.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/40 transition-colors text-start"
                  >
                    <p.icon className="w-5 h-5 text-sky-500 dark:text-sky-400 mb-1.5" />
                    <div className="font-semibold text-xs text-slate-900 dark:text-white leading-tight">
                      {p.label}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Architectural Systems Diagram (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative text-start">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-slate-600 dark:text-slate-400 mx-2">{t.hero.diagram.title}</span>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-900">
                  {t.hero.diagram.verifiedPipeline}
                </span>
              </div>

              {/* Connected Layers Visualization */}
              <div className="py-5 space-y-3.5">
                {/* Layer 1: Embedded Hardware / Edge */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">{t.hero.diagram.layer1Title}</span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0 font-semibold">{t.hero.diagram.layer1Badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {t.hero.diagram.layer1Desc}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-sky-600 dark:text-sky-400 font-mono text-xs">
                  ↓ <span className="text-[10px] text-slate-600 dark:text-slate-400 mx-1">{t.hero.diagram.connector1}</span>
                </div>

                {/* Layer 2: Transactional Core & Persistence */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-500 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">{t.hero.diagram.layer2Title}</span>
                      <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 shrink-0 font-semibold">{t.hero.diagram.layer2Badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {t.hero.diagram.layer2Desc}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-sky-600 dark:text-sky-400 font-mono text-xs">
                  ↓ <span className="text-[10px] text-slate-600 dark:text-slate-400 mx-1">{t.hero.diagram.connector2}</span>
                </div>

                {/* Layer 3: Presentation & User Control */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">{t.hero.diagram.layer3Title}</span>
                      <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 shrink-0 font-semibold">{t.hero.diagram.layer3Badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {t.hero.diagram.layer3Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>{t.hero.diagram.reposCount}</span>
                </span>
                <a 
                  href="#firebot-case-study" 
                  className="text-sky-500 hover:text-sky-400 font-medium text-xs hover:underline"
                >
                  {t.hero.diagram.viewSignature}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
