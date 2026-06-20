"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  { year: "2025 (July)", title: "Web Development Intern", description: "Completed hands-on training in web development at Crescent Infotech, Erode. Built responsive pages with HTML, CSS, JavaScript." },
  { year: "2023 - 2027", title: "B.Tech Information Technology", description: "Studying at Gnanamani College of Technology. CGPA: 6.5" },
  { year: "2022 - 2023", title: "Higher Secondary (HSC)", description: "Hindu Higher Secondary School. Percentage: 55.3%" },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 px-6 relative" ref={containerRef}>
      <h2 className="text-3xl sm:text-5xl font-bold mb-20 text-center">
        <span className="text-secondary">&lt;</span>
        Journey 
        <span className="text-secondary"> /&gt;</span>
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* The Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border transform md:-translate-x-1/2" />
        <motion.div 
          className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-secondary transform md:-translate-x-1/2 origin-top"
          style={{ scaleY: lineHeight }}
        />

        {/* Timeline Items */}
        {timelineData.map((item, i) => (
          <div key={i} className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Center dot */}
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-secondary transform -translate-x-1/2 z-10" />

            <div className="hidden md:block md:w-1/2" />

            <motion.div 
              className={`w-[calc(100%-50px)] ml-[50px] md:ml-0 md:w-5/12 glass-panel p-6 rounded-xl ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {item.year && <div className="text-secondary font-mono text-sm mb-2">{item.year}</div>}
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
