"use client";

import React, { useState } from "react";
import Image from "next/image";
import { featuredProjects, Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Code,
  Filter,
  Search,
  X,
  RotateCcw,
  Lock
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { useLanguage } from "./LanguageProvider";

export function ProjectsShowcase() {
  const { t, isAr } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { key: "All", label: t.projects.categories.all },
    { key: "Backend & APIs", label: t.projects.categories.backend },
    { key: "Full-Stack Web", label: t.projects.categories.fullstack },
    { key: "Embedded & IoT", label: t.projects.categories.embedded },
    { key: "Systems & C++", label: t.projects.categories.systems },
    { key: "Cryptography", label: t.projects.categories.crypto },
  ];

  const getLocalizedCategory = (catKey: string) => {
    const found = categories.find((c) => c.key === catKey);
    return found ? found.label : catKey;
  };

  const getLocalizedStatus = (status: string) => {
    if (!isAr) return status;
    if (status === "Production Ready") return "جاهز للإنتاج";
    if (status === "Verified Prototype") return "نموذج معتمد";
    if (status === "Active Case Study") return "دراسة حالة نشطة";
    return status;
  };

  const filteredProjects = featuredProjects.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(q) ||
      p.headline.toLowerCase().includes(q) ||
      p.ar.title.toLowerCase().includes(q) ||
      p.ar.headline.toLowerCase().includes(q) ||
      p.technologies.some(tech => tech.toLowerCase().includes(q)) ||
      p.caseStudy.problem.toLowerCase().includes(q) ||
      p.caseStudy.individualContribution.toLowerCase().includes(q) ||
      p.ar.caseStudy.problem.toLowerCase().includes(q) ||
      p.ar.caseStudy.individualContribution.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#080B11] text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 mb-3">
              <Code className="w-3.5 h-3.5 text-sky-500" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Results Badge */}
          <div className="font-mono text-xs text-slate-600 dark:text-slate-400 shrink-0">
            {t.projects.showing} <strong className="text-sky-600 dark:text-sky-400 font-bold">{filteredProjects.length}</strong> {t.projects.of} {featuredProjects.length} {t.projects.projectsText}
          </div>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 mb-10 space-y-4">
          
          {/* Top Row: Search Input */}
          <div className="relative">
            <Search className={`absolute ${isAr ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400`} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              aria-label={t.projects.searchPlaceholder || "Search projects by title, stack, or keywords"}
              className={`w-full ${isAr ? "pr-10 pl-10" : "pl-10 pr-10"} py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500`}
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search input"
                className={`absolute ${isAr ? "left-3.5" : "right-3.5"} top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700 dark:hover:text-white rounded cursor-pointer`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bottom Row: Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-400 mx-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{t.projects.categoryLabel}</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? "bg-sky-500 text-white shadow-sm shadow-sky-500/25"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.projects.noResultsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {t.projects.noResultsText}
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.projects.resetButton}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const pData = isAr ? project.ar : project;
              return (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between rounded-2xl bg-slate-50/70 dark:bg-[#0F172A] border border-slate-200/90 dark:border-slate-800/90 hover:border-sky-500/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Optional Screenshot Banner */}
                  {project.thumbnailUrl && (
                    <div className="relative aspect-16/9 overflow-hidden bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
                      <Image 
                        src={project.thumbnailUrl} 
                        alt={pData.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute top-3 ${isAr ? "right-3" : "left-3"} px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/70 text-sky-300 border border-sky-400/30 backdrop-blur-xs z-10`}>
                        {getLocalizedStatus(project.status)}
                      </div>
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80">
                          {getLocalizedCategory(project.category)}
                        </span>
                        {!project.thumbnailUrl && (
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                            {getLocalizedStatus(project.status)}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                        {pData.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {pData.headline}
                      </p>

                      {/* What I Implemented (Factual summary) */}
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          {t.projects.whatIImplemented}
                        </div>
                        <p className="text-xs text-slate-700 dark:text-slate-200 line-clamp-3 leading-relaxed">
                          {pData.caseStudy.individualContribution}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1" dir="ltr">
                        {project.technologies.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom Actions */}
                    <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                      >
                        <span>{t.projects.deepCaseStudy}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          project.isPrivateRepo ? (
                            <span
                              title={isAr ? "مستودع مؤسسي خاص (متاح عند الطلب)" : "Private Enterprise Repository (Available on request)"}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-help"
                            >
                              <Lock className="w-3 h-3 text-amber-500" />
                              <span>{isAr ? "خاص" : "Private"}</span>
                            </span>
                          ) : (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} on GitHub`}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open demo for ${project.title}`}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
