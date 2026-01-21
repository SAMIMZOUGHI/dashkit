// =============================================================================
// FICHIER : app/checkout/page.tsx
// RÔLE : Page intermédiaire qui redirige vers Stripe Checkout
// CRITICITÉ : ⚠️ HAUTE - Étape clé du tunnel de vente
// =============================================================================

"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const items = useCart((state) => state.items);
  const router = useRouter();

  useEffect(() => {
    // Si le panier est vide, rediriger vers /cart
    if (items.length === 0) {
      router.push("/cart");
      return;
    }

    // Appeler notre API pour créer la session Stripe
    const createCheckoutSession = async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: items.map((item) => ({
              slug: item.product.slug,
              quantity: item.quantity,
            })),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data. error || "Erreur lors du paiement");
        }

        // Rediriger vers Stripe Checkout
        if (data.url) {
          window.location.href = data. url;
        }
      } catch (err) {
        console.error("Erreur checkout:", err);
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
        setIsLoading(false);
      }
    };

    createCheckoutSession();
  }, [items, router]);

  // Affichage pendant le chargement
  if (isLoading && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h1 className="text-2xl font-semibold text-zinc-900 mb-2">
            Redirection vers le paiement...
          </h1>
          <p className="text-zinc-600">
            Vous allez être redirigé vers notre partenaire de paiement sécurisé.
          </p>
        </div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-red-600"
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
          </div>
          <h1 className="text-2xl font-semibold text-zinc-900 mb-2">
            Erreur de paiement
          </h1>
          <p className="text-zinc-600 mb-6">{error}</p>
          <button
            onClick={() => router.push("/cart")}
            className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Retour au panier
          </button>
        </div>
      </div>
    );
  }

  return null;
}