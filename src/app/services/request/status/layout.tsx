import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Service Request Status | Hossam Ahmed",
  description: "Check real-time status and progress updates for your submitted software engineering service request with reference code.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
