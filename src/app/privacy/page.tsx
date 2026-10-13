"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, ShieldCheck, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      <Navbar onOpenCV={() => {}} onOpenPalette={() => {}} />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-sky-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-white font-semibold">Privacy Notice</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Privacy Notice &amp; Data Processing Terms
            </h1>
            <p className="text-xs font-mono text-slate-400">
              Last Updated: October 2026
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Scope and Purpose</h2>
              <p>
                This privacy notice governs how project specifications, contact information, and communication parameters submitted via the Service Request System (<Link href="/services/request" className="text-sky-500 hover:underline">/services/request</Link>) or direct contact channels are collected, processed, and safeguarded.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Information Collected</h2>
              <p>
                When submitting a service inquiry, the following information may be collected:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Identity Information:</strong> Full name and optional organization/company affiliation.</li>
                <li><strong>Contact Details:</strong> Email address, optional phone/WhatsApp handle, and country or timezone.</li>
                <li><strong>Project Specifications:</strong> Project title, problem description, technical goals, platform requirements, budget range brackets, and desired timelines.</li>
                <li><strong>Technical Meta:</strong> Anonymized/hashed IP signature solely for brute-force rate-limiting and anti-spam verification.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. How Information Is Used</h2>
              <p>
                All submitted information is used exclusively to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Assess the technical feasibility, architectural complexity, and scope of your project.</li>
                <li>Formulate an accurate engineering proposal, budget estimate, and delivery milestones.</li>
                <li>Communicate directly with you regarding your inquiry.</li>
              </ul>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                Your data is never sold, leased, or transferred to third-party marketing entities or advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Confidentiality and NDA</h2>
              <p>
                Proprietary business concepts, trade secrets, and repository links submitted within project briefs are treated as strictly confidential. If required prior to in-depth technical analysis, a formal Non-Disclosure Agreement (NDA) can be executed.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">5. Data Retention and Erasure</h2>
              <p>
                Submitted service requests are retained only as long as necessary to facilitate technical review and project execution. You may request the immediate deletion or export of your logged request records at any time by contacting <a href="mailto:Kabtinhosa@yahoo.com" className="text-sky-500 hover:underline">Kabtinhosa@yahoo.com</a> quoting your reference code.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
