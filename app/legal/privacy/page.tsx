// =============================================================================
// FILE: app/legal/privacy/page.tsx
// ROLE: Privacy Policy - GDPR compliant
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { companyInfo, lastUpdated } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | DashKit",
  description: "Privacy policy and data protection information for DashKit users. Learn how we collect, use and protect your data.",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />

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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-gray-400 text-sm mt-1">Last updated: {lastUpdated.privacy}</p>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-gray-400 leading-relaxed">
              At <strong>{companyInfo.name}</strong>, we take your privacy seriously. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our 
              website and services. We are committed to GDPR compliance and protecting your personal data.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Information We Collect</h2>
            
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Personal Information</h3>
              <div className="space-y-3 text-gray-400">
                <p>When you purchase a product or create an account, we collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address</li>
                  <li>Billing information (processed securely via Stripe)</li>
                  <li>Company name (optional)</li>
                  <li>Country/region for tax purposes</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Automatically Collected Data</h3>
              <div className="space-y-3 text-gray-400">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral source</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Cookies & Tracking</h3>
              <div className="space-y-3 text-gray-400">
                <p>We use cookies for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Essential functionality (authentication, shopping cart)</li>
                  <li>Analytics (Google Analytics, privacy-friendly)</li>
                  <li>Marketing (conversion tracking, retargeting)</li>
                </ul>
                <p className="mt-4">You can control cookies through your browser settings.</p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. How We Use Your Information</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Process transactions</strong> and deliver purchased products</li>
                <li><strong className="text-white">Provide customer support</strong> and respond to inquiries</li>
                <li><strong className="text-white">Send transactional emails</strong> (purchase confirmations, download links)</li>
                <li><strong className="text-white">Send marketing communications</strong> (with your consent, opt-out available)</li>
                <li><strong className="text-white">Improve our products and services</strong> based on usage data</li>
                <li><strong className="text-white">Detect and prevent fraud</strong> or abuse</li>
                <li><strong className="text-white">Comply with legal obligations</strong></li>
              </ul>
            </div>
          </section>

          {/* 3. Legal Basis (GDPR) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Legal Basis for Processing (GDPR)</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>We process your data under the following legal bases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Contract performance:</strong> To fulfill purchase orders</li>
                <li><strong className="text-white">Legitimate interests:</strong> To improve services and prevent fraud</li>
                <li><strong className="text-white">Consent:</strong> For marketing communications and non-essential cookies</li>
                <li><strong className="text-white">Legal obligation:</strong> For tax and accounting purposes</li>
              </ul>
            </div>
          </section>

          {/* 4. Data Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. How We Share Your Information</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>We share data with trusted third-party service providers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Stripe:</strong> Payment processing</li>
                <li><strong className="text-white">Resend:</strong> Transactional emails</li>
                <li><strong className="text-white">Supabase:</strong> Data storage and authentication</li>
                <li><strong className="text-white">Google Analytics:</strong> Website analytics</li>
                <li><strong className="text-white">Vercel:</strong> Website hosting</li>
              </ul>
              <p className="mt-4">
                These providers are contractually obligated to protect your data and use it only 
                for the services they provide to us.
              </p>
              <p>
                <strong className="text-white">We NEVER sell your personal data to third parties.</strong>
              </p>
            </div>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Data Retention</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>We retain your data for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Account data:</strong> Until you request deletion</li>
                <li><strong className="text-white">Transaction records:</strong> 7 years (legal requirement)</li>
                <li><strong className="text-white">Marketing data:</strong> Until you unsubscribe</li>
                <li><strong className="text-white">Analytics data:</strong> 26 months (Google Analytics default)</li>
              </ul>
            </div>
          </section>

          {/* 6. Your Rights (GDPR) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Your Rights Under GDPR</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Rectification:</strong> Correct inaccurate data</li>
                <li><strong className="text-white">Erasure:</strong> Request deletion ("right to be forgotten")</li>
                <li><strong className="text-white">Portability:</strong> Receive your data in machine-readable format</li>
                <li><strong className="text-white">Restriction:</strong> Limit processing of your data</li>
                <li><strong className="text-white">Object:</strong> Opt-out of marketing communications</li>
                <li><strong className="text-white">Withdraw consent:</strong> At any time for consent-based processing</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact us at <strong className="text-white">{companyInfo.email}</strong>. 
                We'll respond within 30 days.
              </p>
            </div>
          </section>

          {/* 7. Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Data Security</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>We implement industry-standard security measures:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure payment processing via PCI-compliant Stripe</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Data encryption at rest</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet is 100% secure. 
                We cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* 8. International Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. International Data Transfers</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                Your data may be transferred to and stored on servers located outside your country. 
                We ensure adequate protection through:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>EU-US Data Privacy Framework certification (for US-based providers)</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Adequacy decisions by the European Commission</li>
              </ul>
            </div>
          </section>

          {/* 9. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Children's Privacy</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                Our services are not directed to individuals under 16. We do not knowingly collect 
                personal data from children. If you believe we've collected data from a child, 
                contact us immediately.
              </p>
            </div>
          </section>

          {/* 10. Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10. Changes to This Policy</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-gray-400">
              <p>
                We may update this Privacy Policy periodically. Material changes will be communicated 
                via email or prominent notice on our website. Continued use after changes constitutes acceptance.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="glass-card rounded-2xl p-8 text-gray-400">
              <p className="mb-4">
                For privacy-related questions or to exercise your rights:
              </p>
              <div className="space-y-2">
                <p><strong className="text-white">Email:</strong> {companyInfo.email}</p>
                <p><strong className="text-white">Data Protection Officer:</strong> dpo@dashkit.online</p>
                <p><strong className="text-white">Address:</strong> {companyInfo.address}</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
