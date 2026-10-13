import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hossamahmedsoft.github.io"),
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/HossamAhmedSoft",
    title: "Hossam Ahmed | Software Developer & Systems Engineer",
    description:
      "Software developer focused on backend engineering, full-stack applications, and integrated systems — combining software, databases, and embedded technology.",
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
    title: "Hossam Ahmed | Software Developer",
    description:
      "Software developer focused on backend engineering, full-stack applications, and integrated systems.",
    images: ["/og-image.jpg"],
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
