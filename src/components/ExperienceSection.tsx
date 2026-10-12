"use client";

import React from "react";
import { communityExperiences } from "@/data/experience";
import { 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  MessageSquare, 
  HeartHandshake, 
  ClipboardCheck, 
  Sparkles,
  ExternalLink,
  Code2,
  Workflow,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function ExperienceSection() {
  const exp = communityExperiences[0]; // GDG NCTU HR Experience

  return (
    <section id="experience" className="py-20 bg-slate-50/60 dark:bg-[#0A0E17]/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 mb-3">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>COMMUNITY LEADERSHIP & PEOPLE OPERATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Community Involvement
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            Demonstrated interpersonal communication, team coordination, and structured people-management experience at GDG NCTU — complementing technical engineering with organizational discipline.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 lg:p-10 space-y-8 text-left transition-colors">
          
          {/* Role Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                  {exp.community}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                  {exp.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {exp.role}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                <span>{exp.session}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>{exp.location}</span>
              </span>
            </div>
          </div>

          {/* Role Summary */}
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {exp.summary}
          </p>

          {/* Grid: Responsibilities & Transferable Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            
            {/* Responsibilities Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm">
                <ClipboardCheck className="w-4 h-4 text-sky-500" />
                <span>Core HR & Community Responsibilities</span>
              </div>

              <div className="space-y-3.5">
                {exp.responsibilities.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 hover:border-sky-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
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
                  <span>Transferable Professional Competencies</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Soft skills and operational abilities cultivated through direct people engagement and student community coordination:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.transferableSkills.map((skill, sIdx) => (
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
                  <span>Engineering Positioning Alignment</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Hossam&apos;s primary career direction remains <strong>Java Backend Engineering & Full-Stack Development</strong>. This HR experience enriches his technical profile with empathy, communication, and real-world understanding of how people and organizations interact with software systems.
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
                      Connected Engineering Implementation
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {exp.connectedProject.title}
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
                  <span>View Project Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.connectedProject.description} Rather than treating HR operations purely as manual tasks, Hossam recognized the organizational bottlenecks and engineered software solutions to automate and streamline committee governance:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                {exp.connectedProject.implementedFeatures.map((feat, fIdx) => (
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
    </section>
  );
}
