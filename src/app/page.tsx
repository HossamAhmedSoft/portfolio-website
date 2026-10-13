"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FireBotCaseStudy } from "@/components/FireBotCaseStudy";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import { AIEngineeringSection } from "@/components/AIEngineeringSection";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsGallery } from "@/components/CertificationsGallery";
import { EducationSection } from "@/components/EducationSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

// Code splitting: dynamically load heavy modal dialogs only when needed
const CVModal = dynamic(
  () => import("@/components/CVModal").then((mod) => mod.CVModal),
  { ssr: false }
);

const CommandPalette = dynamic(
  () => import("@/components/CommandPalette").then((mod) => mod.CommandPalette),
  { ssr: false }
);

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener to open Command Palette
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      {/* Sticky Header Navigation with Brand Logo & Quick Launcher */}
      <Navbar 
        onOpenCV={() => setIsCVModalOpen(true)} 
        onOpenPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Signature Case Study: Troy FireBot */}
        <FireBotCaseStudy />

        {/* Featured Projects Showcase with Live Search */}
        <ProjectsShowcase />

        {/* Professional Services Catalog */}
        <ServicesSection />

        {/* AI-Assisted Engineering, Prompt Engineering & Workflow Planning */}
        <AIEngineeringSection />

        {/* Evidence-Backed Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Experience & Community Involvement: GDG NCTU */}
        <ExperienceSection />

        {/* Verified Certifications & Credentials */}
        <CertificationsGallery />

        {/* Education & Academic Foundations */}
        <EducationSection />

        {/* About & Engineering Mindset */}
        <AboutSection />

        {/* Contact & Discussion */}
        <ContactSection />
      </main>

      {/* Footer with Brand Logo Emblem */}
      <Footer />

      {/* Verified CV / Resume Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Developer Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />
    </div>
  );
}

