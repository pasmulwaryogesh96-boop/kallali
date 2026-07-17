"use client";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Mic, Brain } from "lucide-react";

const messages = [
  {
    from: "user",
    text: "My maize leaves are turning yellow. What should I do?",
  },
  {
    from: "ai",
    text: "This looks like nitrogen deficiency. Given your soil test from March, I recommend applying CAN fertiliser at 50kg/acre. Also check for aphids — conditions this week are favourable for them. Want me to add a treatment reminder to your farm diary?",
  },
  {
    from: "user",
    text: "Yes please. Also, when is the best time to sell this season?",
  },
  {
    from: "ai",
    text: "Based on current market trends, maize prices typically peak in August–September in Nairobi markets. I'll alert you when prices hit your target of KSh 4,500/bag.",
  },
];

const capabilities = [
  { icon: <MessageSquare className="w-5 h-5" />, label: "Chat in English, Swahili, or your local language" },
  { icon: <Mic className="w-5 h-5" />, label: "Voice input — just speak to Kemraj hands-free" },
  { icon: <Brain className="w-5 h-5" />, label: "Learns your farm's history every season" },
  { icon: <Sparkles className="w-5 h-5" />, label: "Proactive alerts before problems occur" },
];

export default function Kemraj() {
  return (
    <section id="kemraj" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-kallali-green text-xs font-semibold uppercase tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Meet Your AI Companion
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Meet <span className="text-kallali-green">Kemraj</span>,
              <br />
              your farming expert.
            </h2>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Kemraj is an AI companion built specifically for African farmers. It understands your crops, your market,
              and your challenges — and it's available 24/7, even offline.
            </p>
            <p className="mt-3 text-base text-gray-400 leading-relaxed">
              Whether you're dealing with a pest outbreak at 2am or trying to decide which market to sell at, Kemraj
              has the answer. Trained on local agronomic data, regional weather patterns, and real market prices.
            </p>

            <ul className="mt-8 space-y-3">
              {capabilities.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-kallali-green flex-shrink-0">
                    {c.icon}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{c.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-kallali-green text-white font-semibold text-sm hover:bg-kallali-green-dark transition-all shadow-lg shadow-green-200"
              >
                <Sparkles className="w-4 h-4" />
                Chat with Kemraj
              </a>
            </div>
          </motion.div>

          {/* Right — chat UI mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white">
                <div className="w-9 h-9 rounded-xl bg-kallali-green flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Kemraj</p>
                  <p className="text-xs text-kallali-green font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-kallali-green inline-block" />
                    Online — ready to help
                  </p>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 bg-gray-50/50">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from === "ai" && (
                      <div className="w-7 h-7 rounded-lg bg-kallali-green flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-kallali-green text-white rounded-br-sm"
                          : "bg-white border border-gray-100 text-gray-700 shadow-sm rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-5 py-4 border-t border-gray-100 bg-white flex items-center gap-3">
                <div className="flex-1 h-10 rounded-xl bg-gray-50 border border-gray-200 px-4 flex items-center">
                  <span className="text-sm text-gray-400">Ask Kemraj anything…</span>
                </div>
                <button className="w-10 h-10 rounded-xl bg-kallali-green flex items-center justify-center hover:bg-kallali-green-dark transition-colors flex-shrink-0">
                  <Mic className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
