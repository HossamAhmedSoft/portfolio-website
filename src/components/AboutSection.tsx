"use client";

import React from "react";
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

export function AboutSection() {
  const engineeringPrinciples = [
    {
      title: "Backend Reliability First",
      desc: "Prioritizing deterministic data flow, strong transaction isolation (ACID), and robust error boundaries in Java and Spring Boot."
    },
    {
      title: "Hardware-Software Co-Design",
      desc: "Comfortable spanning embedded C++ firmware, hardware sensor telemetry, and modern web interfaces in unified IoT architectures."
    },
    {
      title: "Verifiable Evidence over Assumptions",
      desc: "Every claim backed by working code, automated test suites (such as 69/69 passing Pytests), and real deployment logs."
    },
    {
      title: "Transparent Competency",
      desc: "Honest representation of skills — deep proficiency in Java and SQL, with developing practical exploratory work in AI and vision models."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#080B11] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
              <Compass className="w-3.5 h-3.5 text-sky-500" />
              <span>ABOUT HOSSAM AHMED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineering Mindset & Background
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                I am a software developer with a strong foundation in <strong className="text-slate-900 dark:text-white">Java Backend Engineering</strong> and <strong className="text-slate-900 dark:text-white">Database Systems</strong>, complemented by hands-on experience in full-stack web applications and embedded hardware firmware.
              </p>
              <p>
                My technical journey began with three years of intensive programming foundations at <strong className="text-slate-900 dark:text-white">Misr International Academy for Computers and Artificial Intelligence (MICA)</strong>, where I developed advanced Java and Oracle Database skills, earning multiple Oracle Academy Awards and the Microsoft Technology Associate (MTA) credential.
              </p>
              <p>
                Currently pursuing my Information and Communication Technology (ICT) degree at <strong className="text-slate-900 dark:text-white">New Cairo Technological University (NCTU)</strong>, I have expanded my engineering breadth into modern full-stack frameworks (Next.js 14, TypeScript strict mode, Supabase) and IoT robotics (Arduino, ESP32-CAM, real-time WebSockets telemetry).
              </p>
              <p>
                I believe that good software is defined by clarity, maintainability, and predictable execution under real-world conditions. Whether architecting a Spring Boot REST API with role-based security or tuning an autonomous robot's line-following sensor loop, my goal is to deliver clean, documented, and resilient systems.
              </p>
            </div>
          </div>

          {/* Right Column: Portrait & Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Portrait Card */}
            <div className="flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-left">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-md shrink-0 bg-slate-900">
                <img 
                  src="/assets/profile/hossam-ahmed.jpg" 
                  alt="Hossam Ahmed — Software Developer" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Hossam Ahmed
                </h3>
                <p className="text-xs font-mono text-sky-600 dark:text-sky-400">
                  Software Developer · ICT NCTU
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                  Focused on Java backend engineering, relational database architecture, and integrated IoT robotics.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 space-y-5 text-left">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-500" />
                <span>Core Engineering Principles</span>
              </h3>

              <div className="space-y-4">
                {engineeringPrinciples.map((ep, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{ep.title}</span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-3.5">
                      {ep.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Summary Pill */}
              <div className="pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                📍 Based in Cairo, Egypt · Open to Global Remote & On-Site Roles
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
