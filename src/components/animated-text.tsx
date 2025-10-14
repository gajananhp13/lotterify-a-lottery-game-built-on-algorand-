"use client";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <p className={cn("animated-word", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="inline-block"
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}
