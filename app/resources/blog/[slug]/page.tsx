// =============================================================================
// FILE: app/resources/blog/[slug]/page.tsx
// ROLE: Blog article detail page - SEO optimized
// =============================================================================

import { use } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/resources";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | DashKit",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `https://dashkit.online/resources/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>

        {/* Header */}
        <article>
          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-sm font-semibold mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Featured image */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-12 pb-12 border-b border-white/10">
            <Tag className="w-5 h-5 text-gray-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-xl glass-card text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author card */}
          <div className="glass-card rounded-2xl p-8 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
              <p className="text-gray-400">
                Product Owner & Data Architect passionate about creating beautiful and performant dashboards.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
