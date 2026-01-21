// =============================================================================
// FICHIER : app/layout.tsx
// RÔLE : Layout racine - Structure commune à TOUTES les pages
// CRITICITÉ : ⚠️ CRITIQUE - Point d'entrée de l'application
// =============================================================================
// 
// 🎓 LEÇON :  Comment fonctionne le Layout ?
// 
// Ce fichier "enveloppe" toutes les pages du site. 
// {children} = le contenu de la page actuelle (page. tsx)
// 
// Structure :
// <html>
//   <body>
//     <Header />      ← Toujours présent
//     {children}      ← Contenu de la page (change selon l'URL)
//     <Footer />      ← Toujours présent
//   </body>
// </html>
//
// =============================================================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import des composants de layout
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// -----------------------------------------------------------------------------
// POLICE :  Inter (moderne et lisible)
// next/font optimise automatiquement le chargement des polices
// -----------------------------------------------------------------------------
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Affiche le texte immédiatement (meilleur pour le SEO)
  variable: "--font-inter",
});

// -----------------------------------------------------------------------------
// MÉTADONNÉES SEO : Configuration globale pour tout le site
// Chaque page peut surcharger ces valeurs
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  // Titre par défaut (affiché dans l'onglet du navigateur)
  title: {
    default: "DashKit - Templates de Dashboard Premium",
    template: "%s | DashKit", // Ex: "Lookze Pro | DashKit"
  },
  
  // Description pour Google (max 160 caractères)
  description: 
    "Découvrez nos templates de dashboard premium pour vos applications SaaS. Design moderne, code propre, support inclus.",
  
  // Mots-clés (moins importants pour le SEO moderne, mais utiles)
  keywords: [
    "dashboard template",
    "admin template",
    "next.js dashboard",
    "react dashboard",
    "saas template",
    "tailwind dashboard",
  ],
  
  // Auteur
  authors: [{ name: "DashKit", url: "https://dashkit.online" }],
  
  // URL canonique (évite le contenu dupliqué)
  metadataBase: new URL("https://dashkit.online"),
  
  // Open Graph :  Aperçu sur les réseaux sociaux (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://dashkit.online",
    siteName: "DashKit",
    title: "DashKit - Templates de Dashboard Premium",
    description:
      "Découvrez nos templates de dashboard premium pour vos applications SaaS.",
    images: [
      {
        url: "/images/og-image.png", // Image 1200x630px recommandée
        width: 1200,
        height: 630,
        alt: "DashKit - Templates de Dashboard",
      },
    ],
  },
  
  // Twitter Card : Aperçu sur Twitter
  twitter: {
    card: "summary_large_image",
    title: "DashKit - Templates de Dashboard Premium",
    description:
      "Découvrez nos templates de dashboard premium pour vos applications SaaS.",
    images: ["/images/og-image.png"],
  },
  
  // Robots :  Instructions pour les moteurs de recherche
  robots: {
    index:  true,  // Autoriser l'indexation
    follow: true, // Suivre les liens
  },
};

// -----------------------------------------------------------------------------
// COMPOSANT : RootLayout
// -----------------------------------------------------------------------------
export default function RootLayout({
  children,
}:  Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-zinc-900 antialiased">
        {/* ================================================================= */}
        {/* HEADER : Navigation (sticky en haut) */}
        {/* ================================================================= */}
        <Header />

        {/* ================================================================= */}
        {/* MAIN :  Contenu principal de la page */}
        {/* flex-1 = prend tout l'espace disponible (pousse le footer en bas) */}
        {/* ================================================================= */}
        <main className="flex-1">
          {children}
        </main>

        {/* ================================================================= */}
        {/* FOOTER : Pied de page */}
        {/* ================================================================= */}
        <Footer />
      </body>
    </html>
  );
}