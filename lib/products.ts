// =============================================================================
// FICHIER : lib/products.ts
// RÔLE : "Base de données" des produits - Source unique de vérité
// CRITICITÉ : ⚠️ HAUTE - Modifie ce fichier pour ajouter/modifier des produits
// =============================================================================

import { Product } from "@/types";

// -----------------------------------------------------------------------------
// LISTE DES PRODUITS
// -----------------------------------------------------------------------------
export const products: Product[] = [
  {
    id: "lookze-pro",
    slug: "lookze-pro",
    name: "Lookze Pro Dashboard",
    shortDescription: 
      "Template de dashboard moderne et complet pour applications SaaS",
    longDescription:  `
# Lookze Pro Dashboard

Un template de dashboard **premium** conçu pour les applications SaaS modernes.

## Ce qui est inclus :

- ✅ Plus de 50 composants UI prêts à l'emploi
- ✅ Mode sombre/clair automatique
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Graphiques et visualisations de données
- ✅ Documentation complète

## Mises à jour : 

Accès à vie aux mises à jour futures du template. 
    `.trim(),

    price: 4900, // 49,00€
    currency: "EUR",

    images: {
      thumbnail: "/images/products/lookze-pro/thumbnail.png",
      gallery: [
        "/images/products/lookze-pro/screenshot-1.png",
        "/images/products/lookze-pro/screenshot-2.png",
        "/images/products/lookze-pro/screenshot-3.png",
      ],
    },

    demoUrl: "https://demo.dashkit.online/lookze-pro",

    features: [
      "50+ composants UI",
      "Mode sombre/clair",
      "100% Responsive",
      "Graphiques interactifs",
      "Documentation complète",
      "Support 6 mois",
      "Mises à jour à vie",
    ],

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    // ⚠️ À REMPLACER par ton vrai Price ID Stripe (Phase 5)
    stripePriceId: "price_1Ss9VnGUPJVKIAR18zB05e8k",

    downloadFile: "https://storage.dashkit.online/downloads/lookze-pro-v1.zip",

    seo: {
      title: "Lookze Pro Dashboard - Template Premium | DashKit",
      description: 
        "Template de dashboard moderne avec 50+ composants.  Parfait pour votre application SaaS.",
      keywords: ["dashboard template", "next.js dashboard", "react dashboard"],
    },
  },
];

// -----------------------------------------------------------------------------
// FONCTIONS UTILITAIRES
// -----------------------------------------------------------------------------

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products. find((product) => product.slug === slug);
}

export function formatPrice(price: number, currency:  string = "EUR"): string {
  return new Intl. NumberFormat("fr-FR", {
    style: "currency",
    currency:  currency,
  }).format(price / 100);
}