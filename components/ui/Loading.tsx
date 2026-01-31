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
