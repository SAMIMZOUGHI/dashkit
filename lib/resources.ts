// =============================================================================
// FILE: lib/resources.ts
// ROLE: Data for blog, glossary, FAQ - English version
// =============================================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// =============================================================================
// BLOG POSTS
// =============================================================================
export const blogPosts: BlogPost[] = [
  {
    slug: "build-professional-dashboard-nextjs-2025",
    title: "How to Build a Professional Dashboard with Next.js in 2025",
    excerpt: "Discover best practices for building modern, performant, and scalable dashboards with Next.js 14+ and the latest React features.",
    content: `# Introduction

Building a professional dashboard can seem complex, but with Next.js and the right tools, the process becomes smooth and efficient.

## Why Next.js for Dashboards?

Next.js offers unique advantages:
- **Optimal Performance**: SSR and SSG for ultra-fast loading
- **Native SEO**: Built-in metadata and server rendering
- **Developer Experience**: Hot reload, TypeScript, API routes

## Essential Components

A good dashboard requires:

1. **Navigation System**: Responsive sidebar with persistent state
2. **Interactive Charts**: Recharts or Chart.js for data visualization
3. **Data Tables**: TanStack Table for performance
4. **Authentication**: NextAuth.js or Supabase Auth

## Recommended Architecture

\`\`\`
app/
├── (dashboard)/
│   ├── layout.tsx          # Layout with sidebar
│   ├── page.tsx            # Overview
│   ├── analytics/
│   ├── users/
│   └── settings/
\`\`\`

## Performance Optimization

- **Code splitting**: Dynamic imports for large components
- **Image optimization**: next/image for lazy loading
- **Caching**: React Query for cache management

## Conclusion

With DashKit, save weeks of development with production-ready templates.`,
    author: {
      name: "Sami Mzoughi",
      avatar: "/images/team/sami.jpg",
    },
    publishedAt: "2025-01-25",
    readingTime: "8 min read",
    category: "Tutorials",
    tags: ["Next.js", "Dashboard", "React", "TypeScript"],
    image: "/images/blog/dashboard-nextjs.jpg",
    seo: {
      title: "Build a Professional Next.js Dashboard in 2025 | Complete Guide",
      description: "Complete guide to building a professional dashboard with Next.js 14+. Best practices, architecture, components and optimization.",
      keywords: ["next.js dashboard", "next.js tutorial", "react dashboard", "admin panel next.js"],
    },
  },
  {
    slug: "tailwind-css-dashboard-design-tips",
    title: "10 Tailwind CSS Tips for Beautiful Dashboards",
    excerpt: "Master Tailwind CSS to create modern dashboard interfaces with glassmorphism, dark mode and smooth animations.",
    content: `# Introduction

Tailwind CSS revolutionizes dashboard design. Here are 10 tips to create stunning interfaces.

## 1. Glassmorphism with backdrop-filter

\`\`\`css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
\`\`\`

## 2. Optimized Dark Mode

Use the "class" strategy for full control:

\`\`\`tsx
<div className="bg-white dark:bg-gray-900">
  ...
</div>
\`\`\`

## 3. Smooth Animations

Create custom animations:

\`\`\`css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
\`\`\`

## Conclusion

With DashKit, all these patterns are already implemented and ready to use.`,
    author: {
      name: "Sami Mzoughi",
      avatar: "/images/team/sami.jpg",
    },
    publishedAt: "2025-01-20",
    readingTime: "6 min read",
    category: "Design",
    tags: ["Tailwind CSS", "Design", "UI/UX", "Dark Mode"],
    image: "/images/blog/tailwind-tips.jpg",
    seo: {
      title: "10 Tailwind CSS Tips for Professional Dashboards | DashKit",
      description: "Discover 10 advanced Tailwind CSS techniques for creating modern dashboards with glassmorphism and dark mode.",
      keywords: ["tailwind css", "dashboard design", "glassmorphism", "dark mode tailwind"],
    },
  },
  {
    slug: "nextjs-supabase-authentication-guide",
    title: "Complete Next.js + Supabase Authentication in 15 Minutes",
    excerpt: "Implement a secure authentication system with Next.js and Supabase: email/password, OAuth and session management.",
    content: `# Complete Guide: Next.js + Supabase Authentication

Authentication is crucial for any dashboard. Here's how to implement it quickly.

## Installation

\`\`\`bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
\`\`\`

## Configuration

Create your Supabase project and add environment variables...

## Conclusion

DashKit includes Supabase authentication ready to use out of the box.`,
    author: {
      name: "Sami Mzoughi",
      avatar: "/images/team/sami.jpg",
    },
    publishedAt: "2025-01-15",
    readingTime: "10 min read",
    category: "Tutorials",
    tags: ["Next.js", "Supabase", "Authentication", "Security"],
    image: "/images/blog/auth-supabase.jpg",
    seo: {
      title: "Next.js + Supabase Authentication | 2025 Guide",
      description: "Complete tutorial to implement authentication in Next.js with Supabase. Email, OAuth, sessions and security.",
      keywords: ["nextjs authentication", "supabase auth", "nextjs login", "react authentication"],
    },
  },
];

// =============================================================================
// GLOSSARY TERMS
// =============================================================================
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "dashboard",
    term: "Dashboard",
    definition: "A visualization interface that presents key data and metrics in an organized and interactive manner. A dashboard allows quick monitoring and analysis of application or business performance.",
    category: "General",
    relatedTerms: ["Analytics", "KPI", "Metrics"],
  },
  {
    id: "ssr",
    term: "SSR (Server-Side Rendering)",
    definition: "Rendering technique where HTML is generated server-side before being sent to the browser. Improves SEO and initial loading performance, especially with Next.js.",
    category: "Technical",
    relatedTerms: ["SSG", "Next.js", "React"],
  },
  {
    id: "ssg",
    term: "SSG (Static Site Generation)",
    definition: "Method of generating static HTML pages at build time. Offers optimal performance and is ideal for content that changes infrequently.",
    category: "Technical",
    relatedTerms: ["SSR", "Next.js", "JAMstack"],
  },
  {
    id: "glassmorphism",
    term: "Glassmorphism",
    definition: "Design style using transparency and blur effects (backdrop-filter) to create a frosted glass appearance. Very popular in modern interfaces and premium dashboards.",
    category: "Design",
    relatedTerms: ["UI/UX", "CSS", "Design System"],
  },
  {
    id: "api-routes",
    term: "API Routes",
    definition: "Next.js feature allowing you to create API endpoints directly in your application, without a separate backend server. Perfect for building serverless APIs.",
    category: "Technical",
    relatedTerms: ["Next.js", "Serverless", "Backend"],
  },
  {
    id: "typescript",
    term: "TypeScript",
    definition: "Programming language that is a superset of JavaScript adding static typing. Improves code maintainability and reduces bugs in complex applications like dashboards.",
    category: "Technical",
    relatedTerms: ["JavaScript", "Type Safety", "Developer Experience"],
  },
  {
    id: "tailwind",
    term: "Tailwind CSS",
    definition: "Utility-first CSS framework for quickly styling interfaces without writing custom CSS. Very popular for creating modern and responsive dashboards.",
    category: "Design",
    relatedTerms: ["CSS", "Responsive Design", "UI Framework"],
  },
  {
    id: "dark-mode",
    term: "Dark Mode",
    definition: "Interface theme using dark colors to reduce eye strain and save battery on OLED screens. Essential in modern dashboards.",
    category: "Design",
    relatedTerms: ["UI/UX", "Theme", "Accessibility"],
  },
];

// =============================================================================
// FAQ ITEMS
// =============================================================================
export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How do I install a DashKit template?",
    answer: "After purchase, you receive a download link by email. Extract the ZIP, run `npm install` then `npm run dev`. Complete documentation is included in the `/docs` folder.",
    category: "Installation",
  },
  {
    id: "2",
    question: "Are templates compatible with Next.js 14+?",
    answer: "Yes, all our templates are built with Next.js 14+ and use the latest features (App Router, Server Components, etc.). They are regularly updated.",
    category: "Technical",
  },
  {
    id: "3",
    question: "Can I use DashKit for client projects?",
    answer: "Absolutely! The license allows you to use templates for unlimited client projects. You can modify, customize and resell your creations.",
    category: "License",
  },
  {
    id: "4",
    question: "Is there technical support?",
    answer: "Yes, you get 6 months of email support. Our team responds within 24-48h to help with installation, configuration and technical questions.",
    category: "Support",
  },
  {
    id: "5",
    question: "How do I customize template colors?",
    answer: "Colors are centralized in `tailwind.config.ts`. Simply modify the values for your custom palette. A complete customization guide is available in the documentation.",
    category: "Customization",
  },
  {
    id: "6",
    question: "Are templates responsive?",
    answer: "Yes, 100% responsive! All our templates work perfectly on mobile, tablet and desktop. We test on all major devices before each release.",
    category: "Design",
  },
  {
    id: "7",
    question: "What is your refund policy?",
    answer: "14-day money-back guarantee. If the template doesn't meet your expectations, contact us for a full refund, no questions asked.",
    category: "Payment",
  },
  {
    id: "8",
    question: "Are updates free?",
    answer: "Yes, all future updates are included for life! You'll receive an email with each new version and update instructions.",
    category: "Updates",
  },
];

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}

export function getGlossaryByLetter(letter: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => 
    term.term.charAt(0).toUpperCase() === letter.toUpperCase()
  );
}

export function getAllGlossaryLetters(): string[] {
  const letters = new Set(glossaryTerms.map((term) => term.term.charAt(0).toUpperCase()));
  return Array.from(letters).sort();
}

export function getFAQByCategory(category: string): FAQItem[] {
  return faqItems.filter((item) => item.category === category);
}

export function getAllFAQCategories(): string[] {
  return Array.from(new Set(faqItems.map((item) => item.category)));
}
