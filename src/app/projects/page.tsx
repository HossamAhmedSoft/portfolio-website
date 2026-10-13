"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { featuredProjects } from "@/data/projects";
import { ChevronRight, Code, Layers } from "lucide-react";

const pageUrl = "https://hossamahmedwebsite.vercel.app/projects";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://hossamahmedwebsite.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: pageUrl,
    },
  ],
};

const projectItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: featuredProjects.map((p, idx) => ({
    "@type": "SoftwareSourceCode",
    position: idx + 1,
    name: p.title,
    description: p.description,
    url: `${pageUrl}/${p.id}`,
    codeRepository: p.githubUrl,
    programmingLanguage: p.technologies,
  })),
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={projectItemListSchema} />

      <Navbar onOpenCV={() => {}} onOpenPalette={() => {}} />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">Projects</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="py-12 sm:py-16 text-center max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
            <Code className="w-3.5 h-3.5 text-sky-500" />
            <span>22 Public GitHub Repositories · 8 Featured Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Projects &amp; Case Studies
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Architectural case studies across enterprise backends, C++ terminal ERPs, IoT robotics, cryptography suites, and full-stack web platforms with verified automated test coverage.
          </p>
        </div>

        {/* Interactive Filterable Projects Showcase */}
        <ProjectsShowcase />

        {/* Quick Links to Dedicated Case Studies */}
        <section className="py-16 bg-slate-50 dark:bg-[#0B0F19]/60 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Individual Case Study Directories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="p-4 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-sky-500/60 transition-colors group block"
                >
                  <span className="text-[11px] font-mono text-sky-500 block mb-1">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Case Study</span>
                    <ChevronRight className="w-3 h-3 text-sky-500" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
