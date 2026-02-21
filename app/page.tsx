// =============================================================================
// FICHIER : app/page.tsx
// RÔLE : Homepage — Server Component pour SEO + JSON-LD
// =============================================================================

import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

// ─────────────────────────────────────────────────────────────────────────────
// 1. METADATA SEO (uniquement possible dans un Server Component)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DashKit — Premium Dashboard Templates for Looker Studio & Power BI",
  description:
    "Professional dashboard templates for Looker Studio and Power BI. Built by BI experts. One-click setup in 60 seconds. Trusted by 10,000+ analysts.",
  keywords: [
    "dashboard templates",
    "GA4 report template",
    "Google Analytics 4 dashboard",
    "Looker Studio template",
    "Power BI dashboard",
    "analytics dashboard",
    "data visualization",
  ],
  openGraph: {
    title: "DashKit — Premium Dashboard Templates",
    description:
      "Professional dashboard templates for Looker Studio and Power BI. Setup in 60 seconds.",
    url: "https://dashkit.online",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashKit - Premium Dashboard Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DashKit — Premium Dashboard Templates",
    description: "Looker Studio & Power BI templates. Setup in 60 seconds.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://dashkit.online",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. JSON-LD STRUCTURED DATA (injecté dans le <body>, lu par Google)
// ─────────────────────────────────────────────────────────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DashKit",
  url: "https://dashkit.online",
  logo: "https://dashkit.online/logo.png",
  description:
    "Professional dashboard templates for Looker Studio and Power BI. Built by BI experts.",
  founder: {
    "@type": "Person",
    name: "Sami Mzoughi",
    jobTitle: "Founder & Lead Developer",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@dashkit.online",
    contactType: "customer service",
    availableLanguage: ["English", "French"],
  },
  sameAs: [
    // Ajoute tes liens ici quand tu les auras :
    // "https://twitter.com/dashkit",
    // "https://linkedin.com/company/dashkit",
    // "https://github.com/SAMIMZOUGHI/dashkit",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DashKit",
  url: "https://dashkit.online",
  description: "Premium dashboard templates for analytics professionals",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dashkit.online/products?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. RENDU DE LA PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ✅ JSON-LD : Google lit ces balises <script> pour comprendre ton site */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ✅ Le contenu visuel avec les animations */}
      <HomePageClient />
    </>
  );
}