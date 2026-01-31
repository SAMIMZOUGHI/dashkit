// =============================================================================
// FICHIER : app/products/[slug]/demo/page.tsx
// RÔLE : Page de démo d'un produit avec iframe intégrée
// =============================================================================

"use client";

import { use, useMemo } from "react";
import { notFound, useRouter } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const router = useRouter();

  if (!product) {
    notFound();
  }

  // Extraire l'URL de l'iframe
  const iframeSrc = useMemo(() => {
    if (!product.demoIframe) return null;
    const match = product.demoIframe.match(/src="([^"]+)"/);
    return match ? match[1] : null;
  }, [product.demoIframe]);

  // Si pas d'iframe de démo, rediriger vers l'URL externe
  if (!product.demoIframe && product.demoUrl) {
    if (typeof window !== "undefined") {
      window.location.href = product.demoUrl;
    }
    return null;
  }

  if (!product.demoIframe || !iframeSrc) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Demo not available</h1>
          <Link
            href={`/products/${slug}`}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to product page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="relative bg-black text-white min-h-screen pt-20 grain-overlay">
      {/* Header avec bouton retour */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/products/${slug}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to product</span>
            </Link>
            <h1 className="text-lg font-semibold text-white">
              {product.name} - Live Demo
            </h1>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </motion.div>

      {/* Iframe container - Responsive */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-full mt-20 px-4 pb-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Aspect ratio container for responsive iframe */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900" style={{ paddingBottom: "73.25%" }}>
            <iframe
              src={iframeSrc}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating action button - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <Link
          href={`/products/${slug}`}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </motion.div>
    </main>
  );
}
