// =============================================================================
// FICHIER : app/not-found.tsx
// RÔLE : Page 404 - Style dark premium
// CRITICITÉ : 🟡 MOYENNE - Améliore l'UX quand une page n'existe pas
// =============================================================================

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 grain-overlay">
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-12"
        >
          {/* Grand "404" animé */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 leading-none">
              404
            </h1>
          </motion.div>

          {/* Message principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Page introuvable
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-xl mx-auto"
          >
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Retour page précédente */}
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Page précédente
            </button>

            {/* Retour accueil */}
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-gray-500 mb-4">Pages populaires :</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="px-4 py-2 glass-card glass-card-hover rounded-xl text-sm hover:text-purple-400 transition-colors"
              >
                Templates
              </Link>
              <Link
                href="/#features"
                className="px-4 py-2 glass-card glass-card-hover rounded-xl text-sm hover:text-purple-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="px-4 py-2 glass-card glass-card-hover rounded-xl text-sm hover:text-purple-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/cart"
                className="px-4 py-2 glass-card glass-card-hover rounded-xl text-sm hover:text-purple-400 transition-colors"
              >
                Panier
              </Link>
            </div>
          </motion.div>

          {/* Illustration optionnelle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <Search className="w-16 h-16 text-gray-700 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
