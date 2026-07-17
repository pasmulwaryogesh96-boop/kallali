"use client";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl bg-gradient-to-br from-kallali-green to-kallali-green-dark p-12 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Your farm, smarter.
              <br />
              Starting today.
            </h2>
            <p className="mt-5 text-lg text-green-100 max-w-xl mx-auto leading-relaxed">
              Join thousands of farmers already using Kallali to grow more, earn more, and worry less. Free to start — no credit card needed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-kallali-green font-bold text-sm hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                Talk to our team
              </a>
            </div>
            <p className="mt-6 text-sm text-green-200/80">
              Available on iOS, Android, and web · Works offline · Supports Swahili
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
