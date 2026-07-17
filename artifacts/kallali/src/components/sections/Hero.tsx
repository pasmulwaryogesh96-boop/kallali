"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-kallali-green-muted/40 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-gray-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kallali-green-muted text-kallali-green-dark text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-kallali-green"></span>
              Kallali 2.0 is now available
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
            >
              Do more with <br className="hidden md:block" />
              <span className="text-kallali-green">less friction.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Sustainable productivity for teams that care about deep work. We cut the noise so you can focus on what actually moves the needle.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#"
                className="w-full sm:w-auto bg-kallali-green hover:bg-kallali-green-dark text-white rounded-full px-8 py-3.5 text-base font-semibold transition-all shadow-lg shadow-kallali-green/25 flex items-center justify-center gap-2 active:scale-95"
              >
                Start for free
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 rounded-full px-8 py-3.5 text-base font-semibold transition-all flex items-center justify-center active:scale-95"
              >
                Book a demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-kallali-green" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-kallali-green" /> 14-day free trial
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-2xl lg:max-w-none relative"
          >
            {/* Abstract UI representation */}
            <div className="relative rounded-2xl bg-white border border-gray-100 shadow-2xl p-2 aspect-[4/3] md:aspect-auto md:h-[500px] flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                </div>
              </div>
              <div className="flex flex-1 overflow-hidden bg-gray-50 rounded-b-xl">
                {/* Sidebar mock */}
                <div className="w-16 md:w-48 bg-white border-r border-gray-100 p-4 flex flex-col gap-4">
                  <div className="w-full h-8 bg-gray-100 rounded-md animate-pulse" />
                  <div className="w-3/4 h-4 bg-gray-100 rounded mt-4" />
                  <div className="w-full h-4 bg-gray-100 rounded" />
                  <div className="w-5/6 h-4 bg-gray-100 rounded" />
                  <div className="w-full h-4 bg-gray-100 rounded" />
                </div>
                {/* Content mock */}
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 relative">
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-8 bg-gray-200 rounded-md" />
                    <div className="w-24 h-8 bg-kallali-green-muted rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="h-24 bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-kallali-green/10 flex items-center justify-center">
                        <div className="w-4 h-4 bg-kallali-green rounded-full" />
                      </div>
                      <div className="w-1/2 h-4 bg-gray-100 rounded" />
                    </div>
                    <div className="h-24 bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-400 rounded-full" />
                      </div>
                      <div className="w-2/3 h-4 bg-gray-100 rounded" />
                    </div>
                    <div className="h-24 hidden md:flex bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-400 rounded-full" />
                      </div>
                      <div className="w-1/2 h-4 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-4 md:p-6 mt-2 relative overflow-hidden">
                    {/* Floating green element for focus */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-8 top-8 w-16 h-16 bg-kallali-green/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-kallali-green/20"
                    >
                      <CheckCircle2 className="text-kallali-green" size={24} />
                    </motion.div>
                    <div className="w-1/4 h-5 bg-gray-200 rounded mb-6" />
                    <div className="space-y-4">
                      <div className="w-full h-12 bg-gray-50 rounded-lg flex items-center px-4">
                        <div className="w-4 h-4 rounded-full border-2 border-kallali-green mr-4" />
                        <div className="w-1/2 h-3 bg-gray-200 rounded" />
                      </div>
                      <div className="w-full h-12 bg-gray-50 rounded-lg flex items-center px-4">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-4" />
                        <div className="w-3/4 h-3 bg-gray-200 rounded" />
                      </div>
                      <div className="w-full h-12 bg-gray-50 rounded-lg flex items-center px-4">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-4" />
                        <div className="w-2/3 h-3 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-kallali-green-muted flex items-center justify-center">
                <span className="text-kallali-green font-bold text-lg">+12</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Hours saved</p>
                <p className="text-xs text-gray-500">Per week, per team</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}