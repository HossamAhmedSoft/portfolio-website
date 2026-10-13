import type { Metadata } from "next";

const pageUrl = "https://hossamahmedwebsite.vercel.app/privacy";

export const metadata: Metadata = {
  title: "Privacy Notice & Data Processing Policy | Hossam Ahmed",
  description:
    "Privacy policy and terms of data processing for service requests submitted through Hossam Ahmed's portfolio platform.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
