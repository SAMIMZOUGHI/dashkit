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
  Zap,
  Palette,
  Shield,
  Code2,
  Smartphone,
  LineChart,
  BarChart3,
  Activity,
} from "lucide-react";

// =============================================================================
// COMPOSANTS CHARTS FLOTTANTS
// =============================================================================

// Donut Chart - Sessions par Device
const DonutChart = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl ${className}`}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-gray-400">Sessions by device</span>
      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1">
        <TrendingUp className="w-3 h-3" /> 12%
      </span>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="12"
            fill="none"
          />
          {/* Desktop - 65% */}
          <motion.circle
            initial={{ strokeDashoffset: 251 }}
            animate={{ strokeDashoffset: 88 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            cx="48"
            cy="48"
            r="40"
            stroke="url(#donutGradient1)"
            strokeWidth="12"
            fill="none"
            strokeDasharray="251"
            strokeLinecap="round"
          />
          {/* Mobile - 35% */}
          <motion.circle
            initial={{ strokeDashoffset: 251 }}
            animate={{ strokeDashoffset: 163 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            cx="48"
            cy="48"
            r="40"
            stroke="#06b6d4"
            strokeWidth="12"
            fill="none"
            strokeDasharray="251"
            strokeDashoffset="163"
            strokeLinecap="round"
            transform="rotate(234 48 48)"
          />
          <defs>
            <linearGradient id="donutGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">24.5K</span>
        </div>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <span className="text-gray-400">Desktop</span>
          <span className="text-white font-medium">65%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
          <span className="text-gray-400">Mobile</span>
          <span className="text-white font-medium">35%</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// Bar Chart - Revenue par Channel
const BarChart = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl ${className}`}
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm text-gray-400">Revenue by channel</span>
    </div>
    <div className="flex items-end gap-2 h-28">
      {[
        { value: 85, color: "from-purple-500 to-purple-600", label: "Organic" },
        { value: 45, color: "from-cyan-500 to-cyan-600", label: "Paid" },
        { value: 70, color: "from-pink-500 to-pink-600", label: "Social" },
        { value: 30, color: "from-orange-500 to-orange-600", label: "Direct" },
        { value: 55, color: "from-green-500 to-green-600", label: "Email" },
      ].map((bar, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${bar.value}%` }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
            className={`w-full bg-gradient-to-t ${bar.color} rounded-t-md min-h-[4px]`}
          />
          <span className="text-[10px] text-gray-500">{bar.label.slice(0, 3)}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

// Line Chart - Sessions Over Time
const LineChartWidget = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl ${className}`}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-gray-400">Sessions over time</span>
      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1">
        <TrendingUp className="w-3 h-3" /> 24%
      </span>
    </div>
    <div className="relative h-24">
      <svg className="w-full h-full" viewBox="0 0 200 70" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {/* Area */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          d="M0,55 Q20,50 40,45 T80,40 T120,25 T160,30 T200,15 L200,70 L0,70 Z"
          fill="url(#lineGradient)"
        />
        {/* Line */}
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          d="M0,55 Q20,50 40,45 T80,40 T120,25 T160,30 T200,15"
          fill="none"
          stroke="url(#strokeGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Dots */}
        {[
          { x: 0, y: 55 },
          { x: 40, y: 45 },
          { x: 80, y: 40 },
          { x: 120, y: 25 },
          { x: 160, y: 30 },
          { x: 200, y: 15 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#fff"
            stroke="#a855f7"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
    <div className="flex justify-between text-[10px] text-gray-500 mt-1">
      <span>Jan</span>
      <span>Feb</span>
      <span>Mar</span>
      <span>Apr</span>
      <span>May</span>
      <span>Jun</span>
    </div>
  </motion.div>
);

// Mini Stats Card
const StatsCard = ({ className = "", label, value, change, icon: Icon }: {
  className?: string;
  label: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className={`glass-card rounded-2xl p-4 shadow-2xl ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-purple-400" />
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
    <div className="mt-2 flex items-center gap-1">
      <TrendingUp className="w-3 h-3 text-green-400" />
      <span className="text-xs text-green-400">{change}</span>
      <span className="text-xs text-gray-500">vs last month</span>
    </div>
  </motion.div>
);

// Area Chart mini
const AreaChartMini = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl ${className}`}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-gray-400">Conversion rate</span>
      <span className="text-lg font-bold">3.2%</span>
    </div>
    <div className="relative h-16">
      <svg className="w-full h-full" viewBox="0 0 150 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          d="M0,40 Q15,35 30,38 T60,30 T90,25 T120,20 T150,10 L150,50 L0,50 Z"
          fill="url(#areaGradient)"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          d="M0,40 Q15,35 30,38 T60,30 T90,25 T120,20 T150,10"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
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
      {/* HERO SECTION - Charts flottants autour du titre */}
      {/* ===================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center grain-overlay py-12">
        {/* Background gradient subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />

        {/* Gradient orbs animés */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Layout principal avec charts sur les côtés */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px] gap-6 items-center">

            {/* Colonne gauche - Charts */}
            <div className="hidden lg:flex flex-col gap-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <DonutChart className="w-full" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <BarChart className="w-full" />
              </motion.div>
            </div>

            {/* Colonne centrale - Titre et CTA */}
            <div className="text-center py-8">
              {/* Badge "New" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Upgrade your
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-slow">
                  reporting today!
                </span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto"
              >
                Try our premium dashboard templates and see the difference. No payment required.
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

              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-sm text-gray-500"
              >
                Trusted by <span className="text-white font-semibold">1,000+</span> marketers worldwide
              </motion.div>
            </div>

            {/* Colonne droite - Charts */}
            <div className="hidden lg:flex flex-col gap-5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.3 }}
              >
                <LineChartWidget className="w-full" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
              >
                <AreaChartMini className="w-full" />
              </motion.div>
            </div>
          </div>

          {/* Stats cards en dessous - version mobile visible */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 lg:hidden">
            <StatsCard label="Sessions" value="33.4K" change="+12%" icon={Activity} />
            <StatsCard label="Revenue" value="$16.4K" change="+8%" icon={BarChart3} />
          </div>

          {/* Éléments décoratifs flottants */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-[5%] hidden xl:block"
          >
            <div className="glass-card rounded-xl p-3">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-32 right-[5%] hidden xl:block"
          >
            <div className="glass-card rounded-xl p-3">
              <Activity className="w-6 h-6 text-cyan-400" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
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
              Transform your data into actionable insights in minutes.
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
