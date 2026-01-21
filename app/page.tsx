// =============================================================================
// FICHIER :  app/page.tsx
// RÔLE : Page d'accueil temporaire pour tester la Phase 1
// =============================================================================

import { getAllProducts, formatPrice } from "@/lib/products";

export default function Home() {
  // Récupère tous les produits
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <h1 className="text-3xl font-bold mb-8">🚀 DashKit - Test Phase 1</h1>

      {/* Affiche les produits pour vérifier que tout fonctionne */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Produits chargés :</h2>

        {products.map((product) => (
          <div key={product.id} className="border-b py-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.shortDescription}</p>
            <p className="text-green-600 font-bold">
              {formatPrice(product. price, product.currency)}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-green-600 font-medium">
        ✅ Si tu vois le produit ci-dessus, la Phase 1 fonctionne !
      </p>
    </div>
  );
}