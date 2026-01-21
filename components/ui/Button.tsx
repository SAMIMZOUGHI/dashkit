// =============================================================================
// FICHIER : components/ui/Button.tsx
// RÔLE : Bouton stylisé réutilisable dans toute l'application
// CRITICITÉ :  🟡 MOYENNE - Utilisé partout
// =============================================================================
// 
// 🎓 LEÇON :  Pourquoi créer un composant Button ?
// - Cohérence :  Tous les boutons ont le même style
// - Maintenabilité : Changer le style à un seul endroit
// - Réutilisabilité :  Utiliser partout avec différentes options
//
// =============================================================================

import Link from "next/link";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// PROPS : Options du bouton
// -----------------------------------------------------------------------------
interface ButtonProps {
  // Contenu du bouton (texte, icône, etc.)
  children: React.ReactNode;
  
  // Variante visuelle
  variant?: "primary" | "secondary" | "outline" | "ghost";
  
  // Taille
  size?: "sm" | "md" | "lg";
  
  // Si défini, le bouton devient un lien
  href?: string;
  
  // Fonction appelée au clic (si pas de href)
  onClick?: () => void;
  
  // Désactiver le bouton
  disabled?:  boolean;
  
  // Afficher un état de chargement
  loading?: boolean;
  
  // Classes CSS supplémentaires
  className?: string;
  
  // Type du bouton HTML
  type?: "button" | "submit" | "reset";
}

// -----------------------------------------------------------------------------
// COMPOSANT : Button
// -----------------------------------------------------------------------------
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  loading = false,
  className,
  type = "button",
}: ButtonProps) {
  
  // =========================================================================
  // STYLES : Définition des variantes avec Tailwind CSS
  // =========================================================================
  
  // Classes de base (communes à tous les boutons)
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  // Variantes de couleur
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600
      text-white
      hover:from-blue-700 hover:to-purple-700
      focus:ring-blue-500
      shadow-lg shadow-blue-500/25
    `,
    secondary: `
      bg-zinc-900 text-white
      hover:bg-zinc-800
      focus: ring-zinc-500
    `,
    outline: `
      border-2 border-zinc-300
      text-zinc-700
      hover:border-zinc-400 hover:bg-zinc-50
      focus: ring-zinc-500
    `,
    ghost: `
      text-zinc-600
      hover:text-zinc-900 hover:bg-zinc-100
      focus:ring-zinc-500
    `,
  };
  
  // Tailles
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-base gap-2",
    lg: "px-7 py-3.5 text-lg gap-2. 5",
  };
  
  // Combine toutes les classes
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  // =========================================================================
  // CONTENU : Texte ou spinner de chargement
  // =========================================================================
  const content = loading ? (
    <>
      {/* Spinner de chargement */}
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <span>Chargement...</span>
    </>
  ) : (
    children
  );
  
  // =========================================================================
  // RENDU : Lien ou bouton selon les props
  // =========================================================================
  
  // Si href est défini, on rend un Link (navigation)
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }
  
  // Sinon, on rend un bouton classique
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {content}
    </button>
  );
}