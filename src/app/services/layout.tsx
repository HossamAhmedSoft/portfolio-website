import type { Metadata } from "next";

const pageUrl = "https://hossamahmedwebsite.vercel.app/services";

export const metadata: Metadata = {
  title: "Professional Software Engineering Services | Java, Full-Stack, IoT",
  description:
    "Explore professional software development services by Hossam Ahmed: Java Spring Boot REST APIs, Next.js full-stack applications, management systems, Oracle SQL database design, and embedded IoT solutions.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Software Engineering Services & Solutions | Hossam Ahmed",
    description:
      "Enterprise Java backends, relational databases, responsive Next.js web applications, and microcontroller firmware built with verified quality.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hossam Ahmed — Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering Services | Hossam Ahmed",
    description:
      "Java Spring Boot REST APIs, Next.js full-stack systems, database design, and embedded IoT solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
