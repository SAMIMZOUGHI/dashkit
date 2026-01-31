// =============================================================================
// FICHIER : types/index.ts
// RÔLE : Définit la structure de toutes les données de l'application
// CRITICITÉ : ⚠️ HAUTE - Utilisé partout dans l'application
// =============================================================================

// -----------------------------------------------------------------------------
// TYPE :  Product (Produit)
// UTILISÉ PAR : lib/products.ts, components/ProductCard.tsx, pages produits
// -----------------------------------------------------------------------------
export interface Product {
  // Identifiant unique du produit (ex: "lookze-pro")
  // Utilisé dans les URLs :  /products/lookze-pro
  id: string;

  // Slug pour les URLs SEO-friendly (généralement = id)
  slug: string;

  // Nom affiché du produit
  name: string;

  // Description courte (affichée dans les cartes produits)
  shortDescription: string;

  // Description longue (affichée sur la page détail)
  longDescription: string;

  // Prix en centimes (Stripe utilise les centimes)
  // Ex: 4900 = 49,00€
  price: number;

  // Devise (ISO 4217)
  currency: "EUR" | "USD";

  // Images du produit
  images: {
    thumbnail:  string;
    gallery: string[];
  };

  // URL de la démo live du dashboard
  demoUrl: string;

  // Code HTML de l'iframe pour la démo intégrée (optionnel)
  demoIframe?: string;

  // Fonctionnalités du template
  features: string[];

  // Technologies utilisées
  technologies: string[];

  // ID du produit dans Stripe
  stripePriceId: string;

  // Fichier à livrer après achat
  downloadFile: string;

  // Métadonnées SEO
  seo: {
    title: string;
    description:  string;
    keywords: string[];
  };
}

// -----------------------------------------------------------------------------
// TYPE : CartItem (Article dans le panier)
// UTILISÉ PAR : store/cart. ts, pages panier
// -----------------------------------------------------------------------------
export interface CartItem {
  product: Product;
  quantity: number;
}

// -----------------------------------------------------------------------------
// TYPE : CartStore (État du panier - Zustand)
// UTILISÉ PAR : store/cart. ts
// -----------------------------------------------------------------------------
export interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems:  () => number;
}