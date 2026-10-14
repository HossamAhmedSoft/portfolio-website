"use client";

import React from "react";
import Image from "next/image";
import { 
  User, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Code, 
  Layers, 
  ShieldCheck,
  Compass
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function AboutSection() {
  const { t, isAr } = useLanguage();

  const engineeringPrinciples = [
    {
      title: isAr ? "أولوية الاعتمادية في الأنظمة الخلفية" : "Backend Reliability First",
      desc: isAr 
        ? "إعطاء الأولوية لتدفق البيانات الموثوق، والعزل التام لمعاملات قواعد البيانات (ACID)، والمعالجة الصارمة للاستثناءات في Java و Spring Boot."
        : "Prioritizing deterministic data flow, strong transaction isolation (ACID), and robust error boundaries in Java and Spring Boot."
    },
    {
      title: isAr ? "التكامل المشترك بين العتاد والبرمجيات" : "Hardware-Software Co-Design",
      desc: isAr 
        ? "القدرة على الجمع بين برمجة الفيرموير C++، وقياسات الحساسات الحية، وواجهات الويب الحديثة في بنية إنترنت أشياء موحدة."
        : "Comfortable spanning embedded C++ firmware, hardware sensor telemetry, and modern web interfaces in unified IoT architectures."
    },
    {
      title: isAr ? "الأدلة القابلة للتحقق قبل الافتراضات" : "Verifiable Evidence over Assumptions",
      desc: isAr 
        ? "كل مهارة مدعومة بأكواد حقيقية، واختبارات مؤتمتة (مثل 69/69 اختبارات ناجحة في Pytest)، وسجلات بناء فعلية."
        : "Every claim backed by working code, automated test suites (such as 69/69 passing Pytests), and real deployment logs."
    },
    {
      title: isAr ? "الشفافية والكفاءة الحقيقية" : "Transparent Competency",
      desc: isAr 
        ? "تمثيل صادق للمهارات — كفاءة متقدمة في Java و SQL، مع استكشاف عملي مستمر لنماذج الرؤية الحاسوبية والذكاء الاصطناعي."
        : "Honest representation of skills — deep proficiency in Java and SQL, with developing practical exploratory work in AI and vision models."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#080B11] border-t border-slate-200 dark:border-slate-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
              <Compass className="w-3.5 h-3.5 text-sky-500" />
              <span>{isAr ? "عن حسام أحمد" : "ABOUT HOSSAM AHMED"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          {/* Right Column: Portrait & Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Portrait Card */}
            <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-sky-400/80 shadow-lg shadow-sky-500/25 shrink-0 bg-slate-900 group">
                <Image 
                  src="/assets/profile/hossam-ahmed.jpg" 
                  alt="Hossam Ahmed — Software Developer" 
                  width={144}
                  height={144}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none" />
              </div>
              <div className="space-y-1.5 text-center sm:text-start">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? "حسام أحمد" : "Hossam Ahmed"}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400">
                  {isAr ? "مهندس ومطور برمجيات · جامعة NCTU" : "Software Developer · ICT NCTU"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                  {isAr 
                    ? "متخصص في هندسة الأنظمة الخلفية بلغة Java، وهندسة قواعد البيانات العلائقية، وتطبيقات إنترنت الأشياء والروبوتات."
                    : "Focused on Java backend engineering, relational database architecture, and integrated IoT robotics."}
                </p>
                <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    Java 21 LTS
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    Spring Boot 3
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    Oracle SQL
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-500" />
                <span>{isAr ? "المبادئ الهندسية الأساسية" : "Core Engineering Principles"}</span>
              </h3>

              <div className="space-y-4">
                {engineeringPrinciples.map((ep, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{ep.title}</span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {ep.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Summary Pill */}
              <div className="pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                {isAr ? "📍 القاهرة، مصر · متاح للعمل عن بُعد وحضورياً محلياً وعالمياً" : "📍 Based in Cairo, Egypt · Open to Global Remote & On-Site Roles"}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
