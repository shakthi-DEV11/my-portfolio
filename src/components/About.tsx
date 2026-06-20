"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [textIndex, setTextIndex] = useState(0);

  const lines = [
    { text: "> whoami", isCommand: true },
    { text: "name: Shakthi Nagarajan", isCommand: false },
    { text: "role: Web Developer", isCommand: false },
    { text: "education: B.Tech IT (2023 - 2027)", isCommand: false },
    { text: "status: Motivated student seeking a Web Developer internship.", isCommand: false },
  ];

  useEffect(() => {
    if (isInView && textIndex < lines.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, lines[textIndex].isCommand ? 800 : 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, textIndex, lines]);

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">&lt;</span>
          About Me 
          <span className="text-primary"> /&gt;</span>
        </h2>

        <div className="glass-panel rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,245,255,0.1)]">
          {/* Terminal Header */}
          <div className="bg-white/5 border-b border-glass-border px-4 py-3 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="mx-auto text-xs font-mono text-gray-400">shakthi@portfolio:~</div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-lg min-h-[350px]">
            <div className="mb-6 space-y-3">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={i <= textIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  className={`${line.isCommand ? 'text-primary font-bold' : 'text-gray-300 ml-4'}`}
                >
                  {line.isCommand ? line.text : (
                    <div className="flex flex-col sm:flex-row sm:gap-2">
                      <span className="text-secondary">{line.text.split(': ')[0]}:</span>
                      <span className="text-white">{line.text.split(': ')[1]}</span>
                    </div>
                  )}
                </motion.div>
              ))}
              {textIndex >= lines.length && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-3 h-5 bg-primary mt-1 ml-4 inline-block"
                />
              )}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={textIndex >= lines.length ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <p className="text-gray-400 leading-relaxed">
                Proficient in HTML, CSS, JavaScript, and Core Java with hands-on experience developing responsive and user-friendly web applications.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Passionate about Front-End Development, UI/UX Design, and creating intuitive digital experiences while continuously improving technical and problem-solving skills.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
