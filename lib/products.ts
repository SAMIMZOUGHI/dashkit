// =============================================================================
// FICHIER : lib/products.ts
// RÔLE : "Base de données" des produits - Source unique de vérité
// CRITICITÉ : ⚠️ HAUTE - Modifie ce fichier pour ajouter/modifier des produits
// =============================================================================

import { Product } from "@/types";

// =============================================================================
// LISTE DES PRODUITS
// =============================================================================


// -----------------------------------------------------------------------------
// GOOGLE ANALYTICS 4 REPORT TEMPLATE
// -----------------------------------------------------------------------------
export const products: Product[] = [
  {
    id: "lookze-pro",
    slug: "lookze-pro",
    name: "Lookze Pro Dashboard",
    shortDescription: 
      "Template de dashboard moderne et complet pour applications SaaS",
    longDescription: `
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

    demoUrl: "https://lookerstudio.google.com/embed/reporting/8fdbdf91-0df4-4c54-a4e2-10c8c3935971/page/tEnnC",

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

    stripePriceId: "price_1Ss9VnGUPJVKIAR18zB05e8k",

    downloadFile: "https://storage.dashkit.online/downloads/lookze-pro-v1.zip",

    seo: {
      title: "Lookze Pro Dashboard - Template Premium | DashKit",
      description: 
        "Template de dashboard moderne avec 50+ composants. Parfait pour votre application SaaS.",
      keywords: ["dashboard template", "next.js dashboard", "react dashboard"],
    },
  },

// -----------------------------------------------------------------------------
// GOOGLE ANALYTICS 4 ECOMMERCE REPORT TEMPLATE
// -----------------------------------------------------------------------------

  {
    id: "admin-panel-nextjs",
    slug: "admin-panel-nextjs",
    name: "NextJS Admin Panel",
    shortDescription: 
      "Panel d'administration complet avec authentification et gestion CRUD",
    longDescription: `
# NextJS Admin Panel

Un template de **panel d'administration** professionnel avec toutes les fonctionnalités essentielles.

## Ce qui est inclus :

- ✅ Authentification NextAuth (email, Google, GitHub)
- ✅ Gestion des rôles et permissions
- ✅ CRUD complet pour utilisateurs, produits, commandes
- ✅ Tables de données avec tri, filtres et pagination
- ✅ Formulaires de validation avec React Hook Form
- ✅ Dashboard avec statistiques et graphiques

## Technologies :

Built avec **Next.js 14**, **NextAuth**, **Prisma**, et **Tailwind CSS**.

## Mises à jour : 

Accès à vie aux mises à jour futures du template.
    `.trim(),

    price: 5900, // 59,00€
    currency: "EUR",

    images: {
      thumbnail: "/images/products/admin-panel-nextjs/thumbnail.png",
      gallery: [
        "/images/products/admin-panel-nextjs/screenshot-1.png",
        "/images/products/admin-panel-nextjs/screenshot-2.png",
        "/images/products/admin-panel-nextjs/screenshot-3.png",
      ],
    },

    demoUrl: "https://demo.dashkit.online/admin-panel",

    features: [
      "NextAuth authentification",
      "Gestion des rôles",
      "CRUD complet",
      "Tables dynamiques",
      "Validation formulaires",
      "Dashboard statistiques",
      "Documentation complète",
      "Support 6 mois",
    ],

    technologies: ["Next.js 14", "NextAuth", "Prisma", "Tailwind CSS", "Shadcn UI"],

    // ⚠️ À REMPLACER par ton vrai Price ID Stripe
    stripePriceId: "price_XXXXXXXXXXXXXX",

    downloadFile: "https://storage.dashkit.online/downloads/admin-panel-nextjs-v1.zip",

    seo: {
      title: "NextJS Admin Panel - Template Complet | DashKit",
      description: 
        "Panel d'administration Next.js avec authentification, CRUD et dashboard. Prêt à l'emploi pour votre projet.",
      keywords: ["admin panel nextjs", "nextauth template", "crud dashboard"],
    },
  },

// -----------------------------------------------------------------------------
// NEXT TEMPLATE SOON
// -----------------------------------------------------------------------------


  {
    id: "saas-starter-kit",
    slug: "saas-starter-kit",
    name: "SaaS Starter Kit",
    shortDescription: 
      "Boilerplate SaaS complet avec paiements Stripe et abonnements",
    longDescription: `
# SaaS Starter Kit

Le **boilerplate ultime** pour lancer votre SaaS en quelques jours au lieu de plusieurs mois.

## Ce qui est inclus :

- ✅ Authentification complète (email, OAuth)
- ✅ Intégration Stripe (paiements et abonnements)
- ✅ Gestion des subscriptions (plans, upgrades, cancellations)
- ✅ Dashboard utilisateur personnalisé
- ✅ Panel d'administration complet
- ✅ Landing page optimisée conversion
- ✅ Emails transactionnels (Resend)
- ✅ Base de données Supabase

## Fonctionnalités avancées :

- Système de crédits/tokens
- Facturation automatique
- Webhooks Stripe configurés
- Analytics et métriques
- Multi-tenant ready

## Gain de temps :

Économisez **100+ heures** de développement. Concentrez-vous sur votre produit, pas sur l'infrastructure.

## Mises à jour : 

Accès à vie aux mises à jour futures du template.
    `.trim(),

    price: 7900, // 79,00€
    currency: "EUR",

    images: {
      thumbnail: "/images/products/saas-starter-kit/thumbnail.png",
      gallery: [
        "/images/products/saas-starter-kit/screenshot-1.png",
        "/images/products/saas-starter-kit/screenshot-2.png",
        "/images/products/saas-starter-kit/screenshot-3.png",
      ],
    },

    demoUrl: "https://demo.dashkit.online/saas-starter",

    features: [
      "Authentification complète",
      "Paiements Stripe",
      "Gestion abonnements",
      "Dashboard utilisateur",
      "Panel admin",
      "Landing page",
      "Emails automatiques",
      "Documentation complète",
      "Support 12 mois",
      "Mises à jour à vie",
    ],

    technologies: ["Next.js 14", "Stripe", "Supabase", "Resend", "Tailwind CSS"],

    // ⚠️ À REMPLACER par ton vrai Price ID Stripe
    stripePriceId: "price_XXXXXXXXXXXXXX",

    downloadFile: "https://storage.dashkit.online/downloads/saas-starter-kit-v1.zip",

    seo: {
      title: "SaaS Starter Kit - Boilerplate Complet Next.js | DashKit",
      description: 
        "Boilerplate SaaS complet avec Stripe, authentification et dashboard. Lancez votre SaaS en quelques jours.",
      keywords: ["saas boilerplate", "stripe nextjs", "saas starter kit", "nextjs stripe"],
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
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: currency,
  }).format(price / 100);
}
