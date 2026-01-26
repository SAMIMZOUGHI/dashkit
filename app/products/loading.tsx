// =============================================================================
// FICHIER : app/products/loading.tsx
// RÔLE : Loading spécifique pour la page produits
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="inline-block h-8 w-32 bg-white/5 rounded-full mb-6 animate-pulse" />
          <div className="h-16 w-96 bg-white/5 rounded-2xl mb-6 mx-auto animate-pulse" />
          <div className="h-8 w-64 bg-white/5 rounded-xl mx-auto animate-pulse" />
        </div>

        {/* Grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              {/* Image skeleton */}
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-purple-400/30 animate-pulse" />
              </div>
              
              {/* Content skeleton */}
              <div className="p-6 space-y-4">
                <div className="h-6 bg-white/5 rounded-lg animate-pulse" />
                <div className="h-4 bg-white/5 rounded-lg w-3/4 animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-white/5 rounded-full animate-pulse" />
                  <div className="h-6 w-16 bg-white/5 rounded-full animate-pulse" />
                </div>
                <div className="h-8 bg-white/5 rounded-lg animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
