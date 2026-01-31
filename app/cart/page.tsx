// =============================================================================
// FICHIER : app/cart/page.tsx
// RÔLE : Page panier - Style dark premium
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { useCart } from "@/store/cart";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const getTotalPrice = useCart((state) => state.getTotalPrice());

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Your cart</h1>
          <p className="text-xl text-gray-400">
            {items.length} {items.length > 1 ? "items" : "item"}
          </p>
        </motion.div>

        {items.length === 0 ? (
          /* Panier vide */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="glass-card rounded-3xl p-16 max-w-2xl mx-auto">
              <ShoppingBag className="w-20 h-20 text-gray-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">
                Discover our premium templates and start building now
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                View templates
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Cart with items */
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* List of items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-6"
                >
                  {/* Image */}
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40 flex-shrink-0" />

                  {/* Infos */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.product.shortDescription}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold">
                        {formatPrice(item.product.price, item.product.currency)}
                      </span>
                      <span className="text-gray-500">x {item.quantity}</span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-3 hover:bg-red-500/20 rounded-xl transition-colors text-red-400"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-6">Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>{formatPrice(getTotalPrice, "EUR")}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>VAT (20%)</span>
                    <span>{formatPrice(getTotalPrice * 0.2, "EUR")}</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span>{formatPrice(getTotalPrice, "EUR")}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mb-4"
                >
                  Proceed to checkout
                </Link>

                <Link
                  href="/products"
                  className="block w-full py-4 glass-card glass-card-hover rounded-2xl font-semibold text-center transition-all duration-300"
                >
                  Continue shopping
                </Link>

                {/* Guarantees */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>100% secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Instant download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>14-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
