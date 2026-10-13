import type { Metadata } from "next";

const pageUrl = "https://hossamahmedwebsite.vercel.app/about";

export const metadata: Metadata = {
  title: "About Hossam Ahmed | Software Developer & Systems Engineer",
  description:
    "Learn about Hossam Ahmed's software engineering background, Java backend expertise, Oracle SQL credentials, robotics accomplishments at RoboCup MICA, and community leadership at GDG NCTU.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "About Hossam Ahmed | Engineering Mindset & Credentials",
    description: "Software developer focused on Java backend, relational databases, embedded systems, and disciplined AI-assisted development workflows.",
    url: pageUrl,
    type: "profile",
    images: [
      {
        url: "/assets/profile/hossam-ahmed.jpg",
        width: 1200,
        height: 630,
        alt: "Hossam Ahmed Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hossam Ahmed | Software Developer",
    description: "Engineering background, Java backend, Oracle SQL credentials, and robotics experience.",
    images: ["/assets/profile/hossam-ahmed.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
