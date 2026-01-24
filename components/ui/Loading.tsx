// =============================================================================
// FICHIER : components/ui/Loading.tsx
// RÔLE : Composants de chargement réutilisables
// =============================================================================

// Spinner simple
export function Spinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin`}
    />
  );
}

// Loading avec texte
export function LoadingState({ message = "Chargement..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Spinner size="lg" />
      <p className="mt-4 text-zinc-600">{message}</p>
    </div>
  );
}

// Skeleton pour les cartes produit
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden animate-pulse">
      <div className="aspect-video bg-zinc-200" />
      <div className="p-6">
        <div className="h-6 bg-zinc-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-zinc-200 rounded w-full mb-4" />
        <div className="h-4 bg-zinc-200 rounded w-1/2" />
      </div>
    </div>
  );
}

// Skeleton pour la grille de produits
export function ProductGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Skeleton pour la page produit
export function ProductPageSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-4 bg-zinc-200 rounded w-48 mb-8" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-video bg-zinc-200 rounded-2xl" />
            <div>
              <div className="h-8 bg-zinc-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-zinc-200 rounded w-full mb-2" />
              <div className="h-4 bg-zinc-200 rounded w-2/3 mb-6" />
              <div className="h-10 bg-zinc-200 rounded w-32 mb-8" />
              <div className="flex gap-4">
                <div className="h-12 bg-zinc-200 rounded flex-1" />
                <div className="h-12 bg-zinc-200 rounded flex-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Skeleton pour le panier
export function CartSkeleton() {
  return (
    <div className="animate-pulse">
      {[1, 2].map((i) => (
        <div key={i} className="flex gap-4 py-6 border-b border-zinc-200">
          <div className="w-24 h-24 bg-zinc-200 rounded-lg" />
          <div className="flex-1">
            <div className="h-5 bg-zinc-200 rounded w-1/2 mb-2" />
            <div className="h-4 bg-zinc-200 rounded w-3/4 mb-4" />
            <div className="h-6 bg-zinc-200 rounded w-20" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Page de chargement pleine page
export function FullPageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-zinc-600">Chargement en cours...</p>
      </div>
    </div>
  );
}