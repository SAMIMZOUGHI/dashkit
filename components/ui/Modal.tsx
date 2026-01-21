// =============================================================================
// FICHIER : components/ui/Modal.tsx
// RÔLE :  Composant modal (popup) réutilisable
// CRITICITÉ : 🟡 MOYENNE - Utilisé pour la démo et potentiellement ailleurs
// =============================================================================
//
// 🎓 LEÇON :  Qu'est-ce qu'un Modal ?
//
// Un modal est une fenêtre qui s'affiche par-dessus le contenu de la page. 
// Il bloque l'interaction avec le reste de la page jusqu'à sa fermeture.
//
// Éléments clés :
// - Overlay (fond sombre semi-transparent)
// - Contenu centré
// - Bouton de fermeture
// - Fermeture au clic sur l'overlay ou touche Escape
//
// =============================================================================

"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// PROPS
// -----------------------------------------------------------------------------
interface ModalProps {
  // Contrôle l'affichage du modal
  isOpen: boolean;
  
  // Fonction appelée pour fermer le modal
  onClose: () => void;
  
  // Titre du modal (optionnel)
  title?: string;
  
  // Contenu du modal
  children: React.ReactNode;
  
  // Taille du modal
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

// -----------------------------------------------------------------------------
// COMPOSANT : Modal
// -----------------------------------------------------------------------------
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
}: ModalProps) {
  // -------------------------------------------------
  // EFFET : Fermer avec la touche Escape
  // -------------------------------------------------
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Ajoute l'écouteur quand le modal est ouvert
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Empêche le scroll du body quand le modal est ouvert
      document.body.style.overflow = "hidden";
    }

    // Nettoyage :  retire l'écouteur et restaure le scroll
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style. overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Ne rien afficher si le modal est fermé
  if (!isOpen) return null;

  // Tailles du modal
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg:  "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-[95vw] max-h-[95vh]",
  };

  return (
    // =========================================================================
    // OVERLAY : Fond sombre qui couvre toute la page
    // =========================================================================
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose} // Ferme au clic sur l'overlay
    >
      {/* ===================================================================== */}
      {/* CONTENU DU MODAL */}
      {/* onClick stopPropagation empêche la fermeture au clic sur le contenu */}
      {/* ===================================================================== */}
      <div
        className={cn(
          "relative w-full bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200",
          sizes[size]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================================================================= */}
        {/* HEADER : Titre + Bouton fermer */}
        {/* ================================================================= */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-200">
          {title && (
            <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
          )}
          
          {/* Bouton fermer (X) */}
          <button
            onClick={onClose}
            className="ml-auto p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
            aria-label="Fermer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ================================================================= */}
        {/* BODY : Contenu du modal */}
        {/* ================================================================= */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}