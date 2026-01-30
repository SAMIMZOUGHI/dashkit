// =============================================================================
// FILE: app/resources/page.tsx
// ROLE: Resources hub page - SEO optimized English
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, HelpCircle, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | DashKit - Blog, Tutorials & Support",
  description: "Discover our resources: blog articles, technical glossary, help center and more. Everything to master Next.js dashboards.",
  keywords: ["dashboard tutorials", "next.js blog", "react resources", "web development guide"],
  openGraph: {
    title: "DashKit Resources - Blog, Tutorials & Documentation",
    description: "Blog, glossary, support: all resources to create professional dashboards",
    url: "https://dashkit.online/resources",
  },
};

const resources = [
  {
    title: "Blog",
    description: "Tutorials, guides and news about Next.js, React and modern dashboards",
    href: "/resources/blog",
    icon: BookOpen,
    color: "from-purple-600 to-pink-600",
    stats: "12 articles",
  },
  {
    title: "Glossary",
    description: "Definitions of technical terms: SSR, SSG, API Routes and more",
    href: "/resources/glossary",
    icon: FileText,
    color: "from-blue-600 to-cyan-600",
    stats: "50+ terms",
  },
  {
    title: "Support Center",
    description: "FAQ, installation guides and troubleshooting",
    href: "/resources/support",
    icon: HelpCircle,
    color: "from-green-600 to-emerald-600",
    stats: "20+ questions",
  },
  {
    title: "About Us",
    description: "Discover DashKit, our mission and the team behind the templates",
    href: "/resources/about",
    icon: Users,
    color: "from-orange-600 to-red-600",
    stats: "Our story",
  },
];

export default function ResourcesPage() {
  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            DashKit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to build professional dashboards: 
            tutorials, technical documentation and support.
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group spotlight-card glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <resource.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-3xl font-bold group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h2>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:translate-x-1 group-hover:text-purple-400 transition-all" />
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {resource.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{resource.stats}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">Need more help?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is here to support you. Contact us for any questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/resources/support"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Help Center
            </Link>
            <a
              href="mailto:support@dashkit.online"
              className="px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
