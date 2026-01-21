// =============================================================================
// FICHIER : app/products/[slug]/page. tsx
// RÔLE :  Page de détail d'un produit (URL:  /products/lookze-pro)
// CRITICITÉ : ⚠️ HAUTE - Page de conversion (achat)
// MODIFIÉ :  Ajout du bouton démo intégré
// =============================================================================

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, formatPrice } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";
import { DemoModal } from "./DemoModal";

// -----------------------------------------------------------------------------
// GÉNÉRATION STATIQUE
// -----------------------------------------------------------------------------
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// -----------------------------------------------------------------------------
// MÉTADONNÉES SEO DYNAMIQUES
// -----------------------------------------------------------------------------
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produit non trouvé" };
  }

  return {
    title: product.seo. title,
    description: product. seo.description,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [product.images.thumbnail],
    },
  };
}

// -----------------------------------------------------------------------------
// COMPOSANT : Page détail produit
// -----------------------------------------------------------------------------
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ================================================================= */}
      {/* SECTION PRINCIPALE : Image + Infos */}
      {/* ================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-500">
              <li>
                <a href="/" className="hover:text-zinc-900 transition-colors">
                  Accueil
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/products" className="hover:text-zinc-900 transition-colors">
                  Templates
                </a>
              </li>
              <li>/</li>
              <li className="text-zinc-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* ============================================================= */}
            {/* COLONNE GAUCHE : Image / Preview */}
            {/* ============================================================= */}
            <div>
              {/* Image principale */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-7xl mb-4">📊</div>
                    <p className="text-xl font-medium">{product.name}</p>
                  </div>
                </div>
              </div>

              {/* Galerie miniatures */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[1, 2, 3]. map((index) => (
                  <div
                    key={index}
                    className="aspect-video bg-zinc-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm">Image {index}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ============================================================= */}
            {/* COLONNE DROITE : Informations */}
            {/* ============================================================= */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                ✨ Template Premium
              </div>

              {/* Nom */}
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                {product.name}
              </h1>

              {/* Description courte */}
              <p className="mt-4 text-lg text-zinc-600">
                {product.shortDescription}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Prix */}
              <div className="mt-8 p-6 bg-zinc-50 rounded-2xl">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-zinc-900">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <span className="text-zinc-500">TTC</span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                  Paiement unique · Accès à vie · Mises à jour incluses
                </p>

                {/* ========================================================= */}
                {/* BOUTONS D'ACTION :  Panier + Démo */}
                {/* ========================================================= */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  {/* Bouton Ajouter au panier */}
                  <AddToCartButton product={product} />

                  {/* Bouton Démo - NOUVEAU COMPOSANT */}
                  <DemoModal productName={product.name} />
                </div>
              </div>

              {/* Garanties */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 text-sm">Mises à jour</p>
                    <p className="text-xs text-zinc-500">À vie</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-. 552l1.562-1.562a4.006 4.006 0 001.789. 027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-. 08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c. 954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 text-sm">Support</p>
                    <p className="text-xs text-zinc-500">6 mois inclus</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 text-sm">Téléchargement</p>
                    <p className="text-xs text-zinc-500">Instantané</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 text-sm">Licence</p>
                    <p className="text-xs text-zinc-500">Usage commercial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION :  Fonctionnalités détaillées */}
      {/* ================================================================= */}
      <section className="py-16 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm: px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">
            Ce qui est inclus
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-xl"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-zinc-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION : Description longue */}
      {/* ================================================================= */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">
            Description
          </h2>

          <div className="prose prose-zinc max-w-none">
            {product.longDescription. split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace("# ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.replace("## ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-4 text-zinc-600">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (paragraph.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-zinc-600 mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}