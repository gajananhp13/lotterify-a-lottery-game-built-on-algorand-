import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountdownTimer from "@/components/countdown-timer";
import { Ticket, Gem, Users, ShoppingCart } from "lucide-react";

export default function Home() {
  const drawDate = new Date();
  drawDate.setDate(drawDate.getDate() + 3); // Draw in 3 days

  return (
    <div className="space-y-16">
      <section className="relative text-center py-16 md:py-24 px-4 rounded-xl overflow-hidden bg-card border">
         <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[10px_10px] [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-100/[0.03] dark:[mask-image:linear-gradient(0deg,transparent,white)]"></div>
         <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4">
              The Fair Algorand Lottery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Buy your NFT ticket, trade it on the marketplace, and win big. Transparent, secure, and decentralized.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Ticket className="mr-2 h-6 w-6" />
              Buy a Ticket Now
            </Button>
         </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <Gem className="mx-auto h-10 w-10 text-primary" />
            <h3 className="text-2xl font-headline font-bold">NFT-Based Tickets</h3>
            <p className="text-muted-foreground">Each ticket is a unique ARC-19 NFT, giving you true ownership on the Algorand blockchain.</p>
          </div>
          <div className="space-y-2">
            <ShoppingCart className="mx-auto h-10 w-10 text-primary" />
            <h3 className="text-2xl font-headline font-bold">Open Marketplace</h3>
            <p className="text-muted-foreground">Trade your lottery tickets on a secondary market before the winner is drawn.</p>
          </div>
          <div className="space-y-2">
            <Users className="mx-auto h-10 w-10 text-primary" />
            <h3 className="text-2xl font-headline font-bold">Decentralized & Fair</h3>
            <p className="text-muted-foreground">Winner selection is fully on-chain, transparent, and verifiably fair for everyone.</p>
          </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="flex flex-col items-center justify-center text-center p-8 border-2 border-primary/20 bg-primary/5 hover:border-primary/50 transition-colors">
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
        <Card className="flex flex-col items-center justify-center text-center p-8 border-2 border-accent/20 bg-accent/5 hover:border-accent/50 transition-colors">
           <CardHeader>
            <CardTitle className="text-2xl font-headline text-muted-foreground">Next Draw In</CardTitle>
          </CardHeader>
          <CardContent>
            <CountdownTimer targetDate={drawDate} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
