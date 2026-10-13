"use client";

import React from "react";
import Link from "next/link";
import { ServicesSection } from "@/components/ServicesSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { servicesCatalog } from "@/data/services";
import { 
  ChevronRight, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send 
} from "lucide-react";

const pageUrl = "https://hossamahmedwebsite.vercel.app/services";

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
      name: "Services",
      item: pageUrl,
    },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: servicesCatalog.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.name,
    description: service.valueProposition,
    provider: {
      "@type": "Person",
      name: "Hossam Ahmed",
      url: "https://hossamahmedwebsite.vercel.app",
    },
  })),
};

const faqs = [
  {
    q: "What types of clients do you work with?",
    a: "I work with startups, businesses, academic institutions, and independent founders in Egypt and internationally who require reliable Java backend APIs, full-stack web applications, database architectures, or embedded IoT prototypes."
  },
  {
    q: "How are project quotes and pricing determined?",
    a: "Pricing is calculated based on scope complexity, entity volume, required third-party integrations, and timeline requirements. Initial budget brackets in the intake form serve as alignment benchmarks; a binding quote is provided after reviewing technical specifications."
  },
  {
    q: "How do you handle physical hardware development for IoT projects?",
    a: "Firmware development (C/C++ for Arduino/ESP32) and telemetry interfaces are engineered in-house. Physical hardware deployment, component acquisition, and testing courses are arranged collaboratively depending on component availability."
  },
  {
    q: "What is your typical delivery and turnaround timeframe?",
    a: "Delivery timeframes depend on project scope: small landing pages or API modules typically take 1–2 weeks, while full-stack management systems take 3–6 weeks with continuous milestone demos and Git version-controlled transparency."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesSchema} />

      <Navbar onOpenCV={() => {}} onOpenPalette={() => {}} />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">Services</span>
            </nav>
          </div>
        </div>

        {/* Page Hero */}
        <section className="py-12 sm:py-16 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 mb-4">
            <Clock className="w-3.5 h-3.5 text-sky-500" />
            <span>Open for Commercial & Engineering Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Software Engineering &amp; Development Services
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Disciplined software engineering solutions tailored to real-world business constraints. Every service is backed by verified code repositories, structured tests, and transparent communication.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services/request"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/25 transition-all"
            >
              <span>Submit a Project Request</span>
              <Send className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>Inspect Past Projects</span>
            </Link>
          </div>
        </section>

        {/* Complete Services Catalog */}
        <ServicesSection isStandalonePage={true} />

        {/* Service Methodology & Quality Assurance */}
        <section className="py-16 bg-slate-50 dark:bg-[#0F172A]/40 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                How Engagements Are Delivered
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                A structured four-phase delivery workflow prioritizing architectural integrity, test verification, and complete handoff documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold font-mono flex items-center justify-center text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Requirement Discovery</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Reviewing system scope, domain entities, edge cases, target users, and security models before writing code.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold font-mono flex items-center justify-center text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Architecture &amp; Prototyping</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Designing database schemas, API contracts (OpenAPI), and component layouts with explicit type boundaries.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold font-mono flex items-center justify-center text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Implementation &amp; Testing</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Disciplined coding backed by unit tests, input sanitization, error boundary handling, and Git version control.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold font-mono flex items-center justify-center text-sm">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Deployment &amp; Handoff</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Production environment setup, documentation handoff, and initial monitoring to guarantee smooth operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-sky-500" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Direct answers regarding communication, technical scope, and project terms.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/request"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/25 transition-all"
            >
              <span>Ready to start? Fill the Service Request Form</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
