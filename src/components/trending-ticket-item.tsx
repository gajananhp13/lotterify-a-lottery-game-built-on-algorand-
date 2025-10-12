import Image from 'next/image';
import type { Ticket } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type TrendingTicketItemProps = {
  ticket: Ticket;
};

const Perforation = () => (
  <div className="relative h-full w-8">
    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-400/50 border border-dashed"></div>
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-background rounded-b-full"></div>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-background rounded-t-full"></div>
  </div>
);

export default function TrendingTicketItem({ ticket }: TrendingTicketItemProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === ticket.image) || PlaceHolderImages[0];
  const ticketName = placeholderImage.imageHint.split(' ')[0] || 'TICKET';

  return (
    <div className="w-[380px] h-[140px] flex items-center bg-green-200 dark:bg-green-800/50 rounded-2xl shadow-md overflow-hidden p-2 group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
       <div className="flex justify-center items-center h-full w-12 text-center -rotate-90">
         <p className="font-mono text-sm tracking-widest uppercase text-green-900/60 dark:text-green-200/60">Lotterify</p>
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
         <p className="font-mono text-sm tracking-widest uppercase text-green-900/80 dark:text-green-100/80 font-semibold">{ticketName}</p>
       </div>
    </div>
  );
}
