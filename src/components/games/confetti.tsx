'use client';

import { useEffect, useState } from 'react';

const colors = ["#29ABE2", "#FFDA63", "#FFFFFF", "#8A2BE2", "#32CD32"];

type ConfettiPiece = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
};

const createConfettiPiece = (id: number): ConfettiPiece => ({
  id,
  x: Math.random() * 100,
  y: -10 - Math.random() * 20,
  rotation: Math.random() * 360,
  vx: Math.random() * 2 - 1,
  vy: Math.random() * 3 + 2,
  color: colors[Math.floor(Math.random() * colors.length)],
  opacity: 1,
});

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Initial burst
    const initialPieces = Array.from({ length: 150 }, (_, i) => createConfettiPiece(i));
    setPieces(initialPieces);

    const animationFrame = requestAnimationFrame(update);

    function update() {
      setPieces(prevPieces => {
        const updated = prevPieces.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          rotation: p.rotation + p.vx * 2,
          opacity: p.y > 80 ? p.opacity - 0.05 : p.opacity,
        })).filter(p => p.y < 120 && p.opacity > 0);

        // Add new pieces if needed
        if (updated.length < 50) { // Keep a stream for a bit
            const newPiece = createConfettiPiece(Date.now() + Math.random());
            updated.push(newPiece);
        }
        
        return updated;
      });
      requestAnimationFrame(update);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-4"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.opacity,
            transition: 'opacity 0.5s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
