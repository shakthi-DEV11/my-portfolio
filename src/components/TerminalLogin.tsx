"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalLogin({ onComplete }: { onComplete: () => void }) {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.toLowerCase() === "guest" || input.toLowerCase() === "shakthi") {
        setIsError(false);
        onComplete();
      } else if (input.trim() === "") {
        // do nothing
      } else {
        setIsError(true);
        setInput("");
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-30 flex items-center justify-center bg-[#050505]"
      onClick={() => inputRef.current?.focus()}
    >
      <motion.div 
        className="glass-panel w-full max-w-2xl rounded-lg p-6 sm:p-8 font-mono shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        
        <div className="text-secondary mb-6">
          <p>SHAKTHI OS (v1.0.0)</p>
          <p>Type &apos;guest&apos; to login to the portfolio.</p>
        </div>

        <div className="flex items-center text-primary sm:text-lg">
          <span className="mr-2">login:</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none border-none flex-1 text-white"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
        
        {isError && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 mt-2"
          >
            Access denied. Please type &apos;guest&apos;.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
