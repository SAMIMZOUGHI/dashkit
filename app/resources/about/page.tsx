// =============================================================================
// FILE: app/resources/about/page.tsx
// ROLE: About us page - SEO optimized
// =============================================================================

import type { Metadata } from "next";
import Link from "next/link";
import { Target, Users, Zap, Heart, Code2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About DashKit | Our Mission & Team",
  description: "Learn about DashKit, our mission to help developers build beautiful dashboards faster, and meet the team behind the templates.",
  keywords: ["about dashkit", "dashboard templates team", "next.js templates company"],
  openGraph: {
    title: "About DashKit - Our Story",
    description: "Helping developers build professional dashboards faster",
    url: "https://dashkit.online/resources/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to save developers time by providing production-ready dashboard templates.",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Every template is optimized for speed, SEO and user experience from day one.",
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description: "Clean code, comprehensive documentation and modern tech stack you'll love to work with.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "We listen to our users and continuously improve based on real feedback and needs.",
    color: "from-pink-600 to-rose-600",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Developers" },
  { value: "50+", label: "Premium Components" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Available" },
];

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white min-h-screen pt-32 pb-24 grain-overlay">
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            ← Back to Resources
          </Link>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              DashKit
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're building the best dashboard templates for modern web developers.
            Our mission: save you time and help you ship faster.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="glass-card rounded-3xl p-12 mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              DashKit was born from a simple frustration: building dashboards from scratch takes too long. 
              As developers ourselves, we've spent countless hours recreating the same components, 
              authentication flows, and layouts for every new project.
            </p>
            <p>
              We decided to change that. DashKit provides production-ready dashboard templates built with 
              Next.js 14+, TypeScript, and Tailwind CSS. Each template is carefully crafted with attention 
              to performance, accessibility, and developer experience.
            </p>
            <p>
              Today, thousands of developers and teams use DashKit to ship their products faster. 
              We're constantly improving our templates based on community feedback and the latest web technologies.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="spotlight-card glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} p-3 mb-6`}>
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="glass-card rounded-3xl p-12 text-center mb-20">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            DashKit is built by a passionate team of designers and developers who love creating 
            beautiful, performant web applications.
          </p>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold">SM</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Sami Mzoughi</h3>
            <p className="text-gray-400 mb-2">Founder & Lead Developer</p>
            <p className="text-sm text-gray-500 max-w-md">
              Product Owner Data, Data Architect, passionate about building elegant solutions 
              for complex problems.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing dashboards with DashKit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              View Templates
            </Link>
            <a
              href="mailto:hello@dashkit.online"
              className="px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
