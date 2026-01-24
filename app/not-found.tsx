import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🔍</div>

        <h1 className="text-3xl font-bold text-zinc-900 mb-2">
          Page introuvable
        </h1>

        <p className="text-zinc-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">Retour à l'accueil</Button>
          <Button variant="secondary" href="/products">
            Voir les produits
          </Button>
        </div>
      </div>
    </div>
  );
}