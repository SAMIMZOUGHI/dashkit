// =============================================================================
// FICHIER : lib/db.ts
// RÔLE : Fonctions d'accès à la base de données Supabase
// =============================================================================

import { supabaseAdmin } from "./supabase";

// =============================================================================
// TYPES
// =============================================================================

export type Product = {
  id: string;
  slug: string;
  name: string;
  short_description: string | null;
  long_description: string | null;
  price: number;
  currency: string;
  category: string | null;
  tags: string[] | null;
  download_file: string | null;
  demo_url: string | null;
  images: Record<string, unknown>;
  features: Record<string, unknown>[];
  tech_stack: string[] | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type Customer = {
  id: string;
  email: string;
  name: string | null;
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: string;
  customer_id: string | null;
  stripe_session_id: string | null;
  stripe_payment_intent: string | null;
  status: string;
  total_amount: number;
  currency: string;
  customer_email: string | null;
  customer_name: string | null;
  created_at: string;
  updated_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string | null;
  product_id: string | null;
  product_slug: string | null;
  product_name: string | null;
  price: number;
  quantity: number;
  created_at: string;
};

export type Download = {
  id: string;
  order_id: string | null;
  product_id: string | null;
  customer_email: string | null;
  download_token: string | null;
  download_count: number;
  max_downloads: number;
  expires_at: string | null;
  created_at: string;
};

// =============================================================================
// PRODUCTS
// =============================================================================

export async function getAllProductsFromDB(): Promise<Product[]> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return (data as Product[]) || [];
}

export async function getProductBySlugFromDB(slug: string): Promise<Product | null> {
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

  return data as Product;
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

  return data as Product;
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
    return existing as Customer;
  }

  // Sinon, crée un nouveau client
  const { data, error } = await supabaseAdmin
    .from("customers")
    .insert([{ email, name: name || null }])
    .select()
    .single();

  if (error) {
    console.error("Error creating customer:", error);
    return null;
  }

  return data as Customer;
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
    .insert([
      {
        customer_id: customer?.id || null,
        stripe_session_id: orderData.stripeSessionId,
        status: "completed",
        total_amount: orderData.totalAmount,
        currency: orderData.currency || "EUR",
        customer_email: orderData.customerEmail,
        customer_name: orderData.customerName || null,
      },
    ])
    .select()
    .single();

  if (orderError || !order) {
    console.error("Error creating order:", orderError);
    return null;
  }

  // Crée les lignes de commande
  const orderItems = orderData.items.map((item) => ({
    order_id: (order as Order).id,
    product_id: item.productId || null,
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

  return order as Order;
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

  return data as Order;
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

  return (data as Order[]) || [];
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

  const { error } = await supabaseAdmin.from("downloads").insert([
    {
      order_id: data.orderId,
      product_id: data.productId,
      customer_email: data.customerEmail,
      download_token: token,
      expires_at: expiresAt.toISOString(),
    },
  ]);

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

  const dl = download as Download;

  // Vérifie l'expiration
  if (dl.expires_at && new Date(dl.expires_at) < new Date()) {
    return { valid: false };
  }

  // Vérifie le nombre de téléchargements
  if (dl.download_count >= dl.max_downloads) {
    return { valid: false };
  }

  // Récupère le produit
  const product = dl.product_id ? await getProductById(dl.product_id) : null;

  return { valid: true, download: dl, product: product || undefined };
}

export async function incrementDownloadCount(token: string): Promise<void> {
  const { data: download } = await supabaseAdmin
    .from("downloads")
    .select("download_count")
    .eq("download_token", token)
    .single();

  if (download) {
    await supabaseAdmin
      .from("downloads")
      .update({ download_count: (download.download_count as number) + 1 })
      .eq("download_token", token);
  }
}