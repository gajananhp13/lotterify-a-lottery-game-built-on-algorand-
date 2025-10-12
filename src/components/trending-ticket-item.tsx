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
      className="absolute inset-0 bg-card border"
    >
    </div>
)

export default function TrendingTicketItem({ ticket }: TrendingTicketItemProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === ticket.image) || PlaceHolderImages[0];

  return (
    <div className="relative w-[360px] h-[160px] group">
      <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg overflow-hidden">
        <Image
            src={placeholderImage.imageUrl}
            alt={placeholderImage.description}
            data-ai-hint={placeholderImage.imageHint}
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
         <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-headline text-xl">Ticket #{ticket.id.toString().padStart(6, '0')}</h3>
            <p className="text-white/80 text-sm">Round #{ticket.roundNumber}</p>
        </div>
      </div>
    </div>
  );
}
