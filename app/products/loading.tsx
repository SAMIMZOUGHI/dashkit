import { ProductGridSkeleton } from "@/components/ui/Loading";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <section className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-8 bg-zinc-200 rounded w-48 mb-4 animate-pulse" />
          <div className="h-4 bg-zinc-200 rounded w-96 animate-pulse" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGridSkeleton count={6} />
        </div>
      </section>
    </div>
  );
}