// =============================================================================
// FICHIER : app/products/[slug]/page.tsx
// RÔLE : Page détail d'un produit - FIX params async Next.js 15+
// =============================================================================

"use client";

import { use } from "react"; // ← Import React.use()
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { Check, Star, ExternalLink } from "lucide-react";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> // ← params est maintenant une Promise
}) {
  // =========================================================================
  // FIX Next.js 15+ : Unwrap params avec React.use()
  // =========================================================================
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const router = useRouter();
  const addItem = useCart((state) => state.addItem);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product);
    router.push("/cart");
  };

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-12"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">
            Templates
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne gauche : Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="mb-6">
              <ImageGallery
                images={product.images.gallery}
                productName={product.name}
              />
            </div>

            {/* Bouton démo */}
            <Link
              href={product.demoUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-4 glass-card glass-card-hover rounded-2xl font-semibold transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              See Live Demo
            </Link>
          </motion.div>

          {/* Colonne droite : Infos produit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Badge + Rating */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold">
                New Release
              </span>
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-gray-400">(127 reviews)</span>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

            {/* Description courte */}
            <p className="text-xl text-gray-400 mb-8">
              {product.shortDescription}
            </p>

            {/* Prix */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold">{product.price / 100}€</span>
                <span className="text-gray-400">one-time payment</span>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 animate-soft-glow"
              >
                Add to Cart
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Instant download after payment
              </p>
            </div>

            {/* What's Included */}
            <div className="glass-card rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies :</h3>
              <div className="flex flex-wrap gap-3">
                {product.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description longue */}
            <div className="mt-8 prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
