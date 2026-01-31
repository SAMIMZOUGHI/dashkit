// =============================================================================
// FICHIER : app/products/page.tsx
// RÔLE : Catalogue des templates - Style dark premium
// =============================================================================

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import Image from "next/image";
import { Star, ArrowRight, Sparkles } from "lucide-react";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Premium Templates</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Templates Gallery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Explore a wide range of designs and try our free live demos.
            Professional dashboard templates, ready to deploy.
          </motion.p>
        </div>

        {/* Grille de produits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`} className="group block">
                <div className="spotlight-card glass-card glass-card-hover rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
                  
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-zinc-900">
                    {product.images.thumbnail ? (
                      <Image
                        src={product.images.thumbnail}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="w-16 h-16 text-purple-400/50" />
                        </div>
                      </>
                    )}

                    {/* Badge "New" si applicable */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-semibold z-10">
                      New
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-semibold group-hover:text-purple-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span>5.0</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Prix et CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold">
                          {product.price / 100}€
                        </span>
                        <span className="text-gray-500 text-sm ml-2">one-time</span>
                      </div>
                      <ArrowRight className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun produit */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Aucun template disponible pour le moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}
