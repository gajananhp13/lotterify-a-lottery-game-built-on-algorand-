import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountdownTimer from "@/components/countdown-timer";
import { Ticket, Gem, Combine, Layers, ShoppingCart, Star, BookOpen } from "lucide-react";
import AnimatedTicketCascade from "@/components/animated-ticket-cascade";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const drawDate = new Date();
  drawDate.setDate(drawDate.getDate() + 3); // Draw in 3 days
  const ticketImage = PlaceHolderImages.find(p => p.id === 'ticket-graffiti');

  return (
    <div className="space-y-16">
      <section className="relative grid md:grid-cols-2 items-center gap-8 md:gap-16 py-12 px-4 rounded-xl overflow-hidden bg-card border">
         <AnimatedTicketCascade />
         <div className="relative z-10 text-left">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4">
              The Fair Algorand Lottery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              Buy your NFT ticket, trade it on the marketplace, and win big. Transparent, secure, and decentralized.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Ticket className="mr-2 h-6 w-6" />
              Buy a Ticket Now
            </Button>
         </div>
         <div className="relative z-10 hidden md:flex justify-center items-center">
          {ticketImage && (
            <div className="aspect-[3/4] relative w-full max-w-sm transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
                <Image
                    src={ticketImage.imageUrl}
                    alt={ticketImage.description}
                    data-ai-hint={ticketImage.imageHint}
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                />
            </div>
          )}
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

      <section className="space-y-8">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-2">Why Lotterify?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lotterify is more than just a lottery. It's a demonstration of the power and flexibility of the Algorand blockchain.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Gem className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">NFTs with Utility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Each ticket is a tradable NFT, showcasing Algorand Standard Assets (ASAs) with embedded utility beyond simple collectibles.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Combine className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Composable Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Functionality is decomposed across modular smart contracts, providing a reusable and maintainable template for dApps.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Layers className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Full End-to-End dApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Includes the full stack: PyTeal contracts, a Python backend, and a modern React frontend with wallet integration.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">On-Chain Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Trade tickets on a secondary market before the draw, all handled securely on-chain through escrow contracts.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Star className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Advanced Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Demonstrates on-chain randomness, referral rewards, and secure prize pool management using atomic transfers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Educational Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A well-documented, open-source repository that serves as a valuable tutorial and reference for Algorand developers.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
