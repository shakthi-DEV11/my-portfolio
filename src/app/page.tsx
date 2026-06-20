"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import BootScreen from "@/components/BootScreen";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import FloatingSocials from "@/components/FloatingSocials";
import MatrixBackground from "@/components/MatrixBackground";

export default function Home() {
  const [appState, setAppState] = useState<"loading" | "boot" | "ready">("loading");

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black relative">
      <MatrixBackground />
      
      {appState === "loading" && <Loader onComplete={() => setAppState("boot")} />}
      {appState === "boot" && <BootScreen onComplete={() => setAppState("ready")} />}
      
      {appState === "ready" && (
        <SmoothScroll>
          <FloatingSocials />
          <Hero />
          <About />
          <Timeline />
          <Skills />
          <Projects />
          <GitHub />
          <Contact />
          
          <footer className="py-12 border-t border-glass-border bg-[#050505]/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-gray-400 font-mono text-sm space-y-2 text-center md:text-left">
                <p>
                  <a href="mailto:shakthi11.dev@gmail.com" className="hover:text-primary transition-colors">shakthi11.dev@gmail.com</a>
                </p>
                <p>
                  <a href="https://github.com/shakthi-DEV11" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/shakthi-DEV11</a>
                </p>
                <p>
                  <a href="https://linkedin.com/in/shakthi-n-335387357" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/shakthi-n-335387357</a>
                </p>
                <p>Tirupattur, Tamil Nadu, India</p>
              </div>
              
              <div className="text-center md:text-right text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Shakthi Nagarajan. All rights reserved.</p>
                <p className="mt-2 font-mono text-xs">Built with Next.js & Framer Motion</p>
              </div>
            </div>
          </footer>
        </SmoothScroll>
      )}
    </main>
  );
}
