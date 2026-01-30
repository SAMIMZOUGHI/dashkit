// =============================================================================
// FILE: components/layout/Footer.tsx
// ROLE: Footer with resources navigation - Dark premium style
// =============================================================================

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Templates", href: "/products" },
      { label: "Connectors", href: "/connectors" },
    ],
    Resources: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Support Center", href: "/resources/support" },
      { label: "About Us", href: "/resources/about" },
    ],
    Company: [
      { label: "About", href: "/resources/about" },
      { label: "Contact", href: "mailto:hello@dashkit.online" },
    ],
Legal: [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Legal Notice", href: "/legal/notice" },
],
  };

  const socialLinks = [
    { 
      icon: Twitter, 
      href: "https://twitter.com/dashkit", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: Github, 
      href: "https://github.com/dashkit", 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/dashkit", 
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    { 
      icon: Mail, 
      href: "mailto:hello@dashkit.online", 
      label: "Email",
      color: "hover:text-purple-400"
    },
  ];

  return (
    <footer className="relative border-t border-white/10 grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          
          {/* Brand - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold">DashKit</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Professional Next.js dashboard templates to ship your products faster. 
              Built with TypeScript, Tailwind CSS and modern best practices.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl glass-card glass-card-hover flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns - Each takes 1 column */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-gray-400 hover:text-white transition-colors inline-block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="py-8 mb-8 border-y border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest templates, tutorials and news delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-card rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-400">
            © {currentYear} DashKit. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>

          <p className="text-gray-500">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              Sami
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
