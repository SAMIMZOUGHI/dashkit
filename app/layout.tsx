// =============================================================================
// FICHIER : app/layout.tsx
// RÔLE : Layout global du site - Style dark premium
// =============================================================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DashKit - Templates Dashboard Premium",
  description: "Templates Next.js professionnels pour dashboards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
