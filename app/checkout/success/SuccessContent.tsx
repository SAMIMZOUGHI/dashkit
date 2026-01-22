"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/Button";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center max-w-lg mx-auto px-4">
        {/* Icône de succès */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-zinc-900 mb-4">
          Merci pour votre achat !  🎉
        </h1>

        <p className="text-lg text-zinc-600 mb-8">
          Votre paiement a été effectué avec succès. Vous allez recevoir un
          email de confirmation avec votre lien de téléchargement.
        </p>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-8 text-left">
          <h2 className="font-semibold text-zinc-900 mb-4">
            Prochaines étapes :
          </h2>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                1
              </span>
              <span className="text-zinc-600">
                Vérifiez votre boîte email (et les spams)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                2
              </span>
              <span className="text-zinc-600">
                Cliquez sur le lien de téléchargement
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                3
              </span>
              <span className="text-zinc-600">
                Décompressez et suivez le guide
              </span>
            </li>
          </ol>
        </div>

        {sessionId && (
          <p className="text-sm text-zinc-500 mb-8">
            Référence :  {sessionId. slice(-8).toUpperCase()}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/products" variant="outline">
            Voir d&apos;autres templates
          </Button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Un problème ? {" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contactez-nous
          </Link>
        </p>
      </div>
    </div>
  );
}