"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Core Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-mono text-primary mb-12 text-xl sm:text-2xl text-center sm:text-left">
          <span className="text-gray-500">&gt;</span> ./show_skills.sh
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-panel w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center p-4 relative group cursor-pointer hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] hover:border-primary/50 transition-all duration-300"
              title={skill.name}
            >
              {/* Tooltip */}
              <div className="absolute -top-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-glass-border whitespace-nowrap">
                {skill.name}
              </div>
              
              {/* Icon */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain"
                style={skill.invert ? { filter: "invert(1)" } : {}}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
