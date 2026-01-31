// =============================================================================
// FILE: app/resources/support/page.tsx
// ROLE: Support center with FAQ - SEO optimized
// =============================================================================

"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllFAQCategories, getFAQByCategory, faqItems } from "@/lib/resources";
import { Search, ChevronDown, Mail, MessageCircle } from "lucide-react";

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const categories = getAllFAQCategories();

  // Filter FAQ items
  const filteredFAQs = searchQuery
    ? faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : selectedCategory === "All"
    ? faqItems
    : getFAQByCategory(selectedCategory);

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            ← Back to Resources
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions, installation guides and troubleshooting tips.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-card rounded-2xl bg-white/5 border border-white/10 focus:border-green-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Categories */}
        {!searchQuery && (
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600"
                  : "glass-card glass-card-hover"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-green-600 to-emerald-600"
                    : "glass-card glass-card-hover"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="spotlight-card glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-600/20 text-green-400 text-xs font-semibold mb-3">
                    {faq.category}
                  </span>
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform ${
                    openFAQ === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFAQ === faq.id && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-20 glass-card rounded-3xl">
              <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No results found</h3>
              <p className="text-gray-400">
                Try different keywords or contact our support team.
              </p>
            </div>
          )}
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email support */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Email Support</h3>
            <p className="text-gray-400 mb-6">
              Get help from our support team within 24-48 hours.
            </p>
            <a
              href="mailto:hello@dashkit.online"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Send Email
            </a>
          </div>

          {/* Live chat */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Documentation</h3>
            <p className="text-gray-400 mb-6">
              Browse our complete documentation and guides.
            </p>
            <Link
              href="/resources/blog"
              className="inline-block px-6 py-3 glass-card glass-card-hover rounded-xl font-semibold transition-all duration-300"
            >
              View Docs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
