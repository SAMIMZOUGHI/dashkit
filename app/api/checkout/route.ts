import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

interface CartItem {
  slug: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body as { items: CartItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Le panier est vide" },
        { status: 400 }
      );
    }

    const lineItems = items.map((item) => {
      const product = getProductBySlug(item.slug);

      if (!product) {
        throw new Error(`Produit non trouvé :  ${item.slug}`);
      }

      return {
        price_data: {
          currency:  product.currency. toLowerCase(),
          product_data: {
            name:  product.name,
            description: product.shortDescription,
            metadata: {
              productId: product.id,
              slug: product.slug,
            },
          },
          unit_amount: product.price,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success? session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
      metadata: {
        productSlugs: items.map((item) => item.slug).join(","),
      },
      locale: "fr",
    });

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Erreur création session Stripe:", error);

    return NextResponse.json(
      {
        error: 
          error instanceof Error
            ? error.message
            :  "Erreur lors de la création du paiement",
      },
      { status: 500 }
    );
  }
}