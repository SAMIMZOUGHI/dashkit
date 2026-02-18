// =============================================================================
// FICHIER : app/robots.ts
// RÔLE : Génération dynamique du fichier robots.txt pour les moteurs de recherche
// =============================================================================
// Documentation Next.js : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

import { MetadataRoute } from "next";

// TODO: Remplacer par votre domaine de production
const BASE_URL = "https://dashkit.fr";

/**
 * Génère le fichier robots.txt pour contrôler l'indexation des moteurs de recherche
 * Next.js créera automatiquement le fichier /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    // Règles pour tous les robots
    rules: {
      userAgent: "*",
      // Autorise l'indexation de toutes les pages publiques
      allow: "/",
      // Interdit l'indexation des pages sensibles et privées
      disallow: [
        "/api/", // Routes API backend
        "/cart/", // Panier d'achat (pages privées)
        "/checkout/", // Processus de paiement (pages privées)
      ],
    },
    // Référence le sitemap pour faciliter l'indexation
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
