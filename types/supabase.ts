// =============================================================================
// FICHIER : types/supabase.ts
// RÔLE : Types TypeScript pour Supabase
// =============================================================================

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
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
          images: ProductImages;
          features: ProductFeature[];
          tech_stack: string[] | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["products"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
      };
      customers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          stripe_customer_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["customers"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["customers"]["Insert"]>;
      };
      orders: {
        Row: {
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
        Insert: Omit<Database["public"]["Tables"]["orders"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["orders"]["Insert"]>;
      };
      order_items: {
        Row: {
          id: string;
          order_id: string | null;
          product_id: string | null;
          product_slug: string | null;
          product_name: string | null;
          price: number;
          quantity: number;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["order_items"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["order_items"]["Insert"]>;
      };
      downloads: {
        Row: {
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
        Insert: Omit<Database["public"]["Tables"]["downloads"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["downloads"]["Insert"]>;
      };
    };
  };
};

export type ProductImages = {
  thumbnail?: string;
  gallery?: string[];
};

export type ProductFeature = {
  icon: string;
  title: string;
  description: string;
};

// Types raccourcis
export type Product = Database["public"]["Tables"]["products"]["Row"];
export type Customer = Database["public"]["Tables"]["customers"]["Row"];
export type Order = Database["public"]["Tables"]["orders"]["Row"];
export type OrderItem = Database["public"]["Tables"]["order_items"]["Row"];
export type Download = Database["public"]["Tables"]["downloads"]["Row"];