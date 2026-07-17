"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sprout, TrendingUp, CloudSun } from "lucide-react";

const floatingCards = [
  {
    icon: <CloudSun className="w-4 h-4 text-kallali-green" />,
    label: "Weather Alert",
    value: "Rain expected Thursday",
    sub: "Plan irrigation accordingly",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-kallali-green" />,
    label: "Maize Price",
    value: "KSh 4,200 / bag",
    sub: "↑ 8% from last week",
  },
  {
    icon: <Sprout className="w-4 h-4 text-kallali-green" />,
    label: "Crop Health",
    value: "All crops healthy",
    sub: "Next check in 3 days",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-green-100/30 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-50/40 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-kallali-green text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-kallali-green animate-pulse" />
              AI-Powered Farming Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight"
          >
            Empowering
            <br />
            <span className="text-kallali-green">Farmers</span>
            <br />
            with AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-gray-500 max-w-lg leading-relaxed"
          >
            Manage your farm, finances, marketplace, and crops with{" "}
            <span className="font-semibold text-gray-700">Kemraj</span> — your AI farming companion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-kallali-green text-white font-semibold text-sm hover:bg-kallali-green-dark transition-all shadow-lg shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-gray-700 font-semibold text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-0.5"
            >
              <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-kallali-green fill-kallali-green" />
              </div>
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {["🧑🏾‍🌾", "👩🏿‍🌾", "🧑🏽‍🌾", "👨🏾‍🌾"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">12,000+</span> farmers already growing smarter
            </p>
          </motion.div>
        </div>

        {/* Right — floating dashboard cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative hidden lg:flex flex-col gap-4"
        >
          {/* Main dashboard card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Farm Overview</p>
                <p className="text-lg font-bold text-gray-900 mt-0.5">Kiambu Farm — July 2026</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-green-50 text-kallali-green text-xs font-semibold">Live</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { label: "Hectares", value: "4.2" },
                { label: "Active Crops", value: "3" },
                { label: "Revenue (KSh)", value: "182K" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
            {/* Progress bars */}
            <div className="space-y-3">
              {[
                { crop: "Maize", pct: 72 },
                { crop: "Tomatoes", pct: 45 },
                { crop: "Beans", pct: 89 },
              ].map((c) => (
                <div key={c.crop}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600 font-medium">{c.crop}</span>
                    <span className="text-gray-400">{c.pct}% growth</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-kallali-green rounded-full"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating notification cards */}
          <div className="grid grid-cols-3 gap-3">
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 shadow-md p-3"
              >
                <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center mb-2">
                  {card.icon}
                </div>
                <p className="text-xs font-semibold text-gray-500">{card.label}</p>
                <p className="text-xs font-bold text-gray-900 mt-0.5 leading-tight">{card.value}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
