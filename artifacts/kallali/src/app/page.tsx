import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}