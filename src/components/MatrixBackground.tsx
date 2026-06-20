"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン";
    const charArray = chars.split("");

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    
    const drops: { y: number; speed: number }[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -100,
        speed: 0.5 + Math.random() * 1.5
      };
    }

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize + fontSize / 2;
        const y = drops[i].y * fontSize;

        ctx.fillStyle = "#00FF41";
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#00FF41";
        ctx.fillText(text, x, y);
        
        if (Math.random() > 0.8) {
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#FFFFFF";
          ctx.fillText(text, x, y);
        }

        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.95) {
          drops[i].y = 0;
          drops[i].speed = 0.5 + Math.random() * 1.5;
        }

        drops[i].y += drops[i].speed;
      }
    };

    let animationFrame: number;
    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const loop = (time: number) => {
      animationFrame = requestAnimationFrame(loop);
      const delta = time - lastTime;
      
      if (delta > interval) {
        lastTime = time - (delta % interval);
        draw();
      }
    };
    animationFrame = requestAnimationFrame(loop);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops.length = 0;
      for (let i = 0; i < columns; i++) {
        drops[i] = {
          y: Math.random() * -100,
          speed: 0.5 + Math.random() * 1.5
        };
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      style={{ y: yParallax }}
      className="fixed inset-[-100px] z-0 pointer-events-none opacity-[0.18]"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))",
          backgroundSize: "100% 4px, 3px 100%",
          mixBlendMode: "overlay"
        }}
      />
      
      <div className="absolute inset-0 bg-green-900/10 pointer-events-none mix-blend-screen" />
      
      <motion.div
        animate={{ opacity: [0.95, 1, 0.95, 0.98, 0.95] }}
        transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
        className="absolute inset-0 bg-black/5 pointer-events-none"
      />
    </motion.div>
  );
}
