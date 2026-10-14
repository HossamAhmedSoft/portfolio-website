"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe, 
  Server, 
  FolderKanban, 
  Database, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers2, 
  ExternalLink,
  ShieldCheck,
  Send
} from "lucide-react";
import { servicesCatalog, ServiceCategory } from "@/data/services";
import { useLanguage } from "./LanguageProvider";
import { trackEvent } from "@/lib/analytics";

interface ServicesSectionProps {
  isStandalonePage?: boolean;
}

export function ServicesSection({ isStandalonePage = false }: ServicesSectionProps) {
  const { isAr } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-sky-500" />;
      case "Server":
        return <Server className="w-6 h-6 text-indigo-500" />;
      case "FolderKanban":
        return <FolderKanban className="w-6 h-6 text-emerald-500" />;
      case "Database":
        return <Database className="w-6 h-6 text-amber-500" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-purple-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-rose-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
      default:
        return <Layers2 className="w-6 h-6 text-sky-500" />;
    }
  };

  const handleServiceCtaClick = (serviceId: string, serviceName: string) => {
    trackEvent("Service", "request_cta_clicked", `${serviceId}: ${serviceName}`);
  };

  return (
    <section 
      id="services" 
      className={`py-16 sm:py-24 ${
        isStandalonePage 
          ? "bg-white dark:bg-[#080B11]" 
          : "bg-slate-50/70 dark:bg-[#0B0F19]/70 border-y border-slate-200 dark:border-slate-800/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
            <span>{isAr ? "خدمات برمجية وهندسية متخصصة" : "Professional Software Engineering Services"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isAr ? "حلول برمجية مبنية على خبرة عملية موثقة" : "Engineering Capabilities & Technical Services"}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? "خدمات تطوير برمجيات احترافية قائمة على أسس هندسية واضحة ومشاريع حقيقية. من الواجهات الخلفية وقواعد البيانات إلى الأنظمة المدمجة والتطبيقات الشاملة."
              : "Professional software development services grounded in verified engineering practices. From Java backends and Oracle SQL persistence to full-stack Next.js platforms and embedded IoT firmware."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesCatalog.map((service: ServiceCategory) => {
            const localized = isAr ? service.ar : null;
            const title = localized ? localized.name : service.name;
            const description = localized ? localized.shortDescription : service.shortDescription;
            const deliverables = localized ? localized.deliverables : service.deliverables;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group relative rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800/90 p-6 sm:p-7 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
              >
                {/* Card Top: Icon & Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      Verified
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Typical Deliverables */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block mb-2">
                      {isAr ? "مخرجات العمل الرئيسية" : "Typical Deliverables"}
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      {deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example Verified Project Reference */}
                  {service.suitableProjects.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block mb-1">
                        {isAr ? "مشروع مرجعي مشابه:" : "Reference Project:"}
                      </span>
                      {service.suitableProjects.map((proj) => (
                        <Link
                          key={proj.id}
                          href={`/projects/${proj.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline"
                        >
                          <span>{proj.title}</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    href={`/services/request?service=${service.id}`}
                    onClick={() => handleServiceCtaClick(service.id, service.name)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-500/20 hover:shadow-md hover:shadow-sky-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
                  >
                    <span>{isAr ? "طلب هذه الخدمة" : "Request This Service"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 border border-sky-400/30 dark:border-sky-500/20 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {isAr ? "هل لديك مشروع مخصص أو استفسار تقني؟" : "Have a Custom Project or Technical Requirement?"}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {isAr
              ? "شارك تفاصيل فكرتك، متطلبات النظام، والميزانية المتوقعة من خلال نموذج طلب الخدمة المنظم لتلقي رد تقني مفصل خلال 24 ساعة عمل."
              : "Submit your specifications, architectural goals, and target timeline through the project intake workflow for a structured technical evaluation within 24 business hours."}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/request"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>{isAr ? "بدء استمارة طلب الخدمة" : "Open Service Request System"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>{isAr ? "قنوات التواصل المباشر" : "Direct Contact Channels"}</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
