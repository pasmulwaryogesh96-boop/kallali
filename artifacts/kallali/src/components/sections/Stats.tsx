"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "12,000+", label: "Active Farmers", sub: "across East Africa" },
  { value: "8 counties", label: "Coverage", sub: "growing every month" },
  { value: "KSh 24M+", label: "Marketplace Volume", sub: "traded on Kallali" },
  { value: "93%", label: "Farmer Satisfaction", sub: "from monthly surveys" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-kallali-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by farmers across Kenya
          </h2>
          <p className="mt-3 text-green-100 text-base">Real numbers from real farms.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <p className="text-4xl font-extrabold text-white">{s.value}</p>
              <p className="text-base font-semibold text-green-100 mt-1">{s.label}</p>
              <p className="text-sm text-green-200/70 mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
