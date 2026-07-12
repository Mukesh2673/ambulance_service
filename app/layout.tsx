import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "RapidCare Ambulance | 24/7 Emergency Medical Transport", template: "%s | RapidCare Ambulance" },
  description: "Rapid, reliable 24/7 ambulance and medical transport. Request an emergency ambulance or schedule a patient transfer today.",
  keywords: ["ambulance service", "emergency ambulance", "medical transport", "patient transfer", "24 hour ambulance"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "RapidCare Ambulance | 24/7 Emergency Medical Transport",
    description: "Rapid, reliable ambulance and medical transport when every minute matters.",
    siteName: "RapidCare Ambulance"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
