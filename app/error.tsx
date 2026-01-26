// =============================================================================
// FICHIER : app/error.tsx
// RÔLE : Page d'erreur globale - Style dark premium
// CRITICITÉ : ⚠️ HAUTE - Gère toutes les erreurs de l'application
// =============================================================================

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur dans un service de monitoring (Sentry, etc.)
    console.error("Error caught by error.tsx:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 grain-overlay">
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-12"
        >
          {/* Icône d'erreur animée */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600/20 to-orange-600/20 border-2 border-red-500/30 mb-8"
          >
            <AlertCircle className="w-10 h-10 text-red-400" />
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-4 text-white"
          >
            Oups ! Une erreur est survenue
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Quelque chose s'est mal passé. Ne vous inquiétez pas, nous travaillons dessus.
          </motion.p>

          {/* Message d'erreur (en dev uniquement) */}
          {process.env.NODE_ENV === "development" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-left"
            >
              <p className="text-sm font-mono text-red-400 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </motion.div>
          )}

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Bouton réessayer */}
            <button
              onClick={reset}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Réessayer
            </button>

            {/* Bouton retour accueil */}
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Info contact support */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-gray-500"
          >
            Si le problème persiste,{" "}
            <a
              href="mailto:support@dashkit.online"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              contactez le support
            </a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
