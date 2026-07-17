"use client";

import { motion } from "framer-motion";
import { Zap, Shield, SplitSquareHorizontal, Layers, LineChart, MessageSquare } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <SplitSquareHorizontal size={24} />,
      title: "Focused Workspaces",
      description: "Separate your deep work from your quick tasks. Context switching is the enemy of productivity."
    },
    {
      icon: <Zap size={24} />,
      title: "Frictionless Capture",
      description: "Jot down ideas at the speed of thought. Hit Cmd+K, type, and get back to what you were doing."
    },
    {
      icon: <Layers size={24} />,
      title: "Sustainable Pacing",
      description: "Built-in rhythms that prevent burnout. Kallali encourages breaks and caps daily task overload."
    },
    {
      icon: <LineChart size={24} />,
      title: "Meaningful Insights",
      description: "Measure what matters. See how much time you spend in deep work versus reactive fire-fighting."
    },
    {
      icon: <Shield size={24} />,
      title: "Private by Default",
      description: "Your raw thoughts and unpolished drafts belong to you. We don't read them. We don't sell them."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Calm Collaboration",
      description: "Asynchronous updates replace endless meetings. Keep the team aligned without breaking focus."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Built for focus, designed for calm.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We stripped away the complexity of traditional project management tools. What's left is a fast, resilient system for actually getting work done.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-kallali-green-muted text-kallali-green flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}