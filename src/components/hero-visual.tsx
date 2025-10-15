
"use client";

import { motion } from "framer-motion";
import { Bitcoin, BrainCircuit, Blocks, Sparkles, Cpu, Bot, Network, Code, DollarSign, Euro, IndianRupee, Atom, Hexagon, Ticket, Gem } from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
  Bitcoin,
  BrainCircuit,
  Blocks,
  Sparkles,
  Cpu,
  Bot,
  Network,
  Code,
  DollarSign,
  Euro,
  IndianRupee,
  Atom,
  Hexagon,
  Ticket,
  Gem
];

const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--primary))",
    "hsl(var(--accent))",
    "hsl(var(--secondary))",
];

type IconState = {
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: string;
};

const HeroVisual = () => {
  const [iconStates, setIconStates] = useState<IconState[]>([]);

  useEffect(() => {
    // Randomize states on the client-side to avoid hydration errors
    const newStates = icons.map((_, i) => ({
      x: Math.random() * 80 + 10, // %
      y: Math.random() * 80 + 10, // %
      duration: Math.random() * 5 + 7, // 7-12s
      delay: Math.random() * 3, // 0-3s
      color: colors[i % colors.length],
    }));
    setIconStates(newStates);
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

      {iconStates.length > 0 && icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          style={{
            left: `${iconStates[i].x}%`,
            top: `${iconStates[i].y}%`,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
            filter: [
              `drop-shadow(0 0 4px ${iconStates[i].color})`,
              `drop-shadow(0 0 8px ${colors[(i + 1) % colors.length]})`,
              `drop-shadow(0 0 4px ${iconStates[i].color})`,
            ]
          }}
          transition={{
            duration: iconStates[i].duration,
            delay: iconStates[i].delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Icon className="h-6 w-6" style={{ color: iconStates[i].color }} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroVisual;
