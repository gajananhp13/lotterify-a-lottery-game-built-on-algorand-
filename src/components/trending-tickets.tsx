import { mockTickets } from '@/lib/mock-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TrendingTicketItem from './trending-ticket-item';

export default function TrendingTickets() {
  const trendingTickets = mockTickets.slice(0, 8); // Show up to 8 tickets

  return (
    <div className="w-full space-y-8">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-2">Trending Tickets</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Check out the most popular tickets currently being traded on the marketplace.
            </p>
        </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {trendingTickets.map((ticket, index) => (
            <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <TrendingTicketItem ticket={ticket} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12"/>
        <CarouselNext className="mr-12"/>
      </Carousel>
    </div>
  );
}
