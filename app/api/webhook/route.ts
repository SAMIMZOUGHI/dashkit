// =============================================================================
// FICHIER : app/api/webhook/route.ts
// RÔLE : Recevoir les événements Stripe et sauvegarder en DB
// =============================================================================

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { sendPurchaseEmail } from "@/lib/email";
import { createOrder, getProductBySlug } from "@/lib/db";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    console.error("❌ Webhook : Signature manquante");
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
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
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerEmail =
        session.customer_details?.email || session.customer_email;
      const customerName = session.customer_details?.name || undefined;

      console.log("✅ Paiement réussi !");
      console.log("   Email client :", customerEmail);

      const productSlugs = session.metadata?.productSlugs?.split(",") || [];

      // Prépare les items pour la commande
      const orderItems = [];

      for (const slug of productSlugs) {
        const product = await getProductBySlug(slug);

        if (product) {
          orderItems.push({
            productId: product.id,
            productSlug: product.slug,
            productName: product.name,
            price: product.price,
            quantity: 1,
          });

          // Envoie l'email
          if (customerEmail) {
            await sendPurchaseEmail({
              to: customerEmail,
              customerName: customerName,
              productName: product.name,
              downloadUrl: product.download_file || "",
              orderReference: session.id.slice(-8).toUpperCase(),
            });
            console.log(`   ✅ Email envoyé à ${customerEmail}`);
          }
        }
      }

      // Sauvegarde la commande en base
      if (customerEmail && orderItems.length > 0) {
        const order = await createOrder({
          stripeSessionId: session.id,
          customerEmail,
          customerName,
          totalAmount: session.amount_total || 0,
          currency: session.currency?.toUpperCase() || "EUR",
          items: orderItems,
        });

        if (order) {
          console.log("   💾 Commande sauvegardée :", order.id);
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