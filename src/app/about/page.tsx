"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { 
  ChevronRight, 
  Terminal, 
  Award, 
  GraduationCap, 
  Users, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText
} from "lucide-react";
import { certificates } from "@/data/certificates";
import { educationHistory } from "@/data/education";

const pageUrl = "https://hossamahmedwebsite.vercel.app/about";

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
      name: "About",
      item: pageUrl,
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      <JsonLd data={breadcrumbSchema} />

      <Navbar onOpenCV={() => {}} onOpenPalette={() => {}} />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">About</span>
            </nav>
          </div>
        </div>

        {/* Hero Bio Header */}
        <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-start">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto md:mx-0 rounded-3xl overflow-hidden border-2 border-sky-400/60 shadow-xl shadow-sky-500/15 bg-slate-900">
                <img
                  src="/assets/profile/hossam-ahmed.jpg"
                  alt="Hossam Ahmed"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-center md:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                <Terminal className="w-3.5 h-3.5 text-sky-500" />
                <span>Software Developer &amp; Systems Engineer</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Hossam Ahmed
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Software developer specialized in Java backend engineering, Spring Boot REST APIs, relational database architecture (Oracle SQL / PostgreSQL), and embedded IoT systems. Focused on building verifiable, structured, and auditable software solutions.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/services/request"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md shadow-sky-500/25"
                >
                  <span>Request a Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <span>Browse Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Philosophy Pillars */}
        <section className="py-16 bg-slate-50 dark:bg-[#0B0F19]/60 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Core Engineering Philosophy
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Four pillars guiding every architectural decision and line of code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-500 font-bold flex items-center justify-center font-mono text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Disciplined Type Safety &amp; Clean Architecture</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Explicit layer boundaries (Controllers, Services, Repositories) and zero type compromises in Java and strict TypeScript.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-500 font-bold flex items-center justify-center font-mono text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Relational Integrity &amp; ACID Guarantees</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Careful 3NF schema modeling, foreign key constraints, and transactional boundaries over unvalidated data stores.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-500 font-bold flex items-center justify-center font-mono text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Empirical Test Verification</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Software is only as good as its tests. Automated unit and regression test coverage before deployment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-500 font-bold flex items-center justify-center font-mono text-sm">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Transparent Engineering Disclosures</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Honest distinction between physically verified production systems, academic prototypes, and experimental simulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Academic Credentials */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-sky-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Academic Foundation &amp; University Education
            </h2>
          </div>

          <div className="space-y-4">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                  <span className="text-xs font-mono text-sky-600 dark:text-sky-400">{edu.period}</span>
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{edu.degreeOrProgram}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{edu.highlights[0]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Leadership: GDG NCTU */}
        <section className="py-16 bg-slate-50 dark:bg-[#0B0F19]/60 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-emerald-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Leadership: Google Developer Groups (GDG on Campus NCTU)
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  Core Team HR Specialist · Community &amp; Membership Committee
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  2025 – 2026 Season
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Led membership onboarding, track evaluation procedures, and built the internal Next.js/Supabase GDG operations platform to govern attendance and member performance ledgers across academic technical tracks.
              </p>
              <div className="pt-2">
                <Link
                  href="/projects/hr-management-platform"
                  className="text-xs font-semibold text-sky-500 hover:underline inline-flex items-center gap-1"
                >
                  <span>Inspect the 17-Module Operations Platform Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Certifications Section */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Verified Certifications &amp; Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
                {cert.verificationCode && (
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block">
                    Verification: {cert.verificationCode}
                  </span>
                )}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {cert.summary}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
