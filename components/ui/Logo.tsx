// =============================================================================
// FICHIER : components/ui/Logo.tsx
// RÔLE : Logo du site, utilisé dans Header et Footer
// CRITICITÉ : 🟢 BASSE - Composant simple
// UTILISÉ PAR : components/layout/Header.tsx, components/layout/Footer.tsx
// =============================================================================

import Link from "next/link";

// -----------------------------------------------------------------------------
// PROPS :  Paramètres que le composant peut recevoir
// -----------------------------------------------------------------------------
interface LogoProps {
  // Taille du logo :  "sm" (petit), "md" (moyen), "lg" (grand)
  size?: "sm" | "md" | "lg";
}

// -----------------------------------------------------------------------------
// COMPOSANT :  Logo
// -----------------------------------------------------------------------------
export function Logo({ size = "md" }: LogoProps) {
  // Définition des tailles avec Tailwind CSS
  const sizes = {
    sm: "text-lg",    // 18px
    md: "text-xl",    // 20px
    lg: "text-2xl",   // 24px
  };

  return (
    // Link = composant Next.js pour la navigation (plus rapide qu'un <a>)
    <Link 
      href="/" 
      className={`font-bold ${sizes[size]} flex items-center gap-2`}
    >
      {/* Icône emoji - Tu peux remplacer par une vraie image plus tard */}
      <span className="text-2xl">📊</span>
      
      {/* Nom du site avec couleur dégradée */}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        DashKit
      </span>
    </Link>
  );
}