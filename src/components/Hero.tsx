"use client";

import React from "react";
import { 
  ArrowRight, 
  Terminal, 
  Database, 
  Cpu, 
  Globe,
  Mail, 
  CheckCircle2, 
  FileText,
  Layers,
  ShieldCheck
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface HeroProps {
  onOpenCV: () => void;
}

export function Hero({ onOpenCV }: HeroProps) {
  const verifiedPillars = [
    { icon: Terminal, label: "Java 21 & Spring Boot", desc: "Production REST APIs & JWT" },
    { icon: Database, label: "Oracle SQL & Databases", desc: "Certified schema & normalization" },
    { icon: Globe, label: "Full-Stack (Next.js / TS)", desc: "Strict type safety & web PWAs" },
    { icon: Cpu, label: "Embedded Systems & IoT", desc: "Firmware, telemetry & robotics" }
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Subtle Geometric Grid */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80 text-sky-700 dark:text-sky-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400">Reliable Software</span> and Connected Systems.
            </h1>

            {/* Position Summary */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              Software developer focused on backend engineering, full-stack applications, and integrated systems — combining software, databases, and embedded technology to solve practical problems.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                <span>View & Download CV</span>
              </button>

              <a
                href="https://github.com/HossamAhmedSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="hidden sm:inline font-mono text-xs">@HossamAhmedSoft</span>
              </a>
            </div>

            {/* Verified Pillar Cards */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {verifiedPillars.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/40 transition-colors"
                  >
                    <p.icon className="w-5 h-5 text-sky-500 dark:text-sky-400 mb-1.5" />
                    <div className="font-semibold text-xs text-slate-900 dark:text-white leading-tight">
                      {p.label}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Architectural Systems Diagram (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 ml-2">system_architecture.sys</span>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-900">
                  VERIFIED PIPELINE
                </span>
              </div>

              {/* Connected Layers Visualization */}
              <div className="py-5 space-y-3.5">
                {/* Layer 1: Embedded Hardware / Edge */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">1. Hardware Edge & Firmware</span>
                      <span className="text-[10px] font-mono text-emerald-500">Real-Time</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Arduino Mega 2560 & ESP32-CAM: Infrared flame arrays, line sensors, PWM motor actuation, optical video stream.
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-sky-500 dark:text-sky-400 font-mono text-xs">
                  ↓ <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1">Serial / WebSockets Telemetry</span>
                </div>

                {/* Layer 2: Transactional Core & Persistence */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">2. Backend & Data Persistence</span>
                      <span className="text-[10px] font-mono text-sky-500">ACID Compliance</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Spring Boot 3, Java 21 LTS, Oracle Database & PostgreSQL: Stateless JWT authentication, RBAC filters, HikariCP.
                    </p>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-sky-500 dark:text-sky-400 font-mono text-xs">
                  ↓ <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1">RESTful JSON / WebSocket Feeds</span>
                </div>

                {/* Layer 3: Presentation & User Control */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">3. Client Applications & Control Room</span>
                      <span className="text-[10px] font-mono text-purple-500">Accessible UI</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Next.js 14, TypeScript (Strict), Java Swing (FlatLaf), and PWA: Live telemetry monitors, responsive dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>26 Repositories Synchronized on GitHub</span>
                </span>
                <a 
                  href="#firebot-case-study" 
                  className="text-sky-500 hover:text-sky-400 font-medium text-xs hover:underline"
                >
                  View Signature Project →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
