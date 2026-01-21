// =============================================================================
// FICHIER : store/cart.ts
// RÔLE :  Gestion globale du panier avec Zustand
// CRITICITÉ : ⚠️ HAUTE - Cœur de la logique e-commerce
// =============================================================================

"use client"; // Nécessaire car Zustand utilise le navigateur (localStorage)

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem, CartStore } from "@/types";

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      // État initial :  panier vide
      items: [],

      // Ajouter un produit au panier
      addItem: (product:  Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          // Produit déjà dans le panier → augmenter quantité
          set({
            items: currentItems.map((item) =>
              item.product.id === product.id
                ? { ... item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // Nouveau produit → ajouter au panier
          set({
            items: [... currentItems, { product, quantity:  1 }],
          });
        }
      },

      // Retirer un produit du panier
      removeItem: (productId: string) => {
        set({
          items: get().items.filter((item) => item.product.id !== productId),
        });
      },

      // Vider le panier (après achat)
      clearCart: () => {
        set({ items: [] });
      },

      // Calculer le prix total
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item. quantity,
          0
        );
      },

      // Compter les articles
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "dashkit-cart", // Clé localStorage
    }
  )
);