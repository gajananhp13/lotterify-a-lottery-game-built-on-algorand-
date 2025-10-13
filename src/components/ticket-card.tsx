import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Ticket } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import TicketShape from "./ticket-shape";

type TicketCardProps = {
  ticket: Ticket;
};

const AlgoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
)

export default function TicketCard({ ticket }: TicketCardProps) {
  const placeholderImage = PlaceHolderImages.find(img => img.id === ticket.image) || PlaceHolderImages[0];
  
  return (
    <div className="relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full aspect-[3/4.5]">
      <TicketShape />
      <div className="absolute inset-0 flex flex-col p-2">
        <div className="relative aspect-square w-full rounded-t-lg overflow-hidden">
          <Image
            src={placeholderImage.imageUrl}
            alt={placeholderImage.description}
            data-ai-hint={placeholderImage.imageHint}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Round #{ticket.roundNumber}</p>
            <h3 className="font-headline text-lg mt-1 text-card-foreground">Ticket #{ticket.id.toString().padStart(6, '0')}</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Price</span>
              <p className="font-bold font-headline text-primary text-lg">
                <AlgoIcon /> {ticket.price} ALGO
              </p>
            </div>
          </div>
          <Button className={cn(
             "w-full mt-4",
             ticket.status === 'listed' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''
             )}>
            {ticket.status === 'listed' ? 'Buy Now' : 'View Details'}
          </Button>
        </div>
      </div>
    </div>
  );
}
