"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ContactSection } from "@/components/ContactSection";
import { ChevronRight, Mail, Send, ShieldCheck, Clock, MapPin } from "lucide-react";

const pageUrl = "https://hossamahmedwebsite.vercel.app/contact";

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
      name: "Contact",
      item: pageUrl,
    },
  ],
};

export default function ContactPage() {
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
              <span className="text-slate-900 dark:text-white font-semibold">Contact</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 text-center max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <Clock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Response Guaranteed Within 24 Business Hours</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you have a software engineering opportunity, require an enterprise backend service, or want to discuss an embedded IoT project, reach out directly or submit an intake brief.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/services/request"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/25 transition-all"
            >
              <span>Open Project Intake Form</span>
              <Send className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Reused Accessible Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
