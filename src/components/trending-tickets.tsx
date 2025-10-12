"use client"

import * as React from "react"
import { mockTickets } from '@/lib/mock-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TrendingTicketItem from './trending-ticket-item';
import Autoplay from "embla-carousel-autoplay"

export default function TrendingTickets() {
  const trendingTickets = mockTickets.slice(0, 8); 

  return (
    <div className="w-full space-y-8">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-2">Trending Tickets</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Check out the most popular tickets currently being traded on the marketplace.
            </p>
        </div>
      <Carousel
        plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {trendingTickets.map((ticket, index) => (
            <CarouselItem key={index} className="pl-4 basis-auto">
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
