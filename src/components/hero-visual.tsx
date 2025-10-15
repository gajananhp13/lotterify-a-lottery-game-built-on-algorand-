"use client";

import { motion } from "framer-motion";
import { Bitcoin, BrainCircuit, Blocks, Sparkles, Cpu, Bot, Network, Code } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const icons = [
  Bitcoin,
  BrainCircuit,
  Blocks,
  Sparkles,
  Cpu,
  Bot,
  Network,
  Code
];

type IconPosition = {
  x: number;
  y: number;
  duration: number;
  delay: number;
};

const HeroVisual = () => {
  const [positions, setPositions] = useState<IconPosition[]>([]);

  useEffect(() => {
    // Randomize positions on the client-side to avoid hydration errors
    const newPositions = icons.map(() => ({
      x: Math.random() * 80 + 10, // %
      y: Math.random() * 80 + 10, // %
      duration: Math.random() * 5 + 5, // 5-10s
      delay: Math.random() * 2, // 0-2s
    }));
    setPositions(newPositions);
  }, []);

  return (
    <motion.div className="relative h-96 w-full max-w-lg rounded-2xl border border-primary/20 bg-card/30 p-4 shadow-2xl shadow-primary/20 backdrop-blur-sm overflow-hidden">
      {/* Background Grid and Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      <div className="absolute inset-0 z-0 mix-blend-color-dodge">
        <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-1/2 w-1/2 rounded-full bg-secondary/20 opacity-50 blur-3xl" />
      </div>


      {positions.length > 0 && icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: positions[i].duration,
            delay: positions[i].delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Icon className="h-6 w-6 text-white/70" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroVisual;
