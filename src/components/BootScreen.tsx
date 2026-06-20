"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLogs = [
  "Booting SHAKTHI OS...",
  "[OK] Mounted file system",
  "[OK] Started Network Manager",
  "Loading Portfolio Engine...",
  "[OK] Initialized Graphics Module",
  "Connecting GitHub...",
  "[OK] Fetched repository data",
  "Loading Experience...",
  "[OK] Loaded assets",
  "Done."
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setVisibleLogs((prev) => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 150); // fast typing effect for boot sequence

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-40 bg-[#050505] p-6 font-mono text-sm sm:text-base text-secondary">
      <div className="mx-auto max-w-4xl h-full flex flex-col justify-end pb-12">
        {visibleLogs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="mb-1"
          >
            {log}
          </motion.div>
        ))}
        {visibleLogs.length < bootLogs.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-5 bg-secondary mt-1"
          />
        )}
      </div>
    </div>
  );
}
