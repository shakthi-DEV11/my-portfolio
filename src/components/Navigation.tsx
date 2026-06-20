"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, BookOpen, Terminal, Briefcase, GitBranch, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "hero", icon: Home },
  { name: "About", id: "about", icon: User },
  { name: "Journey", id: "education", icon: BookOpen },
  { name: "Skills", id: "skills", icon: Terminal },
  { name: "Projects", id: "projects", icon: Briefcase },
  { name: "GitHub", id: "github", icon: GitBranch },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 glass-panel rounded-full xl:hidden hover:bg-white/10 transition-colors border border-glass-border"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Desktop Left Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative p-3 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? 'bg-primary/20 border border-primary/50' : 'bg-transparent border border-transparent group-hover:bg-white/5 group-hover:border-white/10'}`} />
              <Icon className={`w-5 h-5 relative z-10 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-500 group-hover:text-white'}`} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1 bg-[#111] text-xs font-mono text-white rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-white/10">
                {item.name}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 glass-panel border-l border-glass-border p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-primary font-mono text-sm">&lt;Menu /&gt;</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-mono text-sm">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
