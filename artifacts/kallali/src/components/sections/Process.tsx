"use client";
import { motion } from "framer-motion";
import { UserPlus, MapPin, Bot, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    step: "01",
    title: "Create Your Farm Profile",
    description:
      "Sign up and describe your farm — location, size, crops, and soil type. Takes less than 5 minutes.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    step: "02",
    title: "Map Your Land",
    description:
      "Use your phone to map your farm boundaries. Kallali automatically assigns hyperlocal weather data and soil insights.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    step: "03",
    title: "Chat with Kemraj",
    description:
      "Your AI companion starts learning your farm immediately — ask anything, get instant guidance in your language.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    step: "04",
    title: "Grow and Earn More",
    description:
      "Track your crops, access live market prices, and sell directly through the Kallali marketplace. More profit, less guesswork.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
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
            Simple Setup
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            No training required. If you can use WhatsApp, you can use Kallali.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-2xl bg-green-50 border-2 border-green-100 flex items-center justify-center text-kallali-green mx-auto mb-5 relative z-10 bg-white shadow-sm">
                  {s.icon}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-kallali-green text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
