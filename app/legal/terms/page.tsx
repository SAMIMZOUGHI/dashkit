// =============================================================================
// FILE: app/legal/terms/page.tsx
// ROLE: Terms of Service with clear license
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Check } from "lucide-react";
import { companyInfo, lastUpdated } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service | DashKit",
  description: "Terms and conditions for using DashKit templates. License agreement, usage rights and restrictions.",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <p className="text-gray-400 text-sm mt-1">Last updated: {lastUpdated.terms}</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms of Service constitute a legally binding agreement between you and{" "}
              <strong>{companyInfo.name}</strong> ("{companyInfo.legalName}") concerning your access to and use 
              of our dashboard templates and related services. By purchasing or using our products, 
              you agree to be bound by these Terms.
            </p>
          </div>

          {/* 1. Definitions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Definitions</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <div>
                <strong className="text-white">"Product"</strong> refers to any dashboard template, 
                component library, or digital asset sold by DashKit.
              </div>
              <div>
                <strong className="text-white">"License"</strong> refers to the usage rights granted 
                to you upon purchase.
              </div>
              <div>
                <strong className="text-white">"End Product"</strong> refers to your final application 
                or website using our templates.
              </div>
              <div>
                <strong className="text-white">"Client"</strong> refers to your customer for whom you 
                create an End Product.
              </div>
            </div>
          </section>

          {/* 2. License Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. License Agreement</h2>
            
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Standard License</h3>
              <p className="text-gray-400 mb-6">
                Included with all template purchases unless Extended License is selected.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Use in unlimited personal and client projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Modify and customize the code</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Create End Products for clients (charge for your service)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Use in SaaS applications (single product)</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500 font-semibold mb-3">Restrictions:</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>❌ Cannot resell, redistribute or sublicense the template itself</div>
                  <div>❌ Cannot create competing template/theme products</div>
                  <div>❌ Cannot share access with others who haven't purchased</div>
                  <div>❌ Cannot use in multiple SaaS products (requires Extended License)</div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Extended License</h3>
              <p className="text-gray-400 mb-6">
                For agencies and teams building multiple products. Contact us for pricing.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">All Standard License rights</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Use in multiple SaaS products</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Team access (up to 10 developers)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Priority support and updates</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Payments & Refunds */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Payments & Refunds</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Payment Processing:</strong> All payments are processed 
                securely through Stripe. We accept major credit cards and other payment methods.
              </p>
              <p>
                <strong className="text-white">Pricing:</strong> All prices are in EUR and include VAT 
                where applicable. Prices are subject to change without notice.
              </p>
              <p>
                <strong className="text-white">14-Day Money-Back Guarantee:</strong> If you're not 
                satisfied with your purchase, request a full refund within 14 days. No questions asked. 
                Contact {companyInfo.supportEmail} to initiate a refund.
              </p>
              <p>
                <strong className="text-white">Refund Exclusions:</strong> Refunds are not available 
                if you've violated these Terms or used the template in a live production environment.
              </p>
            </div>
          </section>

          {/* 4. Delivery & Access */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Product Delivery & Access</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                Upon successful payment, you'll receive an email with download instructions within 15 minutes. 
                Downloads are available for 30 days from purchase date.
              </p>
              <p>
                You also get access to our customer portal where you can re-download products and 
                access documentation at any time.
              </p>
              <p>
                <strong className="text-white">Updates:</strong> Lifetime access to updates for purchased 
                templates. You'll be notified by email when new versions are released.
              </p>
            </div>
          </section>

          {/* 5. Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Customer Support</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Standard License:</strong> 6 months of email support 
                included. We respond within 24-48 hours on business days.
              </p>
              <p>
                <strong className="text-white">Extended License:</strong> 12 months of priority support 
                with guaranteed 12-hour response time.
              </p>
              <p>
                Support covers installation help, bug fixes, and general usage questions. 
                It does NOT include custom development, modifications, or third-party integrations.
              </p>
            </div>
          </section>

          {/* 6. Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Intellectual Property Rights</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                The templates and all associated intellectual property rights remain the property of {companyInfo.name}. 
                Your license grants you usage rights but does NOT transfer ownership.
              </p>
              <p>
                You may NOT claim authorship of the original template or present it as your own work. 
                Attribution is not required in End Products but is appreciated.
              </p>
            </div>
          </section>

          {/* 7. Warranties & Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Warranties & Limitation of Liability</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                <strong className="text-white">As-Is Basis:</strong> Products are provided "as is" without 
                warranties of any kind. We make no guarantees about reliability, availability, or 
                suitability for your specific needs.
              </p>
              <p>
                <strong className="text-white">Limitation:</strong> Our liability is limited to the amount 
                you paid for the product. We are not liable for any indirect, incidental, or consequential damages.
              </p>
            </div>
          </section>

          {/* 8. Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Termination</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                We may terminate your license if you violate these Terms. Upon termination, 
                you must cease using the template and destroy all copies.
              </p>
              <p>
                Sections regarding intellectual property, warranties, and liability survive termination.
              </p>
            </div>
          </section>

          {/* 9. Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Changes to Terms</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                We reserve the right to modify these Terms at any time. Changes become effective 
                immediately upon posting. Continued use of our products constitutes acceptance of updated Terms.
              </p>
              <p>
                Material changes will be communicated via email to registered users.
              </p>
            </div>
          </section>

          {/* 10. Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10. Governing Law & Jurisdiction</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                These Terms are governed by French law. Any disputes shall be subject to the 
                exclusive jurisdiction of the courts of Paris, France.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Questions?</h2>
            <div className="glass-card rounded-2xl p-8 text-gray-400">
              <p className="mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong className="text-white">Email:</strong> {companyInfo.email}</p>
                <p><strong className="text-white">Address:</strong> {companyInfo.address}</p>
                <p><strong className="text-white">Phone:</strong> {companyInfo.phone}</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
