# Hossam Ahmed — Personal Engineering Portfolio Website

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A premium, production-ready developer portfolio showcasing real software engineering projects, backend architecture (Java & Spring Boot), Oracle SQL database design, embedded systems & robotics (Troy FireBot), and verified technical credentials.

---

## 👨‍💻 Engineering Identity & Positioning

- **Name:** Hossam Ahmed
- **Title:** Software Developer | Backend & Full-Stack Engineering | Embedded Systems & AI Enthusiast
- **Focus:** Java Backend Engineering (Spring Boot 3, REST APIs, JPA/Hibernate, JWT), Full-Stack Next.js/TypeScript, Embedded C++ Firmware (Arduino & ESP32-CAM)
- **GitHub:** [@HossamAhmedSoft](https://github.com/HossamAhmedSoft)
- **Email:** [Kabtinhosa@yahoo.com](mailto:Kabtinhosa@yahoo.com)

---

## 🌟 Key Features & Architectural Highlights

1. **Zero Fabricated Metrics Policy:**
   - Every metric, case study, and listed skill corresponds directly to an existing, verifiable repository on GitHub.
   - Zero inflated numbers ("10,000+ users", "50+ projects") or speculative claims.

2. **Troy FireBot Interactive Case Study:**
   - Deep-dive technical breakdown of the autonomous firefighting robot.
   - Microcontroller telemetry metrics (ESP32-CAM, dual L298N motor drivers, 5-channel flame sensor array, MQ-2 gas detection).
   - Embedded C++17 state loop architecture (`firebot.ino`) with sensor sampling, threshold triggers, and real screenshots/diagrams.
   - Transparent disclosure that computer vision flame detection is an experimental OpenCV prototype.

3. **Curated Showcase & Case Study Modals:**
   - Interactive category filtering (Backend & APIs, Embedded & Systems, Full-Stack & Desktop, Security & Algorithms).
   - In-depth modal dialogs detailing **Problem & Objective**, **System Architecture**, **Individual Contribution**, **Key Features**, **Engineering Challenges & Solutions**, **Testing & Verification**, and **Limitations/Roadmap**.

4. **Authentic Certifications Lightbox:**
   - Full previews of all 8 verified credentials (Oracle Database Programming with SQL, Database Design, Database Foundations, Java Programming, Java Fundamentals, Java Foundations, Microsoft MTA 98-388, RoboCup MICA 2023).
   - Lightbox modal with high-resolution inspection and Certiport verification badge (`PEaA-uSHc`).

5. **Printable / Downloadable CV Modal:**
   - Integrated semantic CV viewer formatted with CSS print styles for instant PDF export (`Ctrl+P` / Print button).

6. **Design System & Theme Engine:**
   - Dark/Light mode switcher with zero SSR hydration mismatch.
   - Electric Blue theme accent (`#00AEEF`) on deep navy / near-black surfaces (`#080B11`).
   - Restrained micro-interactions with `@media (prefers-reduced-motion)` compliance.

7. **SEO & Structured Metadata:**
   - OpenGraph cards, Twitter preview cards, viewport meta tags.
   - Dynamic `robots.txt` and `sitemap.xml` generated at build time via Next.js metadata route handlers.

---

## 🏗️ Project Structure

```text
portfolio-website/
├── public/
│   ├── certificates/          # High-resolution verified credential images
│   ├── projects/
│   │   ├── firebot/           # Troy FireBot control room, dashboard, diagrams
│   │   └── library/           # Java Swing desktop application screenshots
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind CSS design tokens, themes & animations
│   │   ├── layout.tsx         # Root layout with OpenGraph SEO & ThemeProvider
│   │   ├── page.tsx           # Home page assembling all portfolio sections
│   │   ├── robots.ts          # Search crawler rules (robots.txt)
│   │   └── sitemap.ts         # Automated sitemap generator (sitemap.xml)
│   ├── components/
│   │   ├── icons/
│   │   │   └── GithubIcon.tsx # Scalable SVG GitHub icon
│   │   ├── AboutSection.tsx   # Engineering background & problem-solving philosophy
│   │   ├── CertificateModal.tsx # Fullscreen high-resolution certificate lightbox
│   │   ├── CertificationsGallery.tsx # Credential cards with verification codes
│   │   ├── ContactSection.tsx # Contact email, copy helper, and GitHub links
│   │   ├── CVModal.tsx        # Printable verified resume modal
│   │   ├── EducationSection.tsx # Verified NCTU & MICA educational timeline
│   │   ├── FireBotCaseStudy.tsx # Troy FireBot telemetry & hardware deep dive
│   │   ├── Footer.tsx         # Responsive engineering footer
│   │   ├── Hero.tsx           # Headline, CTA buttons & interactive architecture diagram
│   │   ├── Navbar.tsx         # Sticky header with navigation & theme switch
│   │   ├── ProjectModal.tsx   # Comprehensive case study dialog
│   │   ├── ProjectsShowcase.tsx # Filterable project portfolio grid
│   │   ├── SkillsMatrix.tsx   # Categorized skills linked to project evidence
│   │   └── ThemeProvider.tsx  # Theme context provider
│   └── data/
│       ├── certificates.ts    # 8 verified credentials with credential IDs
│       ├── education.ts       # NCTU & MICA academic milestones
│       ├── projects.ts        # 8 featured projects with comprehensive case study data
│       └── skills.ts          # Categorized technical competencies
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and build scripts
├── postcss.config.mjs         # PostCSS plugins
└── tsconfig.json              # Strict TypeScript compiler options
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18.0 or newer
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/HossamAhmedSoft/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install
```

### Local Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Validation

```bash
# Type check TypeScript files
npm run type-check   # npx tsc --noEmit

# Compile production bundle
npm run build        # npx next build --webpack

# Serve production build locally
npm run start        # npx next start -p 3000
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub: `HossamAhmedSoft/portfolio-website`.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `portfolio-website` repository.
4. Framework preset: **Next.js**.
5. Click **Deploy**. Vercel will automatically build and assign a production URL (e.g., `https://hossamahmedsoft-portfolio.vercel.app`).
6. (Optional) Add your custom domain under **Project Settings > Domains**.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
