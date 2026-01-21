// =============================================================================
// FICHIER :  app/cart/page.tsx
// RÔLE : Page du panier d'achat (URL:  /cart)
// CRITICITÉ : ⚠️ HAUTE - Étape clé du tunnel de vente
// =============================================================================

"use client";

import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/products";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// -----------------------------------------------------------------------------
// COMPOSANT : Page Panier
// -----------------------------------------------------------------------------
export default function CartPage() {
  // Récupère les données du panier depuis Zustand
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const clearCart = useCart((state) => state.clearCart);
  const getTotalPrice = useCart((state) => state.getTotalPrice);

  // Calcul du total
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* ================================================================= */}
      {/* EN-TÊTE DE PAGE */}
      {/* ================================================================= */}
      <section className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-zinc-900 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li className="text-zinc-900 font-medium">Panier</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-zinc-900">Votre panier</h1>
        </div>
      </section>

      {/* ================================================================= */}
      {/* CONTENU DU PANIER */}
      {/* ================================================================= */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            // -----------------------------------------------------------------
            // PANIER VIDE
            // -----------------------------------------------------------------
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-. 63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
                Votre panier est vide
              </h2>
              <p className="text-zinc-600 mb-8">
                Découvrez nos templates de dashboard premium
              </p>
              <Button href="/products">Voir les templates</Button>
            </div>
          ) : (
            // -----------------------------------------------------------------
            // PANIER AVEC ARTICLES
            // -----------------------------------------------------------------
            <div className="grid lg: grid-cols-3 gap-12">
              {/* Liste des articles */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-6 p-6 bg-white rounded-2xl border border-zinc-200"
                  >
                    {/* Image */}
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">📊</span>
                    </div>

                    {/* Infos */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-zinc-900">
                            {item.product. name}
                          </h3>
                          <p className="text-sm text-zinc-500 mt-1">
                            {item.product.shortDescription}
                          </p>

                          {/* Technologies */}
                          <div className="flex gap-2 mt-3">
                            {item. product.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Prix */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-zinc-900">
                            {formatPrice(item.product.price, item.product.currency)}
                          </p>
                          <p className="text-xs text-zinc-500">
                            Quantité: {item.quantity}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="text-sm text-blue-600 hover:text-blue-700"
                        >
                          Voir les détails
                        </Link>
                        <button
                          onClick={() => removeItem(item. product.id)}
                          className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Bouton vider le panier */}
                <button
                  onClick={clearCart}
                  className="text-sm text-zinc-500 hover:text-zinc-700 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Vider le panier
                </button>
              </div>

              {/* ============================================================= */}
              {/* RÉCAPITULATIF ET PAIEMENT */}
              {/* ============================================================= */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-zinc-200 p-6 sticky top-24">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-6">
                    Récapitulatif
                  </h2>

                  {/* Lignes de détail */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Sous-total</span>
                      <span className="text-zinc-900">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">TVA incluse</span>
                      <span className="text-zinc-900">
                        {formatPrice(totalPrice * 0.2)}
                      </span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-zinc-200">
                    <span className="text-lg font-semibold text-zinc-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-zinc-900">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  {/* Bouton checkout */}
                  <Button href="/checkout" className="w-full mt-6" size="lg">
                    Procéder au paiement
                  </Button>

                  {/* Garanties */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2. 166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Paiement sécurisé SSL
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Téléchargement instantané
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Support inclus
                    </div>
                  </div>

                  {/* Moyens de paiement */}
                  <div className="mt-6 pt-6 border-t border-zinc-200">
                    <p className="text-xs text-zinc-500 text-center mb-3">
                      Moyens de paiement acceptés
                    </p>
                    <div className="flex justify-center gap-2">
                      <div className="w-10 h-6 bg-zinc-100 rounded flex items-center justify-center text-xs font-bold text-zinc-600">
                        VISA
                      </div>
                      <div className="w-10 h-6 bg-zinc-100 rounded flex items-center justify-center text-xs font-bold text-zinc-600">
                        MC
                      </div>
                      <div className="w-10 h-6 bg-zinc-100 rounded flex items-center justify-center text-xs font-bold text-zinc-600">
                        AMEX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}