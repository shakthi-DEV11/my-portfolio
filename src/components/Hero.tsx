"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "three/src/math/MathUtils";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

function ParticleField() {
  const ref = useRef<any>();
  
  // Generate random particles
  const sphere = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000 * 3; i++) {
    sphere[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F5FF"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-secondary font-mono mb-4 text-xl tracking-widest uppercase">Hello</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">
            I&apos;M SHAKTHI
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
            WEB DEVELOPER <br />
            <span className="text-primary text-sm sm:text-lg">BUILDING MODERN DIGITAL EXPERIENCES THROUGH CODE.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider overflow-hidden rounded-sm w-full sm:w-auto inline-block text-center">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0" />
          </a>
          
          <a 
            href="/resume" 
            className="group px-8 py-4 border border-glass-border hover:border-primary text-white font-bold uppercase tracking-wider transition-colors w-full sm:w-auto rounded-sm flex items-center justify-center gap-2 glass-panel"
          >
            <Download className="w-5 h-5" /> Resume
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 font-mono text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent mt-2" />
      </motion.div>
    </section>
  );
}
