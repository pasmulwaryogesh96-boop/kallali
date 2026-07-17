"use client";
import { motion } from "framer-motion";
import { Bot, CloudSun, BarChart3, Wallet, ShoppingBag, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Farming Assistant",
    description:
      "Ask Kemraj anything — from planting schedules to pest identification. Get expert advice tailored to your specific crops, soil, and climate.",
    color: "bg-green-50 text-kallali-green",
    badge: "Powered by Kemraj",
  },
  {
    icon: <CloudSun className="w-6 h-6" />,
    title: "Weather Intelligence",
    description:
      "Hyperlocal 14-day forecasts with AI-generated farm alerts. Know exactly when to plant, irrigate, or harvest based on real weather data.",
    color: "bg-sky-50 text-sky-600",
    badge: "Hyperlocal",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Market Prices",
    description:
      "Track real-time commodity prices across Kenya's major markets. Sell smarter — see trends and get AI recommendations on the best time to sell.",
    color: "bg-amber-50 text-amber-600",
    badge: "Real-time",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Farm Finance",
    description:
      "Track income, expenses, and loans in one place. Get AI-powered financial insights and discover microfinance options designed for farmers.",
    color: "bg-purple-50 text-purple-600",
    badge: "Smart Insights",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Marketplace",
    description:
      "Buy inputs — seeds, fertilizers, tools — and sell your produce directly to buyers. Cut out middlemen and maximize your farm revenue.",
    color: "bg-rose-50 text-rose-600",
    badge: "Direct Trade",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Digital Farm Diary",
    description:
      "Log planting dates, treatments, yields, and observations. Your AI diary learns from your history to give better advice every season.",
    color: "bg-teal-50 text-teal-600",
    badge: "Always Learning",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-kallali-green text-xs font-semibold uppercase tracking-wide mb-4">
            Everything You Need
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            A complete toolkit for the modern farmer
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Every tool built with farmers in mind — simple to use, powerful under the hood.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.color}`}>
                  {f.icon}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 text-[11px] font-medium border border-gray-100">
                  {f.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>

              {/* Subtle hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-kallali-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
