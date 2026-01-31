// =============================================================================
// FICHIER : app/page.tsx
// RÔLE : Homepage premium style dark moderne (inspiré Simplelist)
// =============================================================================

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Palette, 
  Shield, 
  Code2, 
  Smartphone, 
  TrendingUp,
  Star,
  Download,
  Users,
  Sparkles
} from "lucide-react";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="relative bg-black text-white overflow-hidden" ref={containerRef}>
      
      {/* ===================================================================== */}
      {/* HERO SECTION - Style dark premium */}
      {/* ===================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center grain-overlay">
        {/* Background gradient subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        
        {/* Gradient orbs animés */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Badge "New" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <span className="text-sm text-gray-300">GA4 template now available</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Turn Data into
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-slow">
              Pure Visual Gold
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Premium dashboard templates for Looker, Power BI, and Tableau.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/products"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 animate-soft-glow"
            >
              Browse all templates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#demo"
              className="px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2"
            >
              See live demo
            </Link>
          </motion.div>

          {/* Mockup du dashboard avec effet 3D */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative max-w-6xl mx-auto animate-float"
          >
            {/* Placeholder pour ton screenshot */}
            <div className="glass-card rounded-3xl p-2 shadow-2xl border border-white/10">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-900/40 via-black to-pink-900/40 flex items-center justify-center relative overflow-hidden">
                {/* Effet de grille */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                <div className="relative z-10 text-center p-8">
                  <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">
                    [Ton screenshot de dashboard ici]
                  </p>
                </div>
              </div>
            </div>

            {/* Éléments flottants autour du mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 glass-card rounded-2xl px-4 py-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Live Preview</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 glass-card rounded-2xl px-4 py-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>5.0 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-20 text-sm text-gray-500"
          >
            Trusted by over <span className="text-white font-semibold">50,000</span> designers and developers
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/30 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* FEATURES SECTION - Cards avec glassmorphism */}
      {/* ===================================================================== */}
      <section className="relative py-32 grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Titre section */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider text-purple-400 mb-4"
            >
              Features
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Elevate your simplicity level
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Démarrez avec DashKit. Choisissez votre plan et boostez votre efficacité dès maintenant.
            </motion.p>
          </div>

          {/* Grid de features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Zap, 
                title: "Lightning Fast", 
                description: "Optimisé pour des performances extrêmes. < 1s de chargement.",
                color: "from-yellow-500 to-orange-500"
              },
              { 
                icon: Palette, 
                title: "Beautiful Design", 
                description: "Interface moderne avec glassmorphism et animations fluides.",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: Shield, 
                title: "Secure by Default", 
                description: "Authentification intégrée et protection complète.",
                color: "from-green-500 to-cyan-500"
              },
              { 
                icon: Code2, 
                title: "Clean Code", 
                description: "TypeScript strict avec documentation complète.",
                color: "from-blue-500 to-indigo-500"
              },
              { 
                icon: Smartphone, 
                title: "Fully Responsive", 
                description: "Parfait sur mobile, tablette et desktop.",
                color: "from-pink-500 to-rose-500"
              },
              { 
                icon: TrendingUp, 
                title: "SEO Optimized", 
                description: "Métadonnées complètes pour un référencement optimal.",
                color: "from-cyan-500 to-blue-500"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group spotlight-card glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* STEPS SECTION - Trois étapes simples */}
      {/* ===================================================================== */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider text-purple-400 mb-4"
            >
              How it works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold"
            >
              Three simple steps to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                create your Dashboard
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "1",
                title: "Choose your template",
                description: "Find the perfect fit with our collection of professionally crafted report templates.",
                icon: Download
              },
              {
                number: "2",
                title: "Create & Customize",
                description: "Create professional reports in minutes with our one-click automation.",
                icon: Code2
              },
              {
                number: "3",
                title: "Share insights",
                description: "Edit in real-time, share instantly—empower your team with actionable intelligence.",
                icon: TrendingUp
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {step.number}
                  </span>
                </div>
                <div className="glass-card rounded-3xl p-8 h-full">
                  <step.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CTA FINAL */}
      {/* ===================================================================== */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Rejoignez des milliers de développeurs qui utilisent DashKit pour créer des dashboards professionnels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products/lookze-pro"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
              >
                Start for free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                Contact sales
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>14-day money back</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
