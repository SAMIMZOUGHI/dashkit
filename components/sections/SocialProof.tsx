// =============================================================================
// FICHIER : components/sections/SocialProof.tsx
// RÔLE : Logos qui défilent en boucle (social proof)
// =============================================================================

"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  // Tu peux remplacer par de vrais logos plus tard
  const companies = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", 
    "Netflix", "Spotify", "Uber", "Airbnb", "Tesla"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-zinc-50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-zinc-500 mb-8">
          Utilisé par les meilleures équipes
        </p>

        {/* Défilement infini */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 items-center"
          >
            {/* Dupliquer pour l'effet de boucle infinie */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-zinc-300 whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
