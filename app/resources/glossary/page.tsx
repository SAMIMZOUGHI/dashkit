// =============================================================================
// FILE: app/resources/glossary/page.tsx
// ROLE: Technical glossary - SEO optimized
// =============================================================================

"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllGlossaryLetters, getGlossaryByLetter, glossaryTerms } from "@/lib/resources";
import { Search, BookOpen, ArrowRight } from "lucide-react";

export default function GlossaryPage() {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");
  const [searchQuery, setSearchQuery] = useState("");
  const letters = getAllGlossaryLetters();

  // Filter terms based on search
  const filteredTerms = searchQuery
    ? glossaryTerms.filter(
        (term) =>
          term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : getGlossaryByLetter(selectedLetter);

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            ← Back to Resources
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Glossary
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Comprehensive definitions of technical terms used in dashboard development, Next.js, React and web technologies.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a term..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-card rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Alphabet navigation */}
        {!searchQuery && (
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-white/10">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
                  selectedLetter === letter
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                    : "glass-card glass-card-hover"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        )}

        {/* Terms list */}
        {filteredTerms.length > 0 ? (
          <div className="space-y-6">
            {filteredTerms.map((term) => (
              <div
                key={term.id}
                className="spotlight-card glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300"
              >
                {/* Term */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold">{term.term}</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold">
                    {term.category}
                  </span>
                </div>

                {/* Definition */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {term.definition}
                </p>

                {/* Related terms */}
                {term.relatedTerms.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500 mb-3">Related terms:</p>
                    <div className="flex flex-wrap gap-2">
                      {term.relatedTerms.map((related) => (
                        <span
                          key={related}
                          className="px-3 py-1 rounded-xl glass-card text-sm"
                        >
                          {related}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-3xl">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">No terms found</h3>
            <p className="text-gray-400">
              Try another search or select a different letter.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center glass-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to build your dashboard?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get started with DashKit templates and implement these concepts in minutes.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            View Templates
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
