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

/**
 * Génère un délai (utile pour les animations ou les tests)
 * @param ms - Délai en millisecondes
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Tronque un texte avec des points de suspension
 * @param text - Texte à tronquer
 * @param maxLength - Longueur maximum
 */
export function truncate(text:  string, maxLength: number): string {
  if (text. length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}