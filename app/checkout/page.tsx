// =============================================================================
// FICHIER : app/checkout/page.tsx
// RÔLE : Page intermédiaire avant redirection Stripe
// =============================================================================

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";
import { motion } from "framer-motion";
import { Loader2, CreditCard, AlertCircle } from "lucide-react";

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const items = useCart((state) => state.items);
  const router = useRouter();

  useEffect(() => {
    // Vérifier que le panier n'est pas vide
    if (items.length === 0) {
      router.push("/cart");
      return;
    }

    // Appeler l'API pour créer la session Stripe
    const createCheckoutSession = async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: items.map((item) => ({
              slug: item.product.slug,
              quantity: item.quantity,
            })),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Erreur lors du paiement");
        }

        // Rediriger vers Stripe
        if (data.url) {
          window.location.href = data.url;
        }
      } catch (err) {
        console.error("Erreur checkout:", err);
        setError(err instanceof Error ? err.message : "Une erreur est survenue");
        setIsLoading(false);
      }
    };

    createCheckoutSession();
  }, [items, router]);

  // Affichage erreur
  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 grain-overlay">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-12 text-center max-w-md"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/20 border-2 border-red-500/30 mb-6">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Erreur de paiement</h2>
          <p className="text-gray-400 mb-8">{error}</p>
          <button
            onClick={() => router.push("/cart")}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Retour au panier
          </button>
        </motion.div>
      </div>
    );
  }

  // Affichage loading (composant de loading sera utilisé automatiquement)
  return null;
}
