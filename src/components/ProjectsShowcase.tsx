"use client";

import React, { useState } from "react";
import { featuredProjects, Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Code,
  Filter
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Backend & APIs",
    "Full-Stack Web",
    "Embedded & IoT",
    "Systems & C++",
    "Cryptography"
  ];

  const filteredProjects = selectedCategory === "All"
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 mb-3">
            <Code className="w-3.5 h-3.5 text-sky-500" />
            <span>PORTFOLIO CODEBASES & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            Selected projects demonstrating actual backend architecture, systems programming, and hardware-software integration. Each project represents verifiable code published on GitHub.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-500/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-50/70 dark:bg-[#0F172A] border border-slate-200/90 dark:border-slate-800/90 hover:border-sky-500/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 text-left overflow-hidden"
            >
              {/* Optional Screenshot Banner */}
              {project.thumbnailUrl && (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-950/80 text-white backdrop-blur-sm border border-white/10">
                      Screenshots Available
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1">
                {/* Meta Pills */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Headline / Problem */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.headline}
                </p>

                {/* Verified Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-white/70 dark:bg-[#131C31]/60 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  aria-label="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
