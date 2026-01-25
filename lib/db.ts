// =============================================================================
// FICHIER : lib/db.ts
// RÔLE : Fonctions d'accès à la base de données Supabase
// =============================================================================

import { supabaseAdmin } from "./supabase";
import { Product, Order, OrderItem, Customer } from "@/types/supabase";

// =============================================================================
// PRODUCTS
// =============================================================================

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data || [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data;
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data;
}

// =============================================================================
// CUSTOMERS
// =============================================================================

export async function getOrCreateCustomer(
  email: string,
  name?: string
): Promise<Customer | null> {
  // Cherche d'abord si le client existe
  const { data: existing } = await supabaseAdmin
    .from("customers")
    .select("*")
    .eq("email", email)
    .single();

  if (existing) {
    return existing;
  }

  // Sinon, crée un nouveau client
  const { data, error } = await supabaseAdmin
    .from("customers")
    .insert({ email, name })
    .select()
    .single();

  if (error) {
    console.error("Error creating customer:", error);
    return null;
  }

  return data;
}

// =============================================================================
// ORDERS
// =============================================================================

export async function createOrder(orderData: {
  stripeSessionId: string;
  customerEmail: string;
  customerName?: string;
  totalAmount: number;
  currency?: string;
  items: {
    productId?: string;
    productSlug: string;
    productName: string;
    price: number;
    quantity: number;
  }[];
}): Promise<Order | null> {
  // Crée ou récupère le client
  const customer = await getOrCreateCustomer(
    orderData.customerEmail,
    orderData.customerName
  );

  // Crée la commande
  const { data: order, error: orderError } = await supabaseAdmin
    .from("orders")
    .insert({
      customer_id: customer?.id,
      stripe_session_id: orderData.stripeSessionId,
      status: "completed",
      total_amount: orderData.totalAmount,
      currency: orderData.currency || "EUR",
      customer_email: orderData.customerEmail,
      customer_name: orderData.customerName,
    })
    .select()
    .single();

  if (orderError || !order) {
    console.error("Error creating order:", orderError);
    return null;
  }

  // Crée les lignes de commande
  const orderItems = orderData.items.map((item) => ({
    order_id: order.id,
    product_id: item.productId,
    product_slug: item.productSlug,
    product_name: item.productName,
    price: item.price,
    quantity: item.quantity,
  }));

  const { error: itemsError } = await supabaseAdmin
    .from("order_items")
    .insert(orderItems);

  if (itemsError) {
    console.error("Error creating order items:", itemsError);
  }

  return order;
}

export async function getOrderByStripeSession(
  sessionId: string
): Promise<Order | null> {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("stripe_session_id", sessionId)
    .single();

  if (error) {
    console.error("Error fetching order:", error);
    return null;
  }

  return data;
}

export async function getOrdersByEmail(email: string): Promise<Order[]> {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("customer_email", email)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    return [];
  }

  return data || [];
}

// =============================================================================
// DOWNLOADS
// =============================================================================

export async function createDownloadToken(data: {
  orderId: string;
  productId: string;
  customerEmail: string;
  expiresInDays?: number;
}): Promise<string | null> {
  const token = crypto.randomUUID();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + (data.expiresInDays || 7));

  const { error } = await supabaseAdmin.from("downloads").insert({
    order_id: data.orderId,
    product_id: data.productId,
    customer_email: data.customerEmail,
    download_token: token,
    expires_at: expiresAt.toISOString(),
  });

  if (error) {
    console.error("Error creating download token:", error);
    return null;
  }

  return token;
}

export async function validateDownloadToken(token: string): Promise<{
  valid: boolean;
  download?: Download;
  product?: Product;
}> {
  const { data: download, error } = await supabaseAdmin
    .from("downloads")
    .select("*")
    .eq("download_token", token)
    .single();

  if (error || !download) {
    return { valid: false };
  }

  // Vérifie l'expiration
  if (download.expires_at && new Date(download.expires_at) < new Date()) {
    return { valid: false };
  }

  // Vérifie le nombre de téléchargements
  if (download.download_count >= download.max_downloads) {
    return { valid: false };
  }

  // Récupère le produit
  const product = download.product_id
    ? await getProductById(download.product_id)
    : null;

  return { valid: true, download, product: product || undefined };
}

export async function incrementDownloadCount(token: string): Promise<void> {
  await supabaseAdmin.rpc("increment_download_count", { token_param: token });
}

// Type pour Download
type Download = Database["public"]["Tables"]["downloads"]["Row"];
import { Database } from "@/types/supabase";