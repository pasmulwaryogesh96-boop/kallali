"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "47%", label: "Decrease in context switching", suffix: "" },
    { value: "3.2", label: "Hours saved per week", suffix: "h" },
    { value: "10", label: "Thousands of active users", suffix: "k+" },
    { value: "99", label: "Percent customer satisfaction", suffix: "%" },
  ];

  return (
    <section className="py-20 bg-kallali-green text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}