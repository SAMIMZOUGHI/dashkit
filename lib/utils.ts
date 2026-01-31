// =============================================================================
// FICHIER : lib/utils. ts
// RÔLE :  Fonctions utilitaires réutilisables dans toute l'application
// CRITICITÉ : 🟡 MOYENNE
// =============================================================================

/**
 * Combine des classes CSS conditionnellement
 * Utile avec Tailwind CSS pour appliquer des styles selon des conditions
 * 
 * @example
 * cn("base-class", isActive && "active-class", isDisabled && "opacity-50")
 * // Si isActive=true et isDisabled=false → "base-class active-class"
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

