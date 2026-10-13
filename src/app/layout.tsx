import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://hossamahmedwebsite.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hossam Ahmed | Software Developer & Full-Stack Engineer",
    template: "%s | Hossam Ahmed",
  },
  description:
    "Explore Hossam Ahmed's software engineering projects, Java backend development, full-stack applications, database-driven systems, embedded solutions, and software development services.",
  keywords: [
    "Hossam Ahmed",
    "حسام أحمد",
    "Software Developer",
    "Full-Stack Engineer",
    "Java Backend Developer",
    "Spring Boot",
    "Oracle SQL",
    "Next.js",
    "TypeScript",
    "C++",
    "Embedded Systems",
    "IoT",
    "Robotics",
    "AI-Assisted Development",
    "Software Services",
    "Portfolio"
  ],
  authors: [{ name: "Hossam Ahmed", url: "https://github.com/HossamAhmedSoft" }],
  creator: "Hossam Ahmed",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Hossam Ahmed | Software Developer & Full-Stack Engineer",
    description:
      "Explore Hossam Ahmed's software engineering projects, Java backend development, full-stack applications, database-driven systems, embedded solutions, and software development services.",
    siteName: "Hossam Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hossam Ahmed — Software Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hossam Ahmed | Software Developer & Full-Stack Engineer",
    description:
      "Explore Hossam Ahmed's software engineering projects, Java backend development, full-stack applications, and software development services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080B11" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hossam Ahmed",
  alternateName: "حسام أحمد",
  url: siteUrl,
  image: `${siteUrl}/assets/profile/hossam-ahmed.jpg`,
  jobTitle: "Software Developer & Full-Stack Engineer",
  sameAs: ["https://github.com/HossamAhmedSoft"],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Oracle SQL",
    "PostgreSQL",
    "Next.js",
    "TypeScript",
    "C++",
    "Embedded Systems",
    "Arduino",
    "ESP32",
    "IoT",
    "Robotics",
    "AI-Assisted Development",
    "Full-Stack Web Development",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hossam Ahmed Portfolio",
  url: siteUrl,
  description:
    "Explore Hossam Ahmed's software engineering projects, Java backend development, full-stack applications, database-driven systems, embedded solutions, and software development services.",
  inLanguage: ["en-US", "ar-EG"],
  author: {
    "@type": "Person",
    name: "Hossam Ahmed",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={personSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#080B11] dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
