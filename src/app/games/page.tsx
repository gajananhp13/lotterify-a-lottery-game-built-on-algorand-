
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coins, Scissors, Hand, Gem } from "lucide-react";

const AlgoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-1">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
)

export default function GamesPage() {
    return (
        <div className="space-y-12">
            <header className="text-center">
                <h1 className="text-5xl md:text-7xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                    1v1 Betting Games
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Challenge other players in simple games of chance and skill. Winner takes the prize pool!
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="glass-card flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 text-primary border border-primary/20 rounded-full p-4 w-fit mb-4">
                            <Coins className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline text-2xl">Coin Flip</CardTitle>
                        <CardDescription>Heads or Tails? A simple 50/50 game of chance. Winner takes all.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <div className="relative">
                            <Input type="number" placeholder="Bet amount" className="pl-4 pr-16" />
                             <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-headline flex items-center">
                                ALGO <AlgoIcon />
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg">
                            <Gem className="mr-2" /> Create Match
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="glass-card flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50">
                    <CardHeader className="text-center">
                         <div className="mx-auto bg-accent/10 text-accent border border-accent/20 rounded-full p-4 w-fit mb-4">
                            <div className="flex gap-2">
                               <Hand className="h-8 w-8 -rotate-45" />
                               <Scissors className="h-8 w-8" />
                            </div>
                        </div>
                        <CardTitle className="font-headline text-2xl">Rock, Paper, Scissors</CardTitle>
                        <CardDescription>The classic game of wits. Outsmart your opponent to win the prize.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                         <div className="relative">
                            <Input type="number" placeholder="Bet amount" className="pl-4 pr-16" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-headline flex items-center">
                                ALGO <AlgoIcon />
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                            <Gem className="mr-2" /> Create Match
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            
            <Card className="glass-card mt-12">
                 <CardHeader>
                    <CardTitle className="font-headline">Upcoming Matches</CardTitle>
                    <CardDescription>Join an existing match or wait for a challenger for your own.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg">
                        <p className="text-muted-foreground">No upcoming matches found.</p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
