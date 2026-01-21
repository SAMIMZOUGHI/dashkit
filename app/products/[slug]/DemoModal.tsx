// =============================================================================
// FICHIER : app/products/[slug]/DemoModal.tsx
// RÔLE : Modal affichant la démo live du dashboard Looker
// CRITICITÉ : 🟡 MOYENNE - Composant de démonstration
// =============================================================================

"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";

// -----------------------------------------------------------------------------
// PROPS
// -----------------------------------------------------------------------------
interface DemoModalProps {
  productName: string;
  // URL de l'iframe Looker (ou autre)
  demoUrl?:  string;
}

// -----------------------------------------------------------------------------
// COMPOSANT : DemoModal
// -----------------------------------------------------------------------------
export function DemoModal({ productName, demoUrl }:  DemoModalProps) {
  // État pour contrôler l'ouverture du modal
  const [isOpen, setIsOpen] = useState(false);
  
  // État pour le chargement de l'iframe
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* ================================================================= */}
      {/* BOUTON :  Ouvrir la démo */}
      {/* ================================================================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-zinc-300 text-zinc-700 font-medium rounded-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
      >
        {/* Icône play */}
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
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Tester la démo live
      </button>

      {/* ================================================================= */}
      {/* MODAL : Affiche l'iframe de démo */}
      {/* ================================================================= */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsLoading(true); // Reset loading state pour la prochaine ouverture
        }}
        title={`Démo - ${productName}`}
        size="full"
      >
        <div className="relative">
          {/* Indicateur de chargement */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 rounded-lg">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-zinc-600">Chargement du dashboard...</p>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* IFRAME : Dashboard Looker intégré */}
          {/* ============================================================= */}
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/543a505c-2ab4-4ff4-a0e6-c50f374a8e4a/page/6BShF"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            onLoad={() => setIsLoading(false)}
            className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}
          />

          {/* Note sous l'iframe */}
          <p className="mt-4 text-sm text-zinc-500 text-center">
            💡 Ceci est une démo interactive. Explorez les différentes sections du dashboard ! 
          </p>
        </div>
      </Modal>
    </>
  );
}