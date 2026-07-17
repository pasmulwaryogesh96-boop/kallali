"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Before Kallali, our team was fragmented across Jira, Notion, and Slack. We spent more time organizing work than doing it. This tool brought the quiet confidence back to our engineering org.",
      author: "Sarah Jenkins",
      role: "VP Engineering, Formata"
    },
    {
      quote: "I didn't realize how much the constant pinging of other apps was destroying my deep work. The Focus Mode alone justifies the entire platform.",
      author: "David Chen",
      role: "Independent Designer"
    },
    {
      quote: "It's the only project management tool that doesn't feel like a spreadsheet. It actually feels like a space where thoughtful work happens.",
      author: "Elena Rodriguez",
      role: "Product Lead, Nexus"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Trusted by focused teams.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-kallali-green-muted mb-6" size={32} />
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}