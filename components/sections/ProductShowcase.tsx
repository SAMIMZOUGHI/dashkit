// =============================================================================
// FICHIER : components/sections/ProductShowcase.tsx
// RÔLE : Showcase du produit avec image/mockup
// =============================================================================

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ProductShowcase() {
  const benefits = [
    "50+ composants UI prêts à l'emploi",
    "Mode sombre/clair automatique",
    "Responsive sur tous les appareils",
    "Graphiques et visualisations",
    "Documentation complète incluse",
    "Mises à jour à vie gratuites",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Lookze Pro Dashboard
            </h2>
            <p className="text-xl text-zinc-600 mb-8">
              Le template le plus complet du marché pour créer des dashboards Next.js professionnels.
              Parfait pour les SaaS, analytics, admin panels.
            </p>

            {/* Liste des bénéfices */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-zinc-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Prix et CTA */}
            <div className="flex items-center gap-6">
              <div>
                <div className="text-4xl font-bold text-zinc-900">49€</div>
                <div className="text-sm text-zinc-500">Paiement unique</div>
              </div>
              <Link
                href="/products/lookze-pro"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Acheter maintenant
              </Link>
            </div>
          </motion.div>

          {/* Colonne droite : Mockup/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Placeholder pour ton screenshot - Remplace par une vraie image */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center border-2 border-zinc-300">
              <p className="text-zinc-400 text-lg">
                [Screenshot de ton dashboard ici]
              </p>
            </div>

            {/* Badge flottant */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
              🔥 Best Seller
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
