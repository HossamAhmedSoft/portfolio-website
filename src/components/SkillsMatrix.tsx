"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Wrench, 
  ShieldCheck 
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function SkillsMatrix() {
  const { t, isAr } = useLanguage();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Terminal;
      case 1: return Layers;
      case 2: return Database;
      case 3: return Layers;
      case 4: return Cpu;
      default: return Wrench;
    }
  };

  const getLocalizedLevel = (level: string) => {
    if (!isAr) return level;
    if (level === "Advanced") return t.skills.levelAdvanced;
    if (level === "Proficient") return t.skills.levelProficient;
    return t.skills.levelFamiliar;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#080B11] text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 hover:border-sky-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-medium shrink-0 ${
                          skill.level === "Advanced" 
                            ? "bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}>
                          {getLocalizedLevel(skill.level)}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        ↳ {skill.projectEvidence}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
