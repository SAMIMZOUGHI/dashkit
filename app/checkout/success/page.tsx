// =============================================================================
// FICHIER : app/checkout/success/page.tsx
// RÔLE : Page de confirmation après un paiement réussi
// =============================================================================

"use client";

import dynamic from "next/dynamic";

// Import dynamique SANS SSR pour éviter l'erreur useSearchParams
const SuccessContent = dynamic(
  () => import("./SuccessContent"),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <p className="text-zinc-600">Chargement...</p>
        </div>
      </div>
    ),
  }
);

export default function CheckoutSuccessPage() {
  return <SuccessContent />;
}