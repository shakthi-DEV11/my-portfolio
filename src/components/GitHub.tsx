"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GitHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Generate mock contribution graph data
  const weeks = Array.from({ length: 52 });
  const days = Array.from({ length: 7 });

  return (
    <section id="github" className="py-24 px-6 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-2xl p-6 sm:p-10 border border-glass-border"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="fill-white">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              GitHub Activity
            </h2>
            <p className="text-gray-400 text-sm mt-1">1,240 contributions in the last year</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">42</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">Repos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">300+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">Stars</div>
            </div>
          </div>
        </div>

        {/* Mock Contribution Graph */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-1 min-w-max">
            {weeks.map((_, wIndex) => (
              <div key={wIndex} className="flex flex-col gap-1">
                {days.map((_, dIndex) => {
                  // Randomize contribution intensity for the mock
                  const intensity = Math.random();
                  let colorClass = "bg-[#161b22]";
                  if (intensity > 0.9) colorClass = "bg-[#39d353]";
                  else if (intensity > 0.7) colorClass = "bg-[#26a641]";
                  else if (intensity > 0.4) colorClass = "bg-[#006d32]";
                  else if (intensity > 0.2) colorClass = "bg-[#0e4429]";

                  return (
                    <motion.div
                      key={dIndex}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.2, delay: (wIndex * 0.01) + (dIndex * 0.01) }}
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${colorClass}`}
                      title="Mock contribution"
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-400">
            <span>Less</span>
            <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
            <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
            <span>More</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
