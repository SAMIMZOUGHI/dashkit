// =============================================================================
// FICHIER : app/layout.tsx
// RÔLE : Layout global du site - Style dark premium
// =============================================================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// =============================================================================
// MÉTADONNÉES SEO - Configuration complète pour le référencement Google
// =============================================================================

export const metadata: Metadata = {
  // Base URL pour les métadonnées (à personnaliser avec votre domaine)
  metadataBase: new URL("https://dashkit.online"),

  // Titre du site avec template pour les pages individuelles
  title: {
    default: "DashKit - Templates Dashboard Premium",
    template: "%s | DashKit",
  },

  // Description optimisée pour le SEO (155 caractères max recommandé)
  description:
    "Templates Next.js professionnels pour dashboards modernes. Solutions premium React, TypeScript, Tailwind CSS pour applications web performantes.",

  // Mots-clés pour le référencement
  keywords: [
    "dashboard",
    "templates",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "premium",
    "dashboard templates",
    "admin templates",
    "SaaS",
    "web applications",
  ],

  // Auteur du site
  authors: [{ name: "DashKit Team" }],

  // Open Graph pour les réseaux sociaux (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "DashKit - Templates Dashboard Premium",
    description:
      "Templates Next.js professionnels pour dashboards modernes. Solutions premium React, TypeScript, Tailwind CSS.",
    url: "https://dashkit.online",
    siteName: "DashKit",
    locale: "fr_FR",
    type: "website",
  },

  // Twitter Card pour Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "DashKit - Templates Dashboard Premium",
    description:
      "Templates Next.js professionnels pour dashboards modernes. Solutions premium React, TypeScript, Tailwind CSS.",
  },

  // Configuration robots pour les moteurs de recherche
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Vérification Google Search Console
  verification: {
    google: "VOTRE_CODE_GOOGLE_SEARCH_CONSOLE", // TODO: Remplacer par votre code de vérification Google Search Console
  },

  // URL canonique
  alternates: {
    canonical: "https://dashkit.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
