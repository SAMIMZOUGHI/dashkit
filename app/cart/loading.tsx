import { CartSkeleton } from "@/components/ui/Loading";

export default function CartLoading() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <section className="bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-8 bg-zinc-200 rounded w-40 animate-pulse" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartSkeleton />
            </div>
            <div>
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 animate-pulse">
                <div className="h-6 bg-zinc-200 rounded w-32 mb-6" />
                <div className="space-y-3">
                  <div className="h-4 bg-zinc-200 rounded w-full" />
                  <div className="h-4 bg-zinc-200 rounded w-3/4" />
                  <div className="h-4 bg-zinc-200 rounded w-1/2" />
                </div>
                <div className="h-12 bg-zinc-200 rounded w-full mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}