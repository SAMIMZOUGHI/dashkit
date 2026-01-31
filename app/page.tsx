// =============================================================================
// FICHIER : app/page.tsx
// RÔLE : Homepage premium style dark moderne (inspiré Databloo)
// =============================================================================

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Palette,
  Shield,
  Code2,
  Smartphone,
  LineChart
} from "lucide-react";

// =============================================================================
// COMPOSANTS WIDGETS FLOTTANTS
// =============================================================================

// Widget Sessions par Device
const SessionsByDeviceWidget = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="glass-card rounded-2xl p-5 w-64 shadow-2xl"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-400">Session by device</span>
      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1">
        <TrendingUp className="w-3 h-3" /> 7%
      </span>
    </div>
    <div className="flex items-center justify-center mb-4">
      <div className="relative">
        {/* Cercle de progression */}
        <svg className="w-28 h-28 transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="56"
            cy="56"
            r="48"
            stroke="url(#gradient1)"
            strokeWidth="8"
            fill="none"
            strokeDasharray="301.59"
            strokeDashoffset="75"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">176 454</span>
        </div>
      </div>
    </div>
    <div className="flex justify-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        <span className="text-gray-400">Mobile</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
        <span className="text-gray-400">Desktop</span>
      </div>
    </div>
  </motion.div>
);

// Widget Revenue par Channel
const RevenueByChannelWidget = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="glass-card rounded-2xl p-5 w-56 shadow-2xl"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-400">Revenue by channel</span>
    </div>
    <div className="space-y-3">
      {[
        { label: "Organic", value: 47, color: "from-purple-500 to-purple-600" },
        { label: "Paid", value: 12, color: "from-cyan-500 to-cyan-600" },
        { label: "Social", value: 36, color: "from-pink-500 to-pink-600" },
        { label: "Direct", value: 4, color: "from-orange-500 to-orange-600" },
        { label: "Email", value: 10, color: "from-green-500 to-green-600" },
      ].map((item, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">{item.label}</span>
            <span className="text-white">{item.value}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 1, delay: 1 + i * 0.1 }}
              className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// Widget Overview Stats
const OverviewWidget = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="glass-card rounded-2xl p-6 w-full max-w-xl shadow-2xl"
  >
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold">Overview</h3>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span className="px-3 py-1 bg-white/5 rounded-lg">1 Jun 2024</span>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Sessions", value: "33 449", change: "+7%", positive: true },
        { label: "Conversion rate", value: "0.30%", change: "+7%", positive: true },
        { label: "Total revenue", value: "16 467$", change: "+7%", positive: true },
        { label: "Total purchases", value: "97", change: "+7%", positive: true },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
          <p className="text-xl font-bold mb-1">{stat.value}</p>
          <span className={`text-xs px-2 py-0.5 rounded-full ${stat.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            <TrendingUp className="w-3 h-3 inline mr-1" />
            {stat.change}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

// Widget Session Over Time
const SessionOverTimeWidget = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="glass-card rounded-2xl p-5 w-72 shadow-2xl"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-400">Session over time</span>
    </div>
    <div className="relative h-32">
      {/* Simplified chart visualization */}
      <svg className="w-full h-full" viewBox="0 0 200 80">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>
        {/* Area fill */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          d="M0,60 Q25,55 50,45 T100,50 T150,20 T200,35 L200,80 L0,80 Z"
          fill="url(#chartGradient)"
        />
        {/* Line */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          d="M0,60 Q25,55 50,45 T100,50 T150,20 T200,35"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
        />
      </svg>
      {/* Y-axis labels */}
      <div className="absolute right-0 top-0 text-xs text-gray-500 space-y-4">
        <div>37K</div>
        <div>30K</div>
        <div>15K</div>
      </div>
    </div>
    <div className="flex justify-between text-xs text-gray-500 mt-2">
      <span>Jun</span>
      <span>Jul</span>
      <span>Aug</span>
      <span>Sep</span>
    </div>
  </motion.div>
);

// Mini Widget - Right side device stats
const MiniDeviceWidget = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.9 }}
    className="glass-card rounded-2xl p-4 w-52 shadow-2xl"
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs text-gray-400">Session by device</span>
      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1">
        <TrendingUp className="w-2 h-2" /> 7%
      </span>
    </div>
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgba(6, 182, 212, 0.2)"
            strokeWidth="5"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#06b6d4"
            strokeWidth="5"
            fill="none"
            strokeDasharray="175.93"
            strokeDashoffset="44"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">176K</span>
        </div>
      </div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span className="text-gray-400">Mobile</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          <span className="text-gray-400">Desktop</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// =============================================================================
// PAGE PRINCIPALE
// =============================================================================

export default function HomePage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* ===================================================================== */}
      {/* HERO SECTION - Inspiré Databloo */}
      {/* ===================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center grain-overlay py-20">
        {/* Background gradient subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />

        {/* Gradient orbs animés */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Titre et sous-titre centrés */}
          <div className="text-center mb-12">
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
              <span className="text-sm text-gray-300">New GA4 templates available</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Upgrade your reporting
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-slow">
                today!
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Try our premium dashboard templates and see the difference.
              <br className="hidden md:block" />
              No payment required.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/products"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 animate-soft-glow"
              >
                Browse all templates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/products/GA4-report-template"
                className="group px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 border border-cyan-500/30 hover:border-cyan-500/60"
              >
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                See Live Demo
              </Link>
            </motion.div>
          </div>

          {/* Zone des widgets flottants */}
          <div className="relative mt-8">
            {/* Layout des widgets style Databloo */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

              {/* Colonne gauche - Widget Sessions by Device */}
              <div className="hidden lg:block">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <SessionsByDeviceWidget />
                </motion.div>
              </div>

              {/* Colonne centrale - Revenue + Overview */}
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="hidden md:block"
                >
                  <RevenueByChannelWidget />
                </motion.div>

                <OverviewWidget />
              </div>

              {/* Colonne droite - Session Over Time + Mini Widget */}
              <div className="hidden lg:flex flex-col gap-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }}
                >
                  <SessionOverTimeWidget />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
                >
                  <MiniDeviceWidget />
                </motion.div>
              </div>
            </div>

            {/* Éléments décoratifs flottants */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-10 left-10 hidden xl:block"
            >
              <div className="glass-card rounded-xl p-3">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-5 right-20 hidden xl:block"
            >
              <div className="glass-card rounded-xl p-3">
                <PieChart className="w-6 h-6 text-cyan-400" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute top-20 right-5 hidden xl:block"
            >
              <div className="glass-card rounded-xl p-3">
                <Activity className="w-6 h-6 text-pink-400" />
              </div>
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center text-sm text-gray-500"
          >
            Trusted by <span className="text-white font-semibold">1,000+</span> marketers and analysts worldwide
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
              Why choose DashKit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Professional dashboards,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                zero complexity
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Get started with DashKit templates. Transform your data into actionable insights in minutes.
            </motion.p>
          </div>

          {/* Grid de features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "One-Click Setup",
                description: "Connect your data source and go live in under 60 seconds. No technical skills required.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Palette,
                title: "Beautiful Design",
                description: "Professionally crafted visualizations that make your data shine.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: LineChart,
                title: "50+ Visualizations",
                description: "Charts, tables, KPIs, and more. All key metrics in one comprehensive view.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: Shield,
                title: "Real-time Updates",
                description: "Always connected to your live data. See changes as they happen.",
                color: "from-green-500 to-cyan-500"
              },
              {
                icon: Smartphone,
                title: "Fully Responsive",
                description: "Review your performance on any device - desktop, tablet, or mobile.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Code2,
                title: "Fully Customizable",
                description: "Match your brand colors, add custom metrics, make it yours.",
                color: "from-blue-500 to-indigo-500"
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
              className="text-4xl md:text-5xl font-bold"
            >
              Three simple steps to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                powerful reporting
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "1",
                title: "Choose your template",
                description: "Browse our collection of professionally designed dashboard templates for GA4, Looker Studio, and more.",
                icon: BarChart3
              },
              {
                number: "2",
                title: "Connect your data",
                description: "Link your data sources with one click. Our templates auto-configure to match your metrics.",
                icon: Activity
              },
              {
                number: "3",
                title: "Share insights",
                description: "Export, embed, or share live links. Empower your team with actionable intelligence.",
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
            className="glass-card rounded-3xl p-16 relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to transform
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  your reporting?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of marketers and analysts who use DashKit to create stunning, actionable dashboards.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
                >
                  Browse all templates
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products/GA4-report-template"
                  className="px-8 py-4 glass-card glass-card-hover rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 border border-cyan-500/30"
                >
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
                  See Live Demo
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
                  <span>Free demo available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Setup in 60 seconds</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
