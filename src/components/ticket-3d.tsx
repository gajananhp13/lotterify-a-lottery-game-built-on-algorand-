"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Ticket3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ticketImage = PlaceHolderImages.find(p => p.id === 'ticket-graffiti');

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    if (!container || !card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      const rotateX = -(y / height) * 25;
      const rotateY = (x / width) * 25;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!ticketImage) {
    return null;
  }

  return (
    <div ref={containerRef} className="ticket-3d-container w-full max-w-sm">
      <div ref={cardRef} className="ticket-3d aspect-[3/4] relative w-full rounded-xl shadow-2xl">
        <Image
          src={ticketImage.imageUrl}
          alt={ticketImage.description}
          data-ai-hint={ticketImage.imageHint}
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)',
            transform: 'translateZ(20px)'
          }}
        />
      </div>
    </div>
  );
}