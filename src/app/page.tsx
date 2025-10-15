
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CountdownTimer from "@/components/countdown-timer";
import { Ticket, Gem, Combine, Layers, ShoppingCart, Star, BookOpen, ArrowRight, Bell } from "lucide-react";
import AnimatedTicketCascade from "@/components/animated-ticket-cascade";
import TrendingTickets from "@/components/trending-tickets";
import Ticket3D from "@/components/ticket-3d";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import AnimatedText from "@/components/animated-text";
import { cn } from "@/lib/utils";

export default function Home() {
  const drawDate = new Date();
  drawDate.setDate(drawDate.getDate() + 3); // Draw in 3 days
  const heroText = "Buy your NFT ticket, trade it on the marketplace, and win big. Transparent, secure, and decentralized.";

  return (
    <div className="space-y-24">
      <section className="relative grid md:grid-cols-2 items-center gap-8 md:gap-16 py-12 px-4 rounded-xl overflow-hidden glass-card">
         <AnimatedTicketCascade />
         <div className="relative z-10 text-left">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
              The Fair Algorand Lottery
            </h1>
            <AnimatedText text={heroText} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8" />
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Ticket className="mr-2 h-6 w-6" />
              Buy a Ticket Now
            </Button>
         </div>
         <div className="relative z-10 hidden md:flex justify-center items-center">
            <Ticket3D />
         </div>
      </section>

      <section>
        <TrendingTickets />
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="glass-card flex flex-col items-center justify-center text-center p-8 border-2 border-primary/20 bg-primary/5 hover:border-primary/50 transition-colors">
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
        <Card className="glass-card flex flex-col items-center justify-center text-center p-8 border-2 border-accent/20 bg-accent/5 hover:border-accent/50 transition-colors">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Gem className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">NFTs with Utility</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Each ticket is a tradable NFT, showcasing Algorand Standard Assets (ASAs) with embedded utility beyond simple collectibles.</p>
            </CardContent>
            <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </CardFooter>
          </Card>
           <Card className="flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Combine className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Composable Architecture</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Functionality is decomposed across modular smart contracts, providing a reusable and maintainable template for dApps.</p>
            </CardContent>
             <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </CardFooter>
          </Card>
           <Card className="flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Layers className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Full End-to-End dApp</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Includes the full stack: PyTeal contracts, a Python backend, and a modern React frontend with wallet integration.</p>
            </CardContent>
             <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">On-Chain Marketplace</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Trade tickets on a secondary market before the draw, all handled securely on-chain through escrow contracts.</p>
            </CardContent>
             <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Star className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Advanced Features</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">Demonstrates on-chain randomness, referral rewards, and secure prize pool management using atomic transfers.</p>
            </CardContent>
             <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">Educational Value</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">A well-documented, open-source repository that serves as a valuable tutorial and reference for Algorand developers.</p>
            </CardContent>
             <CardFooter>
                <Button variant="link" className="p-0 text-primary/80 hover:text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section>
        <Card className="glass-card text-center p-8 md:p-12 border-2 border-dashed">
            <CardHeader>
                <Bell className="h-10 w-10 mx-auto text-accent"/>
                <CardTitle className="text-3xl md:text-4xl font-headline font-bold mt-4">Never Miss a Draw</CardTitle>
                <CardDescription className="max-w-md mx-auto text-lg mt-2 font-body">
                    Subscribe to our newsletter to get notified about upcoming draws, winning numbers, and special promotions.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
                    <Input type="email" placeholder="Enter your email address" className="flex-grow text-base"/>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">Subscribe</Button>
                </div>
            </CardContent>
        </Card>
      </section>
    </div>
  );
}
