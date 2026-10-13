"use client";

import React, { useState } from "react";
import { certificates, Certificate } from "@/data/certificates";
import { CertificateModal } from "./CertificateModal";
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Eye,
  Filter
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function CertificationsGallery() {
  const { t, isAr } = useLanguage();
  const [selectedIssuer, setSelectedIssuer] = useState<string>("All");
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const issuers = [
    { key: "All", label: isAr ? "الكل" : "All" },
    { key: "Oracle Academy", label: "Oracle Academy" },
    { key: "Microsoft", label: "Microsoft" },
    { key: "RoboCup / MICA Egypt", label: "RoboCup / MICA" }
  ];

  const filteredCerts = selectedIssuer === "All"
    ? certificates
    : certificates.filter(c => c.issuer === selectedIssuer);

  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-[#0B0F19]/50 border-t border-slate-200 dark:border-slate-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.certifications.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.certifications.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mx-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isAr ? "الجهة المصدرة:" : "Issuer:"}</span>
          </div>
          {issuers.map((iss) => (
            <button
              key={iss.key}
              onClick={() => setSelectedIssuer(iss.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedIssuer === iss.key
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-500/25"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60"
              }`}
            >
              {iss.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveModalCert(cert)}
              className="group cursor-pointer flex flex-col justify-between rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200/90 dark:border-slate-800 hover:border-sky-500/70 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Certificate Image Thumbnail Preview */}
              <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <img
                  src={cert.imagePath}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                <div className={`absolute top-2.5 ${isAr ? "left-2.5" : "right-2.5"}`}>
                  <span className="p-1.5 rounded-md bg-slate-900/80 text-white backdrop-blur-sm flex items-center justify-center">
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-semibold text-sky-600 dark:text-sky-400">
                      {cert.issuer}
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                    {cert.summary}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {cert.credentialType}
                  </span>
                  <span className="text-xs font-semibold text-sky-500 group-hover:translate-x-0.5 transition-transform">
                    {isAr ? "عرض الوثيقة ←" : "View Doc →"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Verification Modal */}
      <CertificateModal
        cert={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </section>
  );
}
