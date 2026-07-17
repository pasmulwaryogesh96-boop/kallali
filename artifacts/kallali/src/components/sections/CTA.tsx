"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-kallali-green-muted/30" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
        >
          Ready to reclaim your focus?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Join thousands of professionals who have ditched the noise and found a better way to work.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#"
            className="w-full sm:w-auto bg-kallali-green hover:bg-kallali-green-dark text-white rounded-full px-8 py-4 text-lg font-semibold transition-all shadow-lg shadow-kallali-green/25 flex items-center justify-center gap-2 active:scale-95"
          >
            Start your free trial
            <ArrowRight size={20} />
          </a>
          <p className="text-sm text-gray-500 mt-4 sm:mt-0 sm:absolute sm:-bottom-8">
            14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}