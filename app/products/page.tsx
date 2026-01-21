// =============================================================================
// FICHIER : app/products/page. tsx
// RÔLE :  Page listant tous les templates disponibles (URL:  /products)
// CRITICITÉ : ⚠️ HAUTE - Page principale du catalogue
// =============================================================================

import { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";

// -----------------------------------------------------------------------------
// MÉTADONNÉES SEO
// -----------------------------------------------------------------------------
export const metadata:  Metadata = {
  title:  "Nos Templates de Dashboard",
  description: 
    "Découvrez notre collection de templates de dashboard premium.  Design moderne, code TypeScript, documentation complète.",
  openGraph: {
    title: "Templates de Dashboard Premium | DashKit",
    description: 
      "Découvrez notre collection de templates de dashboard premium pour vos applications SaaS.",
  },
};

// -----------------------------------------------------------------------------
// COMPOSANT : Page Products
// -----------------------------------------------------------------------------
export default function ProductsPage() {
  // Récupère tous les produits depuis lib/products. ts
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* ================================================================= */}
      {/* EN-TÊTE DE PAGE */}
      {/* ================================================================= */}
      <section className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                <li>
                  <a href="/" className="hover:text-zinc-900 transition-colors">
                    Accueil
                  </a>
                </li>
                <li>/</li>
                <li className="text-zinc-900 font-medium">Templates</li>
              </ol>
            </nav>

            {/* Titre */}
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900">
              Nos Templates
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              Des templates de dashboard professionnels pour accélérer le 
              développement de votre application SaaS.
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-zinc-900">
                  {products. length}
                </span>
                <span className="text-zinc-500">Template(s)</span>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-zinc-500">Mises à jour incluses</span>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-zinc-500">Support inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* GRILLE DE PRODUITS */}
      {/* ================================================================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            // Message si aucun produit
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h2 className="text-xl font-semibold text-zinc-900">
                Aucun template disponible
              </h2>
              <p className="mt-2 text-zinc-600">
                Revenez bientôt pour découvrir nos nouveaux templates !
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION FAQ RAPIDE */}
      {/* ================================================================= */}
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📥</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">
                Comment ça marche ?
              </h3>
              <p className="text-sm text-zinc-600">
                Après l'achat, vous recevez un lien de téléchargement par email
                avec le code source complet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">
                Mises à jour incluses ?
              </h3>
              <p className="text-sm text-zinc-600">
                Oui !  Vous avez accès à toutes les futures mises à jour du
                template à vie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">
                Support technique ?
              </h3>
              <p className="text-sm text-zinc-600">
                6 mois de support par email inclus pour vous aider dans
                l'intégration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}