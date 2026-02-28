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
    id: "GA4 Report Template",
    slug: "GA4-report-template",
    name: "Google Analytics 4 Report Template",
    shortDescription: 
      "Google Analytics 4 professional reporting template built for performance.",
    longDescription: `

A premium dashboard template designed by BI professionals.

Our Google Analytics 4 Report Template solves this instantly:

- ⚡ Setup in under 60 seconds — No technical skills required
- 📊 50+ pre-built visualizations — All key metrics in one view
- 🎯 Actionable insights — Not just data, but answers to business questions
- 🔄 Real-time updates — Always connected to your live GA4 property
- 📱 Mobile-responsive — Review performance on any device
- 🎨 Fully customizable — Match your brand colors and metrics


## Perfect For These Professionals:

- 🎯 SEO Specialists optimizing organic search performance
- 🛒 Ecommerce Managers tracking product and revenue metrics
- 📈 Growth Marketers running multi-channel campaigns
- 💼 Marketing Consultants delivering client reports
- 🚀 SaaS Founders monitoring user acquisition funnels
- 📊 Data Analysts visualizing GA4 insights for stakeholders
- 🏢 Agency Teams managing multiple client properties
- 📝 Content Marketers measuring content ROI
- 🎨 Product Managers understanding user behavior
- 💡 Business Owners making data-driven decisions

 
    `.trim(),

    price: 25900, // 259,00€
    currency: "EUR",

    images: {
      thumbnail: "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0005.jpg",
      gallery: [
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0005.jpg",
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0001.jpg",
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0004.jpg",
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0007.jpg",
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0009.jpg",
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0011.jpg",
        "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Report%20Template/DEMO_-_Google_Analytics_4_Report_Template_pages-to-jpg-0012.jpg"
      ],
    },

    demoUrl: "https://lookerstudio.google.com/embed/reporting/8fdbdf91-0df4-4c54-a4e2-10c8c3935971/page/tEnnC",

    demoIframe: '<iframe width="600" height="338" src="https://lookerstudio.google.com/embed/reporting/7b2ea612-3f72-4dcb-a6a4-3560958b7449/page/6BShF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>',
  
    features: [
      "One click setup",
      "Engagement metrics & analysis",
      "User acquisition & behavior insights",
      "Revenue & conversion tracking",
      "Customizable components",
      "Data visualizations design",
      "Comprehensive glossary",
    ],

    technologies: ["GA4", "Google Analytics 4", "Looker Studio", "Google Data Studio"],

    stripePriceId: "prod_TtTC2BydzyWljD",

    downloadFile: "https://storage.dashkit.online/downloads/lookze-pro-v1.zip",

    seo: {
      title: "Google Analytics 4 Report Template - Professional BI for Non-technical teams | DashKit",
      description: 
        "Template de dashboard moderne avec 50+ composants. Parfait pour votre application SaaS.",
      keywords: ["dashboard template", "Looker dashboard", "Looker Studio dashboard", "GA4 report template", "Google Analytics 4 template"] ,
    },
  },

// -----------------------------------------------------------------------------
// GOOGLE ANALYTICS 4 ECOMMERCE REPORT TEMPLATE
// -----------------------------------------------------------------------------

  {
    id: "GA4 Ecommerce Report Template",
    slug: "GA4-ecommerce-report-template",
    name: "Google Analytics 4 Ecommerce Report Template",
    shortDescription: 
      "Google Analytics 4 professional reporting template built for Ecommerce.",
    longDescription: `
A premium dashboard template designed by BI professionals.

Our Google Analytics 4 Report Template solves this instantly:

- ⚡ Setup in under 60 seconds — No technical skills required
- 📊 50+ pre-built visualizations — All key metrics in one view
- 🎯 Actionable insights — Not just data, but answers to business questions
- 🔄 Real-time updates — Always connected to your live GA4 property
- 📱 Mobile-responsive — Review performance on any device
- 🎨 Fully customizable — Match your brand colors and metrics


## Perfect For These Professionals:

- 🎯 SEO Specialists optimizing organic search performance
- 🛒 Ecommerce Managers tracking product and revenue metrics
- 📈 Growth Marketers running multi-channel campaigns
- 💼 Marketing Consultants delivering client reports
- 🚀 SaaS Founders monitoring user acquisition funnels
- 📊 Data Analysts visualizing GA4 insights for stakeholders
- 🏢 Agency Teams managing multiple client properties
- 📝 Content Marketers measuring content ROI
- 🎨 Product Managers understanding user behavior
- 💡 Business Owners making data-driven decisions

    `.trim(),

    price: 25900, // 259,00€
    currency: "EUR",

    images: {
      thumbnail: "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0001.jpg",
      gallery: [
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0001.jpg",
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0002.jpg",
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0003.jpg",
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0005.jpg",
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0007.jpg",
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0008.jpg",
    "https://ztlejgzielmkpusfrqpi.supabase.co/storage/v1/object/public/products/Google%20Analytics%204%20Ecommerce%20Report/DEMO_-_Google_Analytics_4_Ecommerce_Report_Template%20(2)_page-0009.jpg"
      ],
    },

    demoUrl: "https://demo.dashkit.online/admin-panel",

    demoIframe: '<iframe width="600" height="338" src="https://lookerstudio.google.com/embed/reporting/db16cc2b-501d-4a33-94d0-ac926199dbfd/page/6BShF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>',

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
    stripePriceId: "prod_TyysZXyo382zug",

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
