"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/80 backdrop-blur-md border-gray-100 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-kallali-green flex items-center justify-center text-white font-bold text-xl group-hover:bg-kallali-green-dark transition-colors">
              K
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-kallali-green transition-colors">
              Kallali
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-kallali-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Log in
            </a>
            <a
              href="#"
              className="bg-kallali-green hover:bg-kallali-green-dark text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-95"
            >
              Get started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 px-6 md:hidden shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <a href="#" className="text-base font-medium text-gray-800">
                Log in
              </a>
              <a
                href="#"
                className="bg-kallali-green text-white text-center rounded-full px-5 py-3 text-base font-semibold w-full mt-2"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}