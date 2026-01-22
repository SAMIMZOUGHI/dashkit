// =============================================================================
// FICHIER : app/api/webhook/route.ts
// RÔLE :  Recevoir les événements Stripe (paiement réussi, etc.)
// CRITICITÉ : ⚠️ CRITIQUE - Livraison automatique des produits
// =============================================================================
//
// 🎓 LEÇON : Qu'est-ce qu'un Webhook ?
//
// Un webhook est une URL que Stripe appelle automatiquement quand
// quelque chose se passe (paiement réussi, remboursement, etc.)
//
// C'est plus fiable que de se fier à la page de succès car :
// - Le client peut fermer son navigateur avant d'atteindre /success
// - Le webhook est appelé directement par Stripe, côté serveur
//
// =============================================================================

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";
import Stripe from "stripe";

// -----------------------------------------------------------------------------
// CONFIG : Désactiver le bodyParser pour recevoir le raw body
// Stripe a besoin du body brut pour vérifier la signature
// -----------------------------------------------------------------------------
export const runtime = "nodejs";

// -----------------------------------------------------------------------------
// POST : Recevoir les événements Stripe
// -----------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  // Vérifier que la signature est présente
  if (!signature) {
    console.error("❌ Webhook :  Signature manquante");
    return NextResponse.json(
      { error: "Signature manquante" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  // Vérifier la signature du webhook
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("❌ Webhook : Signature invalide", err);
    return NextResponse.json(
      { error: "Signature invalide" },
      { status: 400 }
    );
  }

  // Traiter les différents types d'événements
  switch (event.type) {
    // =========================================================================
    // ÉVÉNEMENT :  Paiement réussi
    // =========================================================================
    case "checkout.session.completed":  {
      const session = event. data.object as Stripe. Checkout.Session;

      console.log("✅ Paiement réussi !");
      console.log("   Email client :", session.customer_email);
      console.log("   Montant :", session.amount_total);
      console.log("   Session ID :", session.id);

      // Récupérer les produits achetés
      const productSlugs = session.metadata?. productSlugs?. split(",") || [];

      // Pour chaque produit, on pourrait envoyer un email
      // (On implémentera l'envoi d'email dans la Phase 6)
      for (const slug of productSlugs) {
        const product = getProductBySlug(slug);
        if (product) {
          console.log(`   📦 Produit :  ${product.name}`);
          console.log(`   📥 Fichier : ${product.downloadFile}`);

          // TODO Phase 6 : Envoyer l'email avec le lien de téléchargement
          // await sendDownloadEmail({
          //   to: session.customer_email,
          //   productName: product.name,
          //   downloadUrl: product.downloadFile,
          // });
        }
      }

      break;
    }

    // =========================================================================
    // ÉVÉNEMENT : Paiement échoué
    // =========================================================================
    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("⏰ Session expirée :", session.id);
      break;
    }

    // =========================================================================
    // AUTRES ÉVÉNEMENTS
    // =========================================================================
    default: 
      console.log(`ℹ️ Événement non géré : ${event.type}`);
  }

  // Toujours retourner 200 pour confirmer la réception
  return NextResponse. json({ received: true });
}