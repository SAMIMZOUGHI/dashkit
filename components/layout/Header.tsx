// =============================================================================
// FICHIER : components/layout/Header.tsx
// RÔLE :  Barre de navigation principale du site
// CRITICITÉ : ⚠️ HAUTE - Présent sur toutes les pages
// UTILISÉ PAR : app/layout.tsx
// =============================================================================

"use client"; // Nécessaire car on utilise useState (état local)

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/store/cart";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// DONNÉES : Liens de navigation
// Facile à modifier :  ajoute/supprime des liens ici
// -----------------------------------------------------------------------------
const navLinks = [
  { href:  "/", label: "Accueil" },
  { href:  "/products", label: "Templates" },
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#faq", label: "FAQ" },
];

// -----------------------------------------------------------------------------
// COMPOSANT : Header
// -----------------------------------------------------------------------------
export function Header() {
  // État pour le menu mobile (ouvert/fermé)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Récupère le nombre d'articles dans le panier depuis le store Zustand
  const totalItems = useCart((state) => state.getTotalItems());

  return (
    // =========================================================================
    // HEADER : Barre fixe en haut de page
    // sticky = reste visible au scroll
    // backdrop-blur = effet de flou sur le fond
    // =========================================================================
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* =============================================================== */}
          {/* LOGO : Côté gauche */}
          {/* =============================================================== */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* =============================================================== */}
          {/* NAVIGATION DESKTOP : Liens au centre (cachés sur mobile) */}
          {/* =============================================================== */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* =============================================================== */}
          {/* ACTIONS : Côté droit (Panier + CTA) */}
          {/* =============================================================== */}
          <div className="flex items-center gap-4">
            {/* Bouton Panier */}
            <Link
              href="/cart"
              className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Voir le panier"
            >
              {/* Icône panier (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 . 955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              
              {/* Badge avec le nombre d'articles */}
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Bouton CTA principal (caché sur mobile) */}
            <div className="hidden sm:block">
              <Button href="/products" size="sm">
                Voir les templates
              </Button>
            </div>

            {/* ============================================================= */}
            {/* BOUTON MENU MOBILE : Hamburger (visible uniquement sur mobile) */}
            {/* ============================================================= */}
            <button
              type="button"
              className="md:hidden p-2 text-zinc-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? (
                // Icône X (fermer)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icône hamburger (ouvrir)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MENU MOBILE : Affiché quand mobileMenuOpen = true */}
        {/* ================================================================= */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)} // Ferme le menu au clic
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button href="/products" className="w-full">
                Voir les templates
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}