import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dashkit.online"),
  title: {
    default: "DashKit — Premium Dashboard Templates for Looker Studio & Power BI",
    template: "%s | DashKit",
  },
  description:
    "Professional dashboard templates for Looker Studio and Power BI. Built by BI experts. Setup in 60 seconds. Trusted by 10,000+ marketers.",
  keywords: [
    "dashboard templates",
    "Google Analytics 4 template",
    "Looker Studio dashboard",
    "GA4 report template",
    "Power BI dashboard",
    "analytics dashboard",
    "data visualization templates",
  ],
  authors: [{ name: "Sami Mzoughi", url: "https://dashkit.online/resources/about" }],
  creator: "DashKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dashkit.online",
    siteName: "DashKit",
    title: "DashKit — Premium Dashboard Templates",
    description: "Professional dashboard templates for Looker Studio & Power BI. Setup in 60 seconds.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DashKit Dashboard Templates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DashKit — Premium Dashboard Templates",
    description: "Professional dashboard templates. Setup in 60 seconds.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    // google: "ton-code-google-search-console",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}