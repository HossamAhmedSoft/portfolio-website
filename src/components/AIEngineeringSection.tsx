"use client";

import React from "react";
import { 
  Bot, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  Code, 
  Workflow, 
  FileText, 
  Check, 
  Search, 
  Lock, 
  Layers,
  ArrowRight,
  ArrowLeft,
  Sliders,
  GitBranch,
  ShieldAlert
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function AIEngineeringSection() {
  const { t, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const toolsList = [
    {
      name: t.aiEngineering.tools.cursorName,
      desc: t.aiEngineering.tools.cursorDesc,
      url: t.aiEngineering.tools.cursorUrl,
      role: isAr ? "محرر أكواد ذكي دلالي" : "AI-First Code Editor",
      badge: isAr ? "استخدام عملي نشط" : "Active Hands-On",
      color: "from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/30",
    },
    {
      name: t.aiEngineering.tools.antigravityName,
      desc: t.aiEngineering.tools.antigravityDesc,
      url: t.aiEngineering.tools.antigravityUrl,
      role: isAr ? "منصة وكلاء هندسية متقدمة" : "Agentic Engineering Platform",
      badge: isAr ? "أتمتة شاملة للمشاريع" : "Full Workspace Automation",
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
    },
    {
      name: t.aiEngineering.tools.traeName,
      desc: t.aiEngineering.tools.traeDesc,
      url: t.aiEngineering.tools.traeUrl,
      role: isAr ? "بيئة تطوير ذكية متكيفة" : "Adaptive AI IDE",
      badge: isAr ? "استكشاف وتوليد هياكل" : "Workspace Scaffolding",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
  ];

  const promptPillars = [
    {
      icon: Layers,
      title: t.aiEngineering.promptPillars.p1Title,
      desc: t.aiEngineering.promptPillars.p1Desc,
    },
    {
      icon: Sliders,
      title: t.aiEngineering.promptPillars.p2Title,
      desc: t.aiEngineering.promptPillars.p2Desc,
    },
    {
      icon: Search,
      title: t.aiEngineering.promptPillars.p3Title,
      desc: t.aiEngineering.promptPillars.p3Desc,
    },
    {
      icon: CheckCircle2,
      title: t.aiEngineering.promptPillars.p4Title,
      desc: t.aiEngineering.promptPillars.p4Desc,
    },
    {
      icon: Lock,
      title: t.aiEngineering.promptPillars.p5Title,
      desc: t.aiEngineering.promptPillars.p5Desc,
    },
    {
      icon: ShieldAlert,
      title: t.aiEngineering.promptPillars.p6Title,
      desc: t.aiEngineering.promptPillars.p6Desc,
    },
  ];

  return (
    <section id="ai-engineering" className="py-20 md:py-28 bg-white dark:bg-[#080B11] text-start border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
            <Bot className="w-3.5 h-3.5 text-sky-500" />
            <span>{t.aiEngineering.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.aiEngineering.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.aiEngineering.subtitle}
          </p>
        </div>

        {/* Recruiter Clarification Banner (Crucial Distinction) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/80 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0 border border-sky-400/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-sky-900 dark:text-sky-200 font-mono">
              {t.aiEngineering.recruiterNoteTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.aiEngineering.recruiterNoteText}
            </p>
          </div>
        </div>

        {/* 1. Verified AI Coding Tools */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-sky-500" />
              <span>{t.aiEngineering.toolsTitle}</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
              {t.aiEngineering.toolsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50/70 dark:bg-[#0F172A] border border-slate-200/90 dark:border-slate-800/90 hover:border-sky-500/60 transition-all duration-300 shadow-sm hover:shadow-lg space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                      {tool.role}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded font-medium bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      {tool.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {tool.name}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    <span>{isAr ? "زيارة الموقع الرسمي" : "Official Website"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Professional Prompt Engineering as a Discipline */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-sky-500" />
              <span>{t.aiEngineering.promptEngineeringTitle}</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
              {t.aiEngineering.promptEngineeringSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {promptPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-2 hover:border-sky-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed ps-9">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. 10-Stage Workflow Planning Lifecycle */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-sky-500" />
              <span>{t.aiEngineering.workflowTitle}</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
              {t.aiEngineering.workflowSubtitle}
            </p>
          </div>

          {/* 10-Stage Responsive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {t.aiEngineering.workflowStages.map((stage, idx) => (
              <div
                key={idx}
                className="relative p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5 hover:border-sky-500/50 transition-colors"
              >
                <div className="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400 tracking-wider">
                  STAGE {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-normal">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Human in the loop highlight */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-100/70 dark:bg-[#131C31] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                {t.aiEngineering.humanInLoopTitle}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.aiEngineering.humanInLoopDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 4. Real-World Case Studies / Project Evidence */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-sky-500" />
              <span>{t.aiEngineering.caseStudiesTitle}</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
              {t.aiEngineering.caseStudiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.aiEngineering.caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-4 hover:border-sky-500/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
                      {cs.project}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {cs.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shrink-0">
                    {isAr ? "تم التحقق" : "Verified"}
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200 font-mono block mb-0.5">
                      {isAr ? "المشكلة الهندسية:" : "Engineering Challenge:"}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                    <span className="font-bold text-sky-700 dark:text-sky-300 font-mono block">
                      {isAr ? "منهجية الذكاء الاصطناعي والأوامر:" : "AI Prompt & Planning Approach:"}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {cs.aiApproach}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 space-y-1">
                    <span className="font-bold text-emerald-700 dark:text-emerald-300 font-mono block">
                      {isAr ? "التدقيق والتحقق البشري:" : "Human Verification & Audit:"}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {cs.humanVerification}
                    </p>
                  </div>

                  <div className="pt-1 flex items-start gap-1.5 text-slate-800 dark:text-slate-200">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="font-semibold">{isAr ? "النتيجة: " : "Outcome: "}</strong>
                      {cs.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
