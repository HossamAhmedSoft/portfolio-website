"use client";

import React, { useEffect } from "react";
import { Certificate } from "@/data/certificates";
import { 
  X, 
  ExternalLink, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Download,
  Building2
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  const { isAr } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50 dark:bg-[#131C31]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                {cert.issuer}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                {isAr ? cert.credentialTypeAr : cert.credentialType}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
              {isAr ? cert.titleAr : cert.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sky-500" />
                <span>{isAr ? cert.dateAr : cert.date}</span>
              </span>
              {cert.verificationCode && (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isAr ? `كود التحقق: ${cert.verificationCode}` : `Code: ${cert.verificationCode}`}</span>
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Image Lightbox & Details */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* High-Resolution Certificate Document Preview */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-inner max-h-[50vh] flex items-center justify-center p-2">
            <img
              src={cert.imagePath}
              alt={isAr ? cert.titleAr : cert.title}
              className="max-h-[48vh] w-auto object-contain mx-auto rounded shadow-lg"
            />
          </div>

          {/* Verification & Curriculum Summary */}
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                {isAr ? "تغطية المنهج والاختبار المعتمد" : "Curriculum & Exam Coverage"}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
                {isAr ? cert.summaryAr : cert.summary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                {isAr ? "المهارات والكفاءات الموثقة" : "Validated Competencies"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(isAr ? cert.skillsAr : cert.skills).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#131C31]">
          {cert.verificationUrl ? (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>{isAr ? "التحقق عبر منصة Certiport" : "Verify at Certiport"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-slate-400 font-mono">
              {isAr ? "وثيقة شهادة رسمية معتمدة" : "Official Award Document"}
            </span>
          )}

          <div className="flex items-center gap-2">
            <a
              href={cert.imagePath}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isAr ? "تحميل الوثيقة" : "Download Image"}</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 transition-colors"
            >
              {isAr ? "إغلاق" : "Close"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
