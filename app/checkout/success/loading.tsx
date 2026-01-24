import { Spinner } from "@/components/ui/Loading";

export default function SuccessLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-zinc-600">Vérification du paiement...</p>
      </div>
    </div>
  );
}