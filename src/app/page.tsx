import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountdownTimer from "@/components/countdown-timer";
import TicketCard from "@/components/ticket-card";
import { mockTickets } from "@/lib/mock-data";
import { ArrowRight, Ticket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const drawDate = new Date();
  drawDate.setDate(drawDate.getDate() + 3); // Draw in 3 days

  const featuredTickets = mockTickets.filter(t => t.status === 'listed').slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="text-center bg-card p-8 rounded-xl shadow-md">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4">
          The Fair Algorand Lottery
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Buy your NFT ticket, trade it on the marketplace, and win big. Transparent, secure, and decentralized.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
          <Ticket className="mr-2 h-6 w-6" />
          Buy a Ticket Now
        </Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="flex flex-col items-center justify-center text-center p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-muted-foreground">Current Prize Pool</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold font-headline text-primary">
              1,250,480
              <span className="text-4xl text-foreground ml-2">ALGO</span>
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center p-8">
           <CardHeader>
            <CardTitle className="text-2xl font-headline text-muted-foreground">Next Draw In</CardTitle>
          </CardHeader>
          <CardContent>
            <CountdownTimer targetDate={drawDate} />
          </CardContent>
        </Card>
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-headline font-bold">Marketplace Spotlight</h2>
          <Button variant="link" asChild>
            <Link href="/marketplace">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </section>
    </div>
  );
}
