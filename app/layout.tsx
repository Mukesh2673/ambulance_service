import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "RapidCare Ambulance | 24/7 Emergency & Medical Transport", template: "%s | RapidCare Ambulance" },
  description: "24/7 emergency ambulance response, patient transfers, event medical cover, and dependable non-emergency medical transport.",
  keywords: ["ambulance service", "emergency ambulance", "medical transport", "patient transfer", "non-emergency ambulance", "ambulance rental", "event medical cover", "24 hour ambulance"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "RapidCare Ambulance | 24/7 Emergency Medical Transport",
    description: "Rapid, reliable ambulance and medical transport when every minute matters.",
    siteName: "RapidCare Ambulance",
    images: [{ url: "/images/ambulance-hero-placeholder.svg", width: 1200, height: 900, alt: "RapidCare Ambulance" }]
  },
  twitter: { card: "summary_large_image", title: "RapidCare Ambulance | 24/7 Medical Transport", description: "Emergency response and dependable planned medical transport." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
