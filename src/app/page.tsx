"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FireBotCaseStudy } from "@/components/FireBotCaseStudy";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsGallery } from "@/components/CertificationsGallery";
import { EducationSection } from "@/components/EducationSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CVModal } from "@/components/CVModal";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-white transition-colors duration-200">
      {/* Sticky Header Navigation */}
      <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* Signature Case Study: Troy FireBot */}
        <FireBotCaseStudy />

        {/* Featured Projects Showcase */}
        <ProjectsShowcase />

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

      {/* Footer */}
      <Footer />

      {/* Verified CV / Resume Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
