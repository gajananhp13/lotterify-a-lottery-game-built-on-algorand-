import Image from 'next/image';
import type { Ticket } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Clover } from 'lucide-react';

type TrendingTicketItemProps = {
  ticket: Ticket;
};


const TicketShape = () => (
    <div
      className="absolute inset-0 bg-green-400"
      style={{
        maskImage: `
          radial-gradient(circle at 12px 12px, transparent 12px, black 12.5px),
          radial-gradient(circle at calc(100% - 12px) 12px, transparent 12px, black 12.5px),
          radial-gradient(circle at 12px calc(100% - 12px), transparent 12px, black 12.5px),
          radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), transparent 12px, black 12.5px)
        `,
        maskComposite: 'destination-out',
        WebkitMaskComposite: 'destination-out',
      }}
    >
        <div className="absolute inset-y-0 left-0 w-8 bg-black/5" style={{
            maskImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, black 10px, black 20px)',
            maskSize: '100% 20px',
        }}/>
        <div className="absolute inset-y-0 right-0 w-8 bg-black/5" style={{
            maskImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, black 10px, black 20px)',
            maskSize: '100% 20px',
        }}/>
    </div>
)

export default function TrendingTicketItem({ ticket }: TrendingTicketItemProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === ticket.image) || PlaceHolderImages[0];

  return (
    <div className="relative w-[360px] h-[160px] group">
      <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
        <TicketShape />
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="absolute w-px h-full top-0 left-1/2 -translate-x-1/2 bg-black/10"></div>
            <div className="absolute h-px w-full top-1/2 -translate-y-1/2 bg-black/10"></div>
            <div className="relative z-10 p-2 bg-white/80 rounded-md shadow-lg backdrop-blur-sm">
                <Clover className="w-16 h-16 text-green-600" />
            </div>
            <p className="absolute right-0 font-mono text-sm text-black/50 -rotate-90">REAL</p>
        </div>
      </div>
    </div>
  );
}
