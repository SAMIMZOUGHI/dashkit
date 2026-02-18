// =============================================================================
// FICHIER : app/sitemap.ts
// RÔLE : Génération dynamique du sitemap XML pour le référencement Google
// =============================================================================
// Documentation Next.js : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

import { MetadataRoute } from "next";

// TODO: Remplacer par votre domaine de production
const BASE_URL = "https://dashkit.fr";

/**
 * Génère le sitemap du site pour les moteurs de recherche
 * Next.js créera automatiquement le fichier /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Page d'accueil - Priorité maximale
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Page produits - Haute priorité
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Page ressources - Priorité moyenne-haute
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Page légale - Priorité standard
    {
      url: `${BASE_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
