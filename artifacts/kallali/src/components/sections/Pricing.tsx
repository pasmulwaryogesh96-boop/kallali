"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const plans = [
    {
      name: "Individual",
      price: "$0",
      description: "Perfect for solo creators and freelancers looking to organize their work.",
      features: [
        "Up to 3 active projects",
        "Unlimited tasks & notes",
        "Basic Focus Mode",
        "7-day history"
      ],
      cta: "Get started for free",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "For professionals who need serious tools for deep, sustained work.",
      features: [
        "Unlimited projects",
        "Advanced Focus Mode analytics",
        "Custom workflows",
        "Priority support",
        "Unlimited history"
      ],
      cta: "Start 14-day trial",
      popular: true
    },
    {
      name: "Team",
      price: "$24",
      period: "/user/month",
      description: "Bring calm, asynchronous collaboration to your entire organization.",
      features: [
        "Everything in Pro",
        "Team workspaces",
        "Asynchronous standups",
        "Admin controls",
        "SSO integration"
      ],
      cta: "Contact sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Simple, transparent pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Start for free, upgrade when you need more power. No hidden fees.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border",
                plan.popular 
                  ? "bg-white border-kallali-green shadow-xl shadow-kallali-green/10" 
                  : "bg-gray-50 border-gray-100 shadow-sm"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-kallali-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="text-kallali-green mt-0.5" size={18} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#"
                className={cn(
                  "w-full py-3.5 px-6 rounded-full text-center font-semibold text-sm transition-all active:scale-95",
                  plan.popular
                    ? "bg-kallali-green hover:bg-kallali-green-dark text-white shadow-md"
                    : "bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900"
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}