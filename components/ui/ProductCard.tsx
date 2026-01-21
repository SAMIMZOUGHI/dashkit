// =============================================================================
// FICHIER : components/ui/ProductCard.tsx
// RÔLE :  Carte produit affichée dans la liste des produits
// CRITICITÉ : 🟡 MOYENNE - Composant réutilisable
// UTILISÉ PAR : app/products/page.tsx, components/sections/ProductPreview.tsx
// =============================================================================

import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/products";

// -----------------------------------------------------------------------------
// PROPS :  Paramètres du composant
// -----------------------------------------------------------------------------
interface ProductCardProps {
  product: Product;
}

// -----------------------------------------------------------------------------
// COMPOSANT :  ProductCard
// -----------------------------------------------------------------------------
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:border-zinc-300 hover:shadow-xl transition-all duration-300">
      {/* ================================================================= */}
      {/* IMAGE / PREVIEW */}
      {/* ================================================================= */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
          {/* Placeholder visuel - Remplace par Image quand tu auras les screenshots */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-5xl mb-2">📊</div>
              <p className="text-sm font-medium opacity-80">Aperçu</p>
            </div>
          </div>
          
          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Badge "Voir les détails" au hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-white text-zinc-900 rounded-full text-sm font-medium shadow-lg">
              Voir les détails →
            </span>
          </div>
        </div>
      </Link>

      {/* ================================================================= */}
      {/* CONTENU */}
      {/* ================================================================= */}
      <div className="p-6">
        {/* Technologies (badges) */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.technologies. slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Nom du produit */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description courte */}
        <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Prix et CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-zinc-900">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>
          
          <Link
            href={`/products/${product.slug}`}
            className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Détails
          </Link>
        </div>

        {/* Fonctionnalités rapides */}
        <div className="mt-4 pt-4 border-t border-zinc-100">
          <ul className="grid grid-cols-2 gap-2">
            {product.features.slice(0, 4).map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center gap-1. 5 text-xs text-zinc-500"
              >
                <svg 
                  className="w-3.5 h-3.5 text-green-500 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}