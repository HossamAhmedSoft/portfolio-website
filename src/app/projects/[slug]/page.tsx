"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { featuredProjects, Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { 
  ChevronRight, 
  ExternalLink, 
  Lock, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  Code2,
  Calendar,
  Send
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = featuredProjects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const pageUrl = `https://hossamahmedwebsite.vercel.app/projects/${slug}`;

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
        item: "https://hossamahmedwebsite.vercel.app/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: pageUrl,
      },
    ],
  };

  const softwareSourceCodeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    codeRepository: project.githubUrl,
    programmingLanguage: project.technologies,
    author: {
      "@type": "Person",
      name: "Hossam Ahmed",
      url: "https://hossamahmedwebsite.vercel.app",
    },
  };

  // Map project category to relevant service ID for CTA
  const getRelevantServiceId = (category: string) => {
    switch (category) {
      case "Backend & APIs":
        return "backend-development";
      case "Full-Stack Web":
        return "fullstack-applications";
      case "Embedded & IoT":
        return "embedded-iot";
      case "Systems & C++":
        return "management-systems";
      default:
        return "website-development";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSourceCodeSchema} />

      <Navbar onOpenCV={() => {}} onOpenPalette={() => {}} />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link href="/projects" className="hover:text-sky-500 transition-colors">Projects</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">{project.title}</span>
            </nav>
          </div>
        </div>

        {/* Case Study Hero */}
        <header className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B0F19]/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {project.headline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.isPrivateRepo ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span>Private Enterprise Repository (Protected Institutional Schema)</span>
                </div>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-sm"
                >
                  <span>Launch Verified Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <Link
                href={`/services/request?service=${getRelevantServiceId(project.category)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-300 dark:border-sky-800 transition-colors"
              >
                <span>Request Similar Solution</span>
                <Send className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Technologies Chips */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-400 mr-2">Verified Stack:</span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Case Study Details Body */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* Screenshot / Visual Banner if available */}
          {project.thumbnailUrl && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
              <img
                src={project.thumbnailUrl}
                alt={`${project.title} Preview Screenshot`}
                className="w-full max-h-[500px] object-contain bg-slate-950 mx-auto"
              />
            </div>
          )}

          {/* Section 1: Problem Statement */}
          <section className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-sky-500" />
              <span>Problem Statement &amp; Context</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </section>

          {/* Section 2: Architecture & Technical Implementation */}
          <section className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-indigo-500" />
              <span>System Architecture &amp; Design Decisions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.architecture}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Technology Rationale:
              </span>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.technologyChoices}
              </p>
            </div>
          </section>

          {/* Section 3: Individual Contribution */}
          <section className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Code2 className="w-6 h-6 text-emerald-500" />
              <span>Individual Engineering Contribution</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.caseStudy.individualContribution}
            </p>
          </section>

          {/* Section 4: Key Features */}
          <section className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-sky-500" />
              <span>Engineered Key Features</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Engineering Challenges & Solutions */}
          {project.caseStudy.challengesAndSolutions.length > 0 && (
            <section className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Cpu className="w-6 h-6 text-amber-500" />
                <span>Technical Challenges &amp; Engineered Solutions</span>
              </h2>
              <div className="space-y-4">
                {project.caseStudy.challengesAndSolutions.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                      CHALLENGE: {item.challenge}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong>Engineered Solution: </strong> {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: Testing, Security & Transparent Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Security &amp; Automated Testing</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.securityAndTesting}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-3">
              <h3 className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Status &amp; Scope Limitations</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.statusAndLimitations}
              </p>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-400/30 text-center space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Interested in a Similar System Architecture?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Discuss your requirements, architectural expectations, and project timeline through the structured intake workflow.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href={`/services/request?service=${getRelevantServiceId(project.category)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/25 transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
              >
                <span>View Other Projects</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
