// =============================================================================
// FICHIER :  lib/stripe.ts
// RÔLE : Configuration et initialisation de Stripe
// CRITICITÉ :  HAUTE - Gestion des paiements
// =============================================================================

import Stripe from "stripe";

// Vérification :  S'assurer que la clé secrète est définie
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY manquante !  Ajoute-la dans . env.local");
}

// Initialisation : Création de l'instance Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Helper : Formater le prix pour Stripe (centimes)
export function formatAmountForStripe(amount: number): number {
  return Math.round(amount);
}