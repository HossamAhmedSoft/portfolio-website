"use client";

import React, { useEffect } from "react";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Award,
  GraduationCap
} from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

import { useLanguage } from "./LanguageProvider";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const { isAr } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#131C31]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
              {isAr ? "سيرة ذاتية معتمدة" : "VERIFIED RESUME"}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
              Hossam_Ahmed_Software_Engineer_CV.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isAr ? "طباعة / حفظ PDF" : "Print / Save PDF"}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0B0F19] text-slate-800 dark:text-slate-200 print:p-0 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hossam Ahmed
            </h1>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 font-mono">
              Software Developer | Backend & Full-Stack Engineering | Embedded Systems & AI Enthusiast
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Cairo, Egypt
              </span>
              <a href="mailto:Kabtinhosa@yahoo.com" className="flex items-center gap-1 hover:underline text-sky-500">
                <Mail className="w-3.5 h-3.5" /> Kabtinhosa@yahoo.com
              </a>
              <a href="https://github.com/HossamAhmedSoft" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-sky-500">
                <GithubIcon className="w-3.5 h-3.5" /> github.com/HossamAhmedSoft
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Software developer with deep foundations in Java backend engineering, Oracle SQL relational database systems, and full-stack web applications. Experienced in architecting transactional Spring Boot REST APIs with role-based JWT security, building high-throughput C++ terminal ERP systems, and engineering integrated IoT robotics firmware with real-time WebSocket telemetry. Strong commitment to automated testing, clean architectural patterns, and verifiable code quality.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Education & Academic Foundations
            </h2>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>New Cairo Technological University (NCTU)</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">2023 — Present</span>
                </div>
                <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                  Information and Communication Technology (ICT)
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Focus on software development, database architecture, distributed systems, and modern web application platforms.
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>Misr International Academy for Computers & Artificial Intelligence (MICA)</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">2020 — 2023</span>
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                  Three-Year Comprehensive Computer Science & Software Engineering Curriculum
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Intensive foundations in Java SE, C/C++, Oracle Database programming, data structures, algorithms, and embedded robotics.
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Community Involvement */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Experience & Community Involvement
            </h2>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  <span>Core Team HR Specialist — GDG NCTU</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">NCTU Campus · Across two sessions</span>
                </div>
                <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                  Community & Membership Committee · Academic Year 2025–2026
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Contributed to HR and community operations at GDG NCTU, supporting member engagement, communication, and community activities across two sessions.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Member Onboarding & Engagement</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Team Communication & Coordination</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Attendance & Task Follow-up</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">Feedback & Member Development</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">HR Rules & Points Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white">Languages: </strong>
                Java (17/21 LTS/25), SQL, TypeScript, JavaScript (ES6+), C++ (C++17), Python 3, Embedded C
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Backend & APIs: </strong>
                Spring Boot 3, Spring Security 6, JWT, RESTful API Design, Node.js, Express, WebSockets, JPA/Hibernate
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Databases: </strong>
                Oracle Database (11g/19c/21c), PostgreSQL, Supabase (RLS), MySQL, HikariCP, Normalization (1NF–3NF)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Frontend & IoT: </strong>
                Next.js (App Router), React, Tailwind CSS, Arduino Mega/Uno, ESP32-CAM, Sensor Telemetry, PWM Control
              </div>
            </div>
          </div>

          {/* Key Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Selected Engineering Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>Troy FireBot — Autonomous IoT Firefighting Robot</span>
                  <span className="font-mono text-slate-400 font-normal">Arduino, ESP32-CAM, Node.js, WebSockets</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Engineered microcontroller firmware for flame sensor triangulation and line tracking; built ESP32-CAM video streaming bridge and central browser-based WebSocket telemetry control room. Tested at RoboCup MICA 2023.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>Enterprise Employee Management REST API</span>
                  <span className="font-mono text-slate-400 font-normal">Java 21 LTS, Spring Boot 3, Spring Security 6, Oracle SQL</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Production-grade backend with stateless JWT authentication, role-based endpoint protection (RBAC), HikariCP connection pooling, and transactional leave tracking. Verified with Maven clean build.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>GDG NCTU Operations & Member Platform</span>
                  <span className="font-mono text-slate-400 font-normal">Next.js 14, TypeScript (Strict), Supabase, PostgreSQL</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Central operational web platform governing 17 organizational modules for Google Developer Groups NCTU. Implemented isolated member point ledgers, smart reminders, and executive PDF reporting with zero TypeScript errors.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>University Student Information System (SIS)</span>
                  <span className="font-mono text-slate-400 font-normal">Modern C++ (C++17), Object-Oriented Architecture</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Terminal ERP system with three dedicated portals (Student, Professor, Admin), prerequisite validation, credit-weighted cumulative GPA calculation, and robust file serialization.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Verified Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900 dark:text-white">Microsoft: </strong>
                MTA: Introduction to Programming Using Java (Certiport: <code className="font-mono text-sky-500">PEaA-uSHc</code>)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Oracle Academy: </strong>
                Database Programming with SQL (Dec 2022)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Oracle Academy: </strong>
                Database Design (Dec 2022) & Database Foundations (Dec 2022)
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Oracle Academy: </strong>
                Java Programming (Mar 2023), Fundamentals (2022), Foundations (2022)
              </div>
              <div className="sm:col-span-2">
                <strong className="text-slate-900 dark:text-white">Robotics Competition: </strong>
                RoboCup MICA Egypt 2023 — Autonomous Line Follower Robot Participation (May 2023)
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
