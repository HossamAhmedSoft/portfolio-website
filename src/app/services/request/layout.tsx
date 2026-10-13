import type { Metadata } from "next";

const pageUrl = "https://hossamahmedwebsite.vercel.app/services/request";

export const metadata: Metadata = {
  title: "Service Request & Project Intake System | Hossam Ahmed",
  description:
    "Submit your software engineering project brief to Hossam Ahmed. Structured intake for Java Spring Boot REST APIs, full-stack Next.js web platforms, management systems, and IoT firmware.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Request a Software Engineering Service | Hossam Ahmed",
    description:
      "Structured project intake workflow. Submit specifications, budget parameters, and timeline requirements for a formal technical review.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hossam Ahmed — Project Intake System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Request System | Hossam Ahmed",
    description: "Submit software development project briefs for Java backends, full-stack web, and embedded systems.",
    images: ["/og-image.jpg"],
  },
};

export default function ServiceRequestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
