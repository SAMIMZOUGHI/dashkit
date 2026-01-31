// =============================================================================
// FICHIER : app/page.tsx
// RÔLE : Homepage premium - Design dynamique avec charts et animations
// =============================================================================

"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  TrendingUp,
  TrendingDown,
  Zap,
  Palette,
  Shield,
  Code2,
  Smartphone,
  LineChart,
  BarChart3,
  Activity,
  Users,
  DollarSign,
  Eye,
  MousePointerClick,
  Play,
} from "lucide-react";

// =============================================================================
// ANIMATED COUNTER COMPONENT
// =============================================================================

const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2 }: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
};

// =============================================================================
// COMPOSANTS CHARTS
// =============================================================================

// Donut Chart animé
const DonutChart = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: -30 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl shadow-purple-500/10 ${className}`}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-gray-300">Traffic Sources</span>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1"
      >
        <TrendingUp className="w-3 h-3" /> 18%
      </motion.span>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <svg className="w-28 h-28 transform -rotate-90">
          <circle cx="56" cy="56" r="44" stroke="rgba(255,255,255,0.05)" strokeWidth="14" fill="none" />
          {/* Organic - 45% */}
          <motion.circle
            initial={{ strokeDashoffset: 276 }}
            animate={{ strokeDashoffset: 152 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            cx="56" cy="56" r="44"
            stroke="url(#donutGrad1)" strokeWidth="14" fill="none"
            strokeDasharray="276" strokeLinecap="round"
          />
          {/* Paid - 30% */}
          <motion.circle
            initial={{ strokeDashoffset: 276 }}
            animate={{ strokeDashoffset: 193 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            cx="56" cy="56" r="44"
            stroke="#06b6d4" strokeWidth="14" fill="none"
            strokeDasharray="276" strokeLinecap="round"
            transform="rotate(162 56 56)"
          />
          {/* Social - 25% */}
          <motion.circle
            initial={{ strokeDashoffset: 276 }}
            animate={{ strokeDashoffset: 207 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            cx="56" cy="56" r="44"
            stroke="#f97316" strokeWidth="14" fill="none"
            strokeDasharray="276" strokeLinecap="round"
            transform="rotate(270 56 56)"
          />
          <defs>
            <linearGradient id="donutGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold"><AnimatedCounter value={847} suffix="K" /></span>
          <span className="text-[10px] text-gray-500">visitors</span>
        </div>
      </div>
      <div className="space-y-2 text-xs">
        {[
          { label: "Organic", value: "45%", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
          { label: "Paid", value: "30%", color: "bg-cyan-400" },
          { label: "Social", value: "25%", color: "bg-orange-500" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <span className="text-gray-400 w-14">{item.label}</span>
            <span className="text-white font-semibold">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Bar Chart animé - Revenue
const BarChartRevenue = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: -30 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl shadow-purple-500/10 ${className}`}
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-gray-300">Monthly Revenue</span>
      <span className="text-lg font-bold text-white">$<AnimatedCounter value={124} suffix="K" /></span>
    </div>
    <div className="flex items-end gap-1.5 h-24">
      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.05, ease: "easeOut" }}
          className={`flex-1 rounded-t-sm ${i === 11 ? 'bg-gradient-to-t from-purple-600 to-pink-500' : 'bg-gradient-to-t from-purple-600/40 to-pink-500/40'}`}
        />
      ))}
    </div>
    <div className="flex justify-between text-[9px] text-gray-500 mt-2">
      <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
    </div>
  </motion.div>
);

// Line Chart avec area - Sessions
const LineChartSessions = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: 30 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className={`glass-card rounded-2xl p-5 shadow-2xl shadow-cyan-500/10 ${className}`}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-gray-300">Sessions Trend</span>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1"
      >
        <TrendingUp className="w-3 h-3" /> 24%
      </motion.span>
    </div>
    <div className="relative h-28">
      <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
          <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          d="M0,65 Q20,60 35,55 T70,45 T105,50 T140,30 T175,35 T200,15 L200,80 L0,80 Z"
          fill="url(#lineArea)"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          d="M0,65 Q20,60 35,55 T70,45 T105,50 T140,30 T175,35 T200,15"
          fill="none" stroke="url(#lineStroke)" strokeWidth="3" strokeLinecap="round"
        />
        {[{x:0,y:65},{x:35,y:55},{x:70,y:45},{x:105,y:50},{x:140,y:30},{x:175,y:35},{x:200,y:15}].map((p,i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.08, type: "spring", stiffness: 300 }}
            cx={p.x} cy={p.y} r="4" fill="#0f0f0f" stroke="#06b6d4" strokeWidth="2"
          />
        ))}
      </svg>
    </div>
    <div className="flex justify-between text-[9px] text-gray-500 mt-1">
      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
    </div>
  </motion.div>
);

// Mini Sparkline Chart
const SparklineChart = ({ className = "", color = "purple" }: { className?: string; color?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className={`${className}`}
  >
    <svg className="w-full h-10" viewBox="0 0 100 30" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`spark-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color === "purple" ? "rgba(168,85,247,0.3)" : "rgba(6,182,212,0.3)"} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        d="M0,25 Q10,22 20,20 T40,15 T60,18 T80,8 T100,5"
        fill="none"
        stroke={color === "purple" ? "#a855f7" : "#06b6d4"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        d="M0,25 Q10,22 20,20 T40,15 T60,18 T80,8 T100,5 L100,30 L0,30 Z"
        fill={`url(#spark-${color})`}
      />
    </svg>
  </motion.div>
);

// KPI Card avec animation
const KPICard = ({
  icon: Icon,
  label,
  value,
  change,
  positive = true,
  delay = 0,
  color = "purple"
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  change: string;
  positive?: boolean;
  delay?: number;
  color?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02, y: -2 }}
    className="glass-card rounded-2xl p-5 shadow-xl relative overflow-hidden group"
  >
    {/* Glow effect on hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${color === "purple" ? "from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10" : "from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/10 group-hover:to-blue-600/10"} transition-all duration-300`} />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color === "purple" ? "from-purple-500/20 to-pink-500/20" : "from-cyan-500/20 to-blue-500/20"} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${color === "purple" ? "text-purple-400" : "text-cyan-400"}`} />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.5, type: "spring" }}
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
        >
          {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </motion.div>
      </div>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-3xl font-bold">
        <AnimatedCounter value={value} duration={1.5} />
        {label.includes("Rate") && "%"}
        {label.includes("Revenue") && "K"}
      </p>
      <SparklineChart color={color} className="mt-3" />
    </div>
  </motion.div>
);

// Realtime indicator
const RealtimeIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8 }}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
    <span className="text-gray-300"><AnimatedCounter value={1247} /> users online</span>
  </motion.div>
);

// =============================================================================
// PAGE PRINCIPALE
// =============================================================================

export default function HomePage() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* ===================================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center grain-overlay py-8">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[80px]"
        />

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Layout 3 colonnes - Charts | Content | Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] xl:grid-cols-[340px_1fr_340px] gap-8 items-center">

            {/* Colonne gauche - Charts */}
            <div className="hidden lg:flex flex-col gap-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <DonutChart />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <BarChartRevenue />
              </motion.div>
            </div>

            {/* Colonne centrale - Hero Content */}
            <div className="text-center">
              {/* Realtime badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <RealtimeIndicator />
              </motion.div>

              {/* Titre */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              >
                Transform data into
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
                  powerful insights
                </span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed"
              >
                Professional dashboard templates that turn your analytics into actionable business decisions.
                <span className="text-white font-medium"> Setup in 60 seconds.</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <Link
                  href="/products"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Browse all templates
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <Link
                  href="/products/GA4-report-template"
                  className="group px-8 py-4 glass-card rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 ml-0.5" fill="white" />
                  </motion.span>
                  See Live Demo
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
              >
                {[
                  { icon: Check, text: "No credit card" },
                  { icon: Zap, text: "Instant setup" },
                  { icon: Shield, text: "Secure & private" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <item.icon className="w-4 h-4 text-green-400" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Colonne droite - Charts */}
            <div className="hidden lg:flex flex-col gap-5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <LineChartSessions />
              </motion.div>

              {/* Mini stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-5 shadow-2xl shadow-cyan-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Conversion Rate</p>
                    <p className="text-3xl font-bold"><AnimatedCounter value={4} suffix="." /><AnimatedCounter value={8} suffix="%" /></p>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* KPI Cards - Below hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <KPICard icon={Users} label="Total Users" value={284567} change="+12.5%" delay={0.6} color="purple" />
            <KPICard icon={Eye} label="Page Views" value={1847293} change="+8.2%" delay={0.7} color="cyan" />
            <KPICard icon={MousePointerClick} label="Click Rate" value={3} change="+15.3%" delay={0.8} color="purple" positive />
            <KPICard icon={DollarSign} label="Revenue" value={89} change="+22.1%" delay={0.9} color="cyan" />
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full p-1 cursor-pointer hover:border-white/40 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================================================================== */}
      {/* FEATURES SECTION */}
      {/* ===================================================================== */}
      <section className="relative py-32 grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "One-Click Setup", description: "Connect your data source and go live in under 60 seconds.", color: "from-yellow-500 to-orange-500" },
              { icon: Palette, title: "Beautiful Design", description: "Professionally crafted visualizations that make your data shine.", color: "from-purple-500 to-pink-500" },
              { icon: LineChart, title: "50+ Visualizations", description: "Charts, tables, KPIs, and more in one comprehensive view.", color: "from-cyan-500 to-blue-500" },
              { icon: Shield, title: "Real-time Updates", description: "Always connected to your live data. See changes instantly.", color: "from-green-500 to-cyan-500" },
              { icon: Smartphone, title: "Fully Responsive", description: "Review performance on any device - desktop, tablet, or mobile.", color: "from-pink-500 to-rose-500" },
              { icon: Code2, title: "Fully Customizable", description: "Match your brand colors, add custom metrics, make it yours.", color: "from-blue-500 to-indigo-500" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300"
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
      {/* CTA FINAL */}
      {/* ===================================================================== */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-cyan-900/40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to upgrade
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  your reporting?
                </span>
              </motion.h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join <span className="text-white font-semibold">1,000+</span> marketers creating stunning dashboards with DashKit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/products" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2">
                  Browse all templates
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/products/GA4-report-template" className="px-8 py-4 glass-card rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 border border-cyan-500/30 hover:border-cyan-500/60">
                  <Play className="w-4 h-4" fill="currentColor" />
                  See Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
