"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const loadingSteps = [
  "Initializing Portfolio...",
  "Loading AI Engine...",
  "Loading Projects...",
  "Loading Creativity...",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // increment randomly between 5 and 20
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setCurrentStep(0);
    else if (progress < 50) setCurrentStep(1);
    else if (progress < 75) setCurrentStep(2);
    else setCurrentStep(3);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-primary">
      <div className="w-full max-w-md px-6">
        <div className="mb-4 flex justify-between font-mono text-sm sm:text-base">
          <span className="animate-pulse">{loadingSteps[currentStep]}</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
        
        <div className="h-2 w-full overflow-hidden rounded-full bg-glass-bg border border-glass-border">
          <motion.div
            className="h-full bg-primary"
            style={{ boxShadow: "0 0 10px #00F5FF, 0 0 20px #00F5FF" }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
