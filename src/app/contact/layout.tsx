import type { Metadata } from "next";

const pageUrl = "https://hossamahmedwebsite.vercel.app/contact";

export const metadata: Metadata = {
  title: "Contact Hossam Ahmed | Direct Communication & Inquiries",
  description:
    "Get in touch with software developer Hossam Ahmed via direct email (Kabtinhosa@yahoo.com), WhatsApp (+201286677999), or submit a formal project request.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Contact Hossam Ahmed | Software Engineering Inquiries",
    description: "Direct channels for software engineering consultations, recruitment, and service requests.",
    url: pageUrl,
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hossam Ahmed",
    description: "Direct email, WhatsApp, and project request workflow.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
