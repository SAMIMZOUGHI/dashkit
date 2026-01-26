// =============================================================================
// FICHIER : app/cart/loading.tsx
// RÔLE : Loading de la page panier
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function CartLoading() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-12 w-64 bg-white/5 rounded-2xl mb-4 animate-pulse" />
          <div className="h-6 w-32 bg-white/5 rounded-xl animate-pulse" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Articles skeleton */}
          <div className="lg:col-span-2 space-y-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6"
              >
                {/* Image skeleton */}
                <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 flex-shrink-0 flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 text-purple-400/30 animate-pulse" />
                </div>

                {/* Content skeleton */}
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-white/5 rounded-lg w-3/4 animate-pulse" />
                  <div className="h-4 bg-white/5 rounded-lg w-full animate-pulse" />
                  <div className="h-8 bg-white/5 rounded-lg w-32 animate-pulse" />
                </div>

                {/* Delete button skeleton */}
                <div className="w-12 h-12 rounded-xl bg-white/5 animate-pulse" />
              </motion.div>
            ))}
          </div>

          {/* Récapitulatif skeleton */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-2xl p-6 h-fit"
          >
            <div className="h-8 w-40 bg-white/5 rounded-xl mb-6 animate-pulse" />
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
                <div className="h-4 w-16 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
                <div className="h-4 w-16 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between">
                  <div className="h-6 w-16 bg-white/5 rounded animate-pulse" />
                  <div className="h-6 w-24 bg-white/5 rounded animate-pulse" />
                </div>
              </div>
            </div>

            <div className="h-14 bg-white/5 rounded-2xl mb-4 animate-pulse" />
            <div className="h-14 bg-white/5 rounded-2xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
