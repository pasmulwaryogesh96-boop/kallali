"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Capture everything",
      description: "Dump ideas, tasks, and notes into your inbox. Don't organize yet. Just get it out of your head."
    },
    {
      number: "02",
      title: "Clarify and process",
      description: "Take 10 minutes daily to convert raw captures into actionable items, or archive them."
    },
    {
      number: "03",
      title: "Execute with focus",
      description: "Enter Focus Mode. Notifications pause. The UI strips away. It's just you and the task at hand."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6"
            >
              A workflow that respects your time.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-10"
            >
              Tools shouldn't dictate how you work, but they should encourage good habits. Our three-step methodology is baked right into the interface.
            </motion.p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                    <span className="text-kallali-green font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl bg-gray-50 border border-gray-100 p-8 shadow-inner overflow-hidden h-[500px] flex items-center justify-center">
              {/* Process Visualizer */}
              <div className="relative w-full max-w-sm">
                
                {/* Step 1 Box */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 ml-8 relative z-10"
                >
                  <div className="w-20 h-2 bg-gray-200 rounded mb-2" />
                  <div className="w-full h-2 bg-gray-100 rounded mb-1" />
                  <div className="w-2/3 h-2 bg-gray-100 rounded" />
                </motion.div>

                {/* Connecting Line */}
                <div className="absolute left-[22px] top-8 bottom-8 w-px bg-kallali-green-muted z-0" />

                {/* Step 2 Box */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-kallali-green/20 mb-4 ml-8 relative z-10 flex gap-3"
                >
                  <div className="w-4 h-4 rounded border-2 border-kallali-green flex-shrink-0" />
                  <div className="flex-1">
                    <div className="w-full h-3 bg-gray-200 rounded mb-2" />
                    <div className="flex gap-2">
                      <div className="w-12 h-4 bg-kallali-green-muted rounded-full" />
                      <div className="w-16 h-4 bg-blue-50 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 Box */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-kallali-green text-white p-5 rounded-xl shadow-lg shadow-kallali-green/20 ml-8 relative z-10"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-medium opacity-90">Focus Mode</div>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <div className="text-lg font-bold mb-1">Finalize Q3 Strategy</div>
                  <div className="text-white/70 text-sm">25:00 remaining</div>
                </motion.div>

                {/* Dots along the line */}
                <div className="absolute left-[19px] top-6 w-2 h-2 rounded-full bg-gray-300 z-10" />
                <div className="absolute left-[19px] top-1/2 w-2 h-2 rounded-full bg-kallali-green-light z-10" />
                <div className="absolute left-[19px] bottom-10 w-2 h-2 rounded-full bg-kallali-green z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}