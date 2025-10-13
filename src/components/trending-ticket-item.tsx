import Image from 'next/image';
import type { Ticket } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Clover } from 'lucide-react';
import TicketShape from './ticket-shape';

type TrendingTicketItemProps = {
  ticket: Ticket;
};

export default function TrendingTicketItem({ ticket }: TrendingTicketItemProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === ticket.image) || PlaceHolderImages[0];

  return (
    <div className="relative w-[360px] h-[160px] group">
       <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105">
        <TicketShape isHorizontal />
      </div>
      <div className="absolute inset-0 flex items-center p-2">
        <div className="w-1/3 h-full relative rounded-l-lg overflow-hidden">
            <Image
                src={placeholderImage.imageUrl}
                alt={placeholderImage.description}
                data-ai-hint={placeholderImage.imageHint}
                fill
                className="object-cover"
            />
        </div>
        <div className="w-2/3 h-full flex flex-col justify-center px-6 bg-card rounded-r-lg">
            <h3 className="text-card-foreground font-headline text-xl">Ticket #{ticket.id.toString().padStart(6, '0')}</h3>
            <p className="text-muted-foreground text-sm">Round #{ticket.roundNumber}</p>
             <p className="font-bold font-headline text-primary text-lg mt-2">
                {ticket.price} ALGO
            </p>
        </div>
      </div>
    </div>
  );
}
