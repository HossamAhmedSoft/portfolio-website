import type { Metadata } from "next";
import { featuredProjects } from "@/data/projects";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featuredProjects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const pageUrl = `https://hossamahmedwebsite.vercel.app/projects/${slug}`;

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} — Architectural Case Study`,
      description: project.headline,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: project.thumbnailUrl || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.headline,
      images: [project.thumbnailUrl || "/og-image.jpg"],
    },
  };
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
