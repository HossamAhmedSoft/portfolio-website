"use client";

import React, { useState } from "react";
import { communityExperiences, CommunityGraphic } from "@/data/experience";
import { 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ClipboardCheck, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Workflow, 
  Award, 
  Maximize2, 
  X, 
  ShieldCheck 
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { useLanguage } from "./LanguageProvider";

export function ExperienceSection() {
  const { t, isAr } = useLanguage();
  const exp = communityExperiences[0]; // GDG NCTU HR Experience
  const [activeModalGraphic, setActiveModalGraphic] = useState<CommunityGraphic | null>(null);

  return (
    <section id="experience" className="py-20 bg-slate-50/60 dark:bg-[#0A0E17]/60 border-t border-slate-200 dark:border-slate-800 transition-colors text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 mb-3">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            {isAr 
              ? "خبرات قيادية وعمليات موارد بشرية وتنسيق مجتمعي أثبتت كفاءتها عبر موسمين متتاليين في مجتمع مطوري جوجل (GDG NCTU)."
              : "Demonstrated interpersonal communication, team coordination, and structured people-management experience across two sessions at GDG NCTU."}
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 lg:p-10 space-y-8 transition-colors">
          
          {/* Role Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                  GDG NCTU
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800">
                  {isAr ? "موسمان متتاليان" : exp.duration}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                  {isAr ? "لجنة العضوية والمجتمع" : exp.team}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {isAr ? "عضو فريق الموارد البشرية" : exp.role} — GDG NCTU
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
                {isAr 
                  ? "مجتمع مطوري جوجل بجامعة مصر التكنولوجية الدولية (New Cairo Technological University)"
                  : "Google Developer Group on Campus · New Cairo Technological University"}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>{isAr ? "حرم جامعة NCTU" : exp.location}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                <span>{isAr ? "العام الأكاديمي: 2025–2026" : `Academic Year: ${exp.academicYear}`}</span>
              </span>
            </div>
          </div>

          {/* Role Summary */}
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {isAr ? t.experience.summary : exp.summary}
          </p>

          {/* Community Visual Gallery & Official Certificate */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                <Award className="w-4 h-4 text-amber-500" />
                <span>{t.experience.galleryTitle}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                {isAr ? "انقر على أي صورة لتكبيرها وفحصها بدقة عالية" : "Click any image to inspect full-resolution"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {exp.communityGraphics.map((item, gIdx) => (
                <div
                  key={gIdx}
                  onClick={() => setActiveModalGraphic(item)}
                  className="group relative flex flex-col rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/60 shadow-sm cursor-pointer transition-all transform hover:-translate-y-1"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                    <img 
                      src={item.src} 
                      alt={isAr ? item.titleAr : item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 text-xs font-bold shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isAr ? "عرض الحجم الكامل" : "Inspect Full Size"}</span>
                      </span>
                    </div>
                    <span className={`absolute top-2.5 ${isAr ? "right-2.5" : "left-2.5"} px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/75 text-sky-300 border border-sky-400/30`}>
                      {isAr ? item.tagAr : item.tag}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-sky-500 transition-colors">
                        {isAr ? item.titleAr : item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                        {isAr ? item.subtitleAr : item.subtitle}
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Certificate Metadata Strip */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-800 dark:text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  <strong>{isAr ? "توثيق الشهادة الرسمية: " : "Official Verification: "}</strong>
                  {isAr 
                    ? `ممنوحة لـ حسام أحمد · الكود المعتمد: `
                    : `Awarded to ${exp.certificate.recipient} · Code: `}
                  <code className="font-mono text-amber-600 dark:text-amber-400">{exp.certificate.verificationCode}</code>
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                {isAr ? `صادرة وموقعة من قائد الفرع الجامعي (${exp.certificate.chapterLeader})` : `Issued by Chapter Leader ${exp.certificate.chapterLeader}`}
              </span>
            </div>
          </div>

          {/* Grid: Responsibilities & Transferable Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* Responsibilities Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm">
                <ClipboardCheck className="w-4 h-4 text-sky-500" />
                <span>{isAr ? "المهام والمسؤوليات الموثقة بالموارد البشرية" : "Verified HR & Community Responsibilities"}</span>
              </div>

              <div className="space-y-3.5">
                {exp.responsibilities.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                      <span>{isAr ? item.titleAr : item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr ? item.descriptionAr : item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Transferable Skills & Positioning (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* Transferable Skills Card */}
              <div className="p-5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <Workflow className="w-4 h-4 text-sky-500" />
                  <span>{isAr ? "الكفاءات والمهارات المهنية المكتسبة" : "Transferable Professional Competencies"}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr 
                    ? "المهارات التنظيمية والشخصية المصقولة عبر موسمين من إدارة الأنشطة الطلابية:"
                    : "Professional competencies and soft skills refined across two sessions of active student community operations:"}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {(isAr ? exp.transferableSkillsAr : exp.transferableSkills).map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Discipline Reinforcement Card */}
              <div className="p-5 rounded-xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800/60 space-y-2">
                <div className="flex items-center gap-2 text-sky-900 dark:text-sky-300 font-bold text-xs uppercase tracking-wider font-mono">
                  <Code2 className="w-4 h-4 text-sky-500" />
                  <span>{isAr ? "التوافق مع المسار الهندسي البرمجي" : "Engineering Positioning Alignment"}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isAr 
                    ? "يبقى التركيز المهني الرئيسي لحسام منصباً على هندسة الأنظمة الخلفية بلغة Java وتطبيقات الويب المتكاملة. تعكس هذه الخبرة في الموارد البشرية على مدار موسمين متتاليين اعتمادية شخصية مستمرة، وقدرة على قيادة وتنسيق فرق العمل، وفهماً عميقاً للعمليات التنظيمية التي تعزز أثره كمهندس برمجيات."
                    : "Hossam's primary career direction remains Java Backend Engineering & Full-Stack Development. This HR experience across two consecutive sessions demonstrates sustained interpersonal reliability, team coordination, and an understanding of organizational workflows that directly strengthens his software engineering impact."}
                </p>
              </div>

            </div>

          </div>

          {/* Connected Software Project Integration Banner */}
          {exp.connectedProject && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 block font-semibold">
                      {isAr ? "تطبيق هندسي برمجي مرتبط بالعمليات" : "Connected Engineering Implementation"}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {isAr ? exp.connectedProject.titleAr : exp.connectedProject.title}
                    </h4>
                  </div>
                </div>

                <a 
                  href={exp.connectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 transition-colors shrink-0"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{isAr ? "عرض مستودع المشروع" : "View Project Repository"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr ? exp.connectedProject.descriptionAr : exp.connectedProject.description}{" "}
                {isAr 
                  ? "بدلاً من الاكتفاء بالمهام اليدوية، بادر حسام ببناء منصة برمجية متكاملة بـ 17 موديول لأتمتة الحضور وتقييم النقاط وإصدار تقارير الـ PDF:" 
                  : "Rather than treating HR operations purely as manual tasks, Hossam recognized the organizational bottlenecks across sessions and engineered software solutions to automate committee governance:"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                {(isAr ? exp.connectedProject.implementedFeaturesAr : exp.connectedProject.implementedFeatures).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Community Graphic Lightbox Modal */}
      {activeModalGraphic && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalGraphic(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden text-start"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div>
                <h3 className="text-sm font-bold text-white">
                  {isAr ? activeModalGraphic.titleAr : activeModalGraphic.title}
                </h3>
                <span className="text-xs font-mono text-sky-400">
                  {isAr ? activeModalGraphic.subtitleAr : activeModalGraphic.subtitle}
                </span>
              </div>
              <button 
                onClick={() => setActiveModalGraphic(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/60">
              <img 
                src={activeModalGraphic.src} 
                alt={isAr ? activeModalGraphic.titleAr : activeModalGraphic.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
              <p>{isAr ? activeModalGraphic.descriptionAr : activeModalGraphic.description}</p>
              <a
                href={activeModalGraphic.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:underline shrink-0"
              >
                <span>{isAr ? "فتح الملف الأصلي" : "Open Raw Asset"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
