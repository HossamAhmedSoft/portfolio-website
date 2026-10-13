"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  AlertCircle,
  HelpCircle,
  Wrench,
  Lock
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { useLanguage } from "./LanguageProvider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { isAr, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const pData = isAr ? project.ar : project;

  const getLocalizedCategory = (catKey: string) => {
    if (!isAr) return catKey;
    if (catKey === "Backend & APIs") return t.projects.categories.backend;
    if (catKey === "Full-Stack Web") return t.projects.categories.fullstack;
    if (catKey === "Embedded & IoT") return t.projects.categories.embedded;
    if (catKey === "Systems & C++") return t.projects.categories.systems;
    if (catKey === "Cryptography") return t.projects.categories.crypto;
    return catKey;
  };

  const getLocalizedStatus = (status: string) => {
    if (!isAr) return status;
    if (status === "Production Ready") return "جاهز للإنتاج";
    if (status === "Verified Prototype") return "نموذج معتمد";
    if (status === "Active Case Study") return "دراسة حالة نشطة";
    return status;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-[#131C31]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                {getLocalizedCategory(project.category)}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                {getLocalizedStatus(project.status)}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {pData.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono leading-relaxed">
              {pData.headline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 text-sm text-slate-700 dark:text-slate-300">
          
          {/* Project Visual Preview / Banner */}
          {project.thumbnailUrl && (
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm aspect-16/9 max-h-80">
              <img 
                src={project.thumbnailUrl} 
                alt={pData.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              {isAr ? "التقنيات والأدوات المستخدمة" : "Verified Technology Stack"}
            </h4>
            <div className="flex flex-wrap gap-2" dir="ltr">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem and Objective */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{isAr ? "المشكلة الهندسية والهدف" : "Problem & Objective"}</span>
            </h4>
            <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {pData.caseStudy.problem}
            </p>
          </div>

          {/* System Architecture */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-purple-500 shrink-0" />
              <span>{isAr ? "البنية المعمارية وتدفق البيانات" : "System Architecture & Data Flow"}</span>
            </h4>
            <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {pData.caseStudy.architecture}
            </p>
          </div>

          {/* Individual Contribution */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
              <Wrench className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isAr ? "مساهمتي البرمجية والهندسية" : "My Individual Contribution"}</span>
            </h4>
            <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
              {pData.caseStudy.individualContribution}
            </p>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{isAr ? "أبرز الميزات البرمجية المنفذة" : "Implemented Features"}</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pData.caseStudy.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs leading-normal">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Challenges & Solutions */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{isAr ? "التحديات الهندسية والحلول المبتكرة" : "Engineering Challenges & Solutions"}</span>
            </h4>
            <div className="space-y-3">
              {pData.caseStudy.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                    {isAr ? "التحدي: " : "Challenge: "}{item.challenge}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">{isAr ? "الحل الهندسي: " : "Solution: "}</strong>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Testing + Limitations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{isAr ? "الأمان ومنهجية الاختبار" : "Security & Testing Approach"}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {pData.caseStudy.securityAndTesting}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{isAr ? "حالة المشروع والنطاق" : "Status & Limitations"}</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {pData.caseStudy.statusAndLimitations}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#131C31]">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline" dir="ltr">
            Repository: {project.githubUrl.split("/").slice(-2).join("/")}
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.isPrivateRepo ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? "مستودع مؤسسي خاص (متاح عند الطلب)" : "Private Enterprise Repository (Available on request)"}</span>
              </span>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                <span>{isAr ? "عرض المستودع على GitHub" : "View Repository on GitHub"}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              {isAr ? "إغلاق" : "Close"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
