// =============================================================================
// FICHIER : app/products/[slug]/AddToCartButton.tsx
// RÔLE : Bouton "Ajouter au panier" avec interaction Zustand
// CRITICITÉ : ⚠️ HAUTE - Composant de conversion
// =============================================================================
//
// 🎓 LEÇON : "use client" directive
//
// Par défaut, les composants Next.js 14 sont des "Server Components"
// (exécutés côté serveur). Mais pour utiliser : 
// - useState, useEffect (hooks React)
// - Zustand, Redux (state management)
// - onClick, onChange (événements)
//
// On doit ajouter "use client" en haut du fichier pour en faire
// un "Client Component" (exécuté côté navigateur).
//
// =============================================================================

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import { useCart } from "@/store/cart";

// -----------------------------------------------------------------------------
// PROPS
// -----------------------------------------------------------------------------
interface AddToCartButtonProps {
  product: Product;
}

// -----------------------------------------------------------------------------
// COMPOSANT :  AddToCartButton
// -----------------------------------------------------------------------------
export function AddToCartButton({ product }:  AddToCartButtonProps) {
  // État local pour l'animation de confirmation
  const [isAdded, setIsAdded] = useState(false);
  
  // Hook de navigation Next.js
  const router = useRouter();
  
  // Fonction addItem depuis le store Zustand
  const addItem = useCart((state) => state.addItem);

  // -------------------------------------------------
  // HANDLER : Ajouter au panier
  // -------------------------------------------------
  const handleAddToCart = () => {
    // Ajoute le produit au panier (via Zustand)
    addItem(product);

    // Active l'animation de confirmation
    setIsAdded(true);

    // Après 2 secondes, redirige vers le panier
    setTimeout(() => {
      router.push("/cart");
    }, 1500);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdded}
      className={`
        flex-1 inline-flex items-center justify-center gap-2
        px-6 py-3 font-medium rounded-lg
        transition-all duration-300
        ${
          isAdded
            ? "bg-green-500 text-white cursor-default"
            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
        }
      `}
    >
      {isAdded ? (
        <>
          {/* Icône check */}
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
              d="M5 13l4 4L19 7"
            />
          </svg>
          Ajouté !  Redirection... 
        </>
      ) : (
        <>
          {/* Icône panier */}
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Ajouter au panier
        </>
      )}
    </button>
  );
}