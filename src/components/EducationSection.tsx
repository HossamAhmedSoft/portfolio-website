"use client";

import React from "react";
import { educationHistory } from "@/data/education";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  Users
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function EducationSection() {
  const { t, isAr } = useLanguage();

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "University":
        return "bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800";
      case "Academy":
        return "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800";
      default:
        return "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800";
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-[#0B0F19]/50 border-t border-slate-200 dark:border-slate-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isAr ? "المسار الأكاديمي والتعليمي" : "Academic Background & Education"}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            {isAr 
              ? "برامج الدرجات الجامعية والتعليم التأسيسي في علوم وهندسة الحاسب المعتمدة."
              : "Verified university degree programs and foundational computer science education."}
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationHistory.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-purple-500/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold border ${getTypeBadge(item.type)}`}>
                    {isAr ? (item.type === "University" ? "جامعة" : "أكاديمية") : item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isAr ? item.period.replace("Present", "حتى الآن").replace("—", "-") : item.period}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isAr 
                    ? (item.institution.includes("New Cairo") 
                        ? "جامعة مصر التكنولوجية الدولية بالقاهرة الجديدة (NCTU)" 
                        : "الأكاديمية الدولية للحاسبات والذكاء الاصطناعي (MICA)")
                    : item.institution}
                </h3>

                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {isAr 
                    ? (item.type === "University" 
                        ? "تكنولوجيا المعلومات والاتصالات (ICT)" 
                        : "منهج تأسيسي مكثف لمدة 3 سنوات في علوم وهندسة البرمجيات")
                    : item.degreeOrProgram}
                </p>

                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isAr ? (item.location.includes("New Cairo") ? "القاهرة الجديدة، مصر" : "القاهرة، مصر") : item.location}</span>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  {(isAr ? item.highlightsAr : item.highlights).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
