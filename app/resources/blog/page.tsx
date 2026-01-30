// =============================================================================
// FILE: app/resources/blog/page.tsx
// ROLE: Blog articles list - SEO optimized
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getBlogCategories } from "@/lib/resources";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | DashKit - Next.js, React & Dashboard Tutorials",
  description: "Articles, tutorials and guides about Next.js, React, Tailwind CSS and professional dashboard development. Expert tips for developers.",
  keywords: ["next.js blog", "react tutorials", "dashboard development", "web development blog"],
  openGraph: {
    title: "DashKit Blog - Next.js Tutorials & Guides",
    description: "Learn how to build professional dashboards with Next.js",
    url: "https://dashkit.online/resources/blog",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

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
            DashKit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Tutorials, guides and news about Next.js, React and modern dashboards
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-xl glass-card glass-card-hover font-semibold transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              className="group spotlight-card glass-card glass-card-hover rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-sm font-semibold mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Read more */}
                <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
