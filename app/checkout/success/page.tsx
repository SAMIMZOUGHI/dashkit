// =============================================================================
// FICHIER : app/checkout/success/page.tsx
// RÔLE : Page de confirmation après paiement réussi
// CRITICITÉ : ⚠️ HAUTE - Dernière étape du tunnel de vente
// =============================================================================

"use client";

import { useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  CheckCircle2, 
  Download, 
  Home, 
  Mail, 
  Package,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useCart } from "@/store/cart";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const clearCart = useCart((state) => state.clearCart);

  // Vider le panier après achat réussi
  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 grain-overlay">
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-12 text-center"
        >
          {/* Icône de succès animée */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200, 
              damping: 15 
            }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-600/20 to-purple-600/20 border-2 border-green-500/30 mb-8 relative"
          >
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            
            {/* Cercles qui pulsent */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-green-400"
            />
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-full border-2 border-green-400"
            />
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-4"
          >
            🎉 Paiement réussi !
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Merci pour votre achat ! Votre commande a été confirmée.
          </motion.p>

          {/* ID de session (si disponible) */}
          {sessionId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8"
            >
              <span>Commande #{sessionId.slice(-8).toUpperCase()}</span>
            </motion.div>
          )}

          {/* Carte d'information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-2xl p-8 mb-8 text-left"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Prochaines étapes
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email de confirmation envoyé</h4>
                  <p className="text-gray-400 text-sm">
                    Vérifiez votre boîte mail. Vous recevrez un lien de téléchargement dans quelques minutes.
                  </p>
                </div>
              </div>

              {/* Téléchargement */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-600/20 to-cyan-600/20 flex items-center justify-center">
                  <Download className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléchargement instantané</h4>
                  <p className="text-gray-400 text-sm">
                    Accédez immédiatement à votre template via le lien reçu par email.
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600/20 to-yellow-600/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Support inclus</h4>
                  <p className="text-gray-400 text-sm">
                    Besoin d'aide ? Contactez-nous à support@dashkit.online
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Retour accueil */}
            <Link
              href="/"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Voir d'autres templates */}
            <Link
              href="/products"
              className="flex items-center gap-2 px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold transition-all duration-300"
            >
              <Package className="w-5 h-5" />
              Voir d'autres templates
            </Link>
          </motion.div>

          {/* Note de bas */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-500"
          >
            Un problème avec votre commande ?{" "}
            <a
              href="mailto:support@dashkit.online"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Contactez-nous
            </a>
          </motion.p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Téléchargement instantané</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Garantie 14 jours</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
