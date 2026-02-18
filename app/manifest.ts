// =============================================================================
// FICHIER : app/manifest.ts
// RÔLE : Configuration du Web App Manifest pour PWA et installation
// =============================================================================
// Documentation Next.js : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest

import { MetadataRoute } from "next";

/**
 * Génère le fichier manifest.json pour permettre l'installation de l'application
 * Next.js créera automatiquement le fichier /manifest.json
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    // Nom complet de l'application
    name: "DashKit - Templates Dashboard Premium",
    
    // Nom court pour l'écran d'accueil mobile
    short_name: "DashKit",
    
    // Description de l'application
    description:
      "Templates Next.js professionnels pour dashboards modernes. Solutions premium React, TypeScript, Tailwind CSS pour applications web performantes.",
    
    // Page de démarrage de l'application
    start_url: "/",
    
    // Mode d'affichage (standalone = comme une app native)
    display: "standalone",
    
    // Couleur de fond (thème noir du site)
    background_color: "#000000",
    
    // Couleur de thème (thème noir du site)
    theme_color: "#000000",
  };
}
