"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive personal portfolio website using HTML, CSS and JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: ["Responsive Design", "Modern UI", "Mobile Friendly", "Performance Optimized"],
    codeLink: "https://github.com/shakthi-DEV11",
    demoLink: "#",
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center">
          <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl flex flex-col group relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="mb-6">
                  <div className="text-xs text-secondary font-mono mb-2 uppercase tracking-wider">Features</div>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    {project.features.map((f, idx) => <li key={idx}>{f}</li>)}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-glass-border">
                  <button className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                    <Code2 className="w-4 h-4" /> Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
