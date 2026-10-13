import type { Metadata } from "next";

const pageUrl = "https://hossamahmedwebsite.vercel.app/projects";

export const metadata: Metadata = {
  title: "Software Engineering Projects & Verified Systems | Hossam Ahmed",
  description:
    "Explore 8 verified software engineering projects by Hossam Ahmed: Java enterprise backends, Spring Boot 3 REST APIs, C++ systems, IoT robotics, cryptography suites, and full-stack Next.js web applications.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Software Engineering Projects & Case Studies | Hossam Ahmed",
    description:
      "Inspect 8 verified software engineering projects with comprehensive architectural case studies, problem statements, and live repositories.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hossam Ahmed — Verified Engineering Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering Projects | Hossam Ahmed",
    description: "Explore 8 verified software engineering projects and technical case studies.",
    images: ["/og-image.jpg"],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
