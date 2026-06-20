"use client";

import { motion } from "framer-motion";

export default function FloatingSocials() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed bottom-0 right-6 sm:right-10 z-50 flex flex-col items-center gap-6 after:w-[1px] after:h-24 after:bg-glass-border hidden sm:flex"
    >
      <motion.a 
        href="https://github.com/shakthi-DEV11" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.1 }}
        className="text-gray-400 hover:text-primary transition-colors p-2"
        title="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
        </svg>
      </motion.a>
      
      <motion.a 
        href="https://www.linkedin.com/in/shakthi-n-335387357/" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.1 }}
        className="text-gray-400 hover:text-primary transition-colors p-2"
        title="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </motion.a>
      <motion.a 
        href="https://wa.me/916374186403" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.1 }}
        className="text-gray-400 hover:text-primary transition-colors p-2"
        title="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </motion.a>
    </motion.div>
  );
}
