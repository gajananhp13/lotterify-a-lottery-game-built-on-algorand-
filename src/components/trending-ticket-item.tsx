import Image from 'next/image';
import type { Ticket } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type TrendingTicketItemProps = {
  ticket: Ticket;
};

const Perforation = () => (
  <div className="relative h-full w-4">
    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/30 border border-dashed"></div>
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-background rounded-b-full border-b border-l border-r border-card"></div>
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-background rounded-t-full border-t border-l border-r border-card"></div>
  </div>
);

export default function TrendingTicketItem({ ticket }: TrendingTicketItemProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === ticket.image) || PlaceHolderImages[0];
  const ticketName = placeholderImage.imageHint.split(' ')[0] || 'TICKET';

  return (
    <div className="w-[360px] h-[140px] flex items-center bg-card rounded-2xl shadow-md overflow-hidden p-3 border group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
       <div className="flex justify-center items-center h-full w-12 text-center -rotate-90">
         <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground/80">Lotterify</p>
       </div>

       <Perforation />

       <div className="flex-1 h-full flex items-center justify-center p-4">
         <div className="relative w-24 h-24 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Image
              src={placeholderImage.imageUrl}
              alt={placeholderImage.description}
              data-ai-hint={placeholderImage.imageHint}
              fill
              className="object-cover"
            />
         </div>
       </div>

       <Perforation />
       
       <div className="flex justify-center items-center h-full w-12 text-center -rotate-90">
         <p className="font-mono text-sm tracking-widest uppercase text-foreground/80 font-semibold">{ticketName}</p>
       </div>
    </div>
  );
}
