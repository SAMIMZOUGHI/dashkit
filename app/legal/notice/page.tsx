// =============================================================================
// FILE: app/legal/notice/page.tsx
// ROLE: Legal notice with company information
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import { companyInfo, lastUpdated } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal Notice | DashKit",
  description: "Legal information about DashKit. Company details, hosting information and editorial responsibility.",
  robots: "index, follow",
};

export default function LegalNoticePage() {
  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Legal Notice</h1>
            <p className="text-gray-400 text-sm mt-1">Last updated: {lastUpdated.legal}</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          
          {/* Company Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Company Information</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Company Name</p>
                <p className="text-xl font-semibold">{companyInfo.legalName}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Trade Name</p>
                <p className="text-xl font-semibold">{companyInfo.name}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Legal Form</p>
                <p className="text-xl font-semibold">SAS (Simplified Joint-Stock Company)</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Registered Office</p>
                <p className="text-xl font-semibold">{companyInfo.address}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 mb-1">SIRET Number</p>
                  <p className="font-semibold">{companyInfo.siret}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">VAT Number</p>
                  <p className="font-semibold">{companyInfo.vat}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Share Capital</p>
                <p className="font-semibold">10,000 EUR</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-purple-400 hover:text-purple-300">
                  {companyInfo.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Support</p>
                <a href={`mailto:${companyInfo.supportEmail}`} className="text-purple-400 hover:text-purple-300">
                  {companyInfo.supportEmail}
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <a href={`tel:${companyInfo.phone}`} className="text-purple-400 hover:text-purple-300">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </section>

          {/* Publication Director */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Publication Director</h2>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-gray-400 mb-2">Sami Mzoughi</p>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
          </section>

          {/* Hosting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Website Hosting</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Host Provider</p>
                <p className="font-semibold">Vercel Inc.</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Address</p>
                <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Website</p>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  vercel.com
                </a>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Intellectual Property</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                All content on this website (text, images, logos, icons, code) is the property 
                of {companyInfo.name} and is protected by intellectual property laws.
              </p>
              <p>
                Unauthorized reproduction, distribution, or use is strictly prohibited and 
                may result in legal action.
              </p>
              <p>
                The DashKit logo and brand name are registered trademarks of {companyInfo.legalName}.
              </p>
            </div>
          </section>

          {/* Credits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Website Credits</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <div>
                <p className="text-white font-semibold mb-2">Design & Development</p>
                <p>Sami Mzoughi</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Technologies</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Next.js 16</li>
                  <li>React 19</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Dispute Resolution</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Applicable Law:</strong> French Law
              </p>
              <p>
                <strong className="text-white">Jurisdiction:</strong> Courts of Paris, France
              </p>
              <p>
                <strong className="text-white">Mediation:</strong> In accordance with European 
                Directive 2013/11/EU, consumers can use the online dispute resolution platform: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-1">
                  ec.europa.eu/consumers/odr
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
