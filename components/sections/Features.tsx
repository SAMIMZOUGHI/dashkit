// =============================================================================
// FICHIER : components/sections/Features.tsx
// RÔLE : Grid de fonctionnalités avec effet glassmorphism
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Lock, Code2, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance extrême",
    description: "Optimisé pour des temps de chargement < 1s. Core Web Vitals parfaits.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Palette,
    title: "Design moderne",
    description: "Interface élégante avec mode sombre, glassmorphism et animations fluides.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Lock,
    title: "Sécurisé",
    description: "Authentification intégrée, protection CSRF, headers de sécurité.",
    color: "from-green-400 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Code propre",
    description: "TypeScript strict, composants réutilisables, documentation complète.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Parfait sur mobile, tablette et desktop. Design mobile-first.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "SEO optimisé",
    description: "Métadonnées complètes, sitemap, structured data, temps de chargement optimaux.",
    color: "from-cyan-400 to-blue-500",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4"
          >
            Tout ce dont vous avez besoin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600"
          >
            Un template complet, prêt à l'emploi
          </motion.p>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Icône avec gradient */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
