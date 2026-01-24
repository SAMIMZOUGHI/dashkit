// =============================================================================
// FICHIER : app/api/webhook/route.ts
// RÔLE : Recevoir les événements Stripe et envoyer les emails
// =============================================================================

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";
import { sendPurchaseEmail } from "@/lib/email";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    console.error("❌ Webhook : Signature manquante");
    return NextResponse.json(
      { error: "Signature manquante" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

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

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("✅ Paiement réussi !");
      console.log("   Email client :", session.customer_email);
      console.log("   Session ID :", session.id);

      // Récupérer les produits achetés
      const productSlugs = session.metadata?.productSlugs?.split(",") || [];

      // Envoyer un email pour chaque produit
      for (const slug of productSlugs) {
        const product = getProductBySlug(slug);
        
        if (product && session.customer_email) {
          console.log(`   📦 Envoi email pour : ${product.name}`);

          await sendPurchaseEmail({
            to: session.customer_email,
            productName: product.name,
            downloadUrl: product.downloadFile,
            orderReference: session.id.slice(-8).toUpperCase(),
          });
        }
      }

      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("⏰ Session expirée :", session.id);
      break;
    }

    default:
      console.log(`ℹ️ Événement non géré : ${event.type}`);
  }

  return NextResponse.json({ received: true });
}