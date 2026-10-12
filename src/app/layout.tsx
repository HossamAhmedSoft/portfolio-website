import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hossam Ahmed | Software Developer & Systems Engineer",
  description:
    "Personal engineering portfolio of Hossam Ahmed. Backend engineering, Spring Boot, Oracle SQL, Next.js full-stack development, and embedded IoT systems.",
  keywords: [
    "Hossam Ahmed",
    "Software Developer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Oracle SQL",
    "Next.js",
    "TypeScript",
    "C++",
    "Embedded Systems",
    "IoT",
    "Robotics",
    "Portfolio"
  ],
  authors: [{ name: "Hossam Ahmed", url: "https://github.com/HossamAhmedSoft" }],
  creator: "Hossam Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/HossamAhmedSoft",
    title: "Hossam Ahmed | Software Developer & Systems Engineer",
    description:
      "Software developer focused on backend engineering, full-stack applications, and integrated systems — combining software, databases, and embedded technology.",
    siteName: "Hossam Ahmed Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hossam Ahmed | Software Developer",
    description:
      "Software developer focused on backend engineering, full-stack applications, and integrated systems."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080B11" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#080B11] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
