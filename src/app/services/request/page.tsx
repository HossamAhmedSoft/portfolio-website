"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { ServiceRequestWorkflow } from "@/components/ServiceRequestWorkflow";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ChevronRight, FileText, Loader2 } from "lucide-react";

const pageUrl = "https://hossamahmedwebsite.vercel.app/services/request";

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
      item: "https://hossamahmedwebsite.vercel.app/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Service Request",
      item: pageUrl,
    },
  ],
};

export default function ServiceRequestPage() {
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
              <Link href="/services" className="hover:text-sky-500 transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">Service Request</span>
            </nav>
          </div>
        </div>

        {/* Header Introduction */}
        <div className="pt-10 pb-4 text-center max-w-3xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
            <FileText className="w-3.5 h-3.5 text-sky-500" />
            <span>Structured Project Intake Workflow</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Request a Software Development Service
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Fill in the details below to define your project scope, technical expectations, and timeline. You will receive an official request tracking reference and a response within 24 business hours.
          </p>
        </div>

        {/* Suspense-wrapped Interactive Form */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
            </div>
          }
        >
          <ServiceRequestWorkflow />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
