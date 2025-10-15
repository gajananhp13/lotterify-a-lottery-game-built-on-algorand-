
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coins, Scissors, Hand, Gem, Trophy, Users, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AlgoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5 ml-1">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
)

const mockPlayers = [
    { address: 'PLAYER...A1B2', status: 'Waiting' },
    { address: 'PLAYER...C3D4', status: 'Waiting' },
    { address: 'PLAYER...E5F6', status: 'Waiting' },
    { address: 'PLAYER...G7H8', status: 'Waiting' },
];

export default function GamesPage() {
    return (
        <div className="space-y-12">
            <header className="text-center">
                <h1 className="text-5xl md:text-7xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                    Community Games
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Challenge other players in games of chance and skill, or enter tournaments to win big.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <Card className="glass-card flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 lg:col-span-2">
                     <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 text-primary border border-primary/20 rounded-full p-4 w-fit mb-4">
                            <Trophy className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline text-3xl">Tournament Pool</CardTitle>
                        <CardDescription>Join a bracket-style tournament. Winners of each round advance until one champion remains.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-headline text-lg">Prize Distribution</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex justify-between items-center"><span>🥇 1st Place</span> <Badge variant="secondary" className="font-bold">70% of Pool</Badge></li>
                                <li className="flex justify-between items-center"><span>🥈 2nd Place</span> <Badge variant="secondary" className="font-bold">20% of Pool</Badge></li>
                                <li className="flex justify-between items-center"><span>⚙️ Protocol Fee</span> <Badge variant="outline">10%</Badge></li>
                            </ul>
                             <h3 className="font-headline text-lg pt-4">Live Leaderboard</h3>
                             <div className="space-y-2 text-sm">
                                <p>Round 1: <strong>PLAYER...A1B2</strong> vs PLAYER...C3D4</p>
                                <p>Round 1: <strong>PLAYER...E5F6</strong> vs PLAYER...G7H8</p>
                                <p className="text-primary pt-2">Next: PLAYER...A1B2 vs PLAYER...E5F6</p>
                            </div>
                        </div>
                         <div className="space-y-4">
                            <h3 className="font-headline text-lg flex items-center gap-2"><Users className="h-5 w-5"/> Tournament Lobby (4/8)</h3>
                            <div className="space-y-2">
                                {mockPlayers.map((player, index) => (
                                     <div key={index} className="flex items-center justify-between p-2 rounded-md bg-white/5 text-sm">
                                        <p className="font-mono text-xs">{player.address}</p>
                                        <Badge variant={player.status === 'Ready' ? "default" : "outline"}>{player.status}</Badge>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full" size="lg">
                                <Shield className="mr-2" /> Join Tournament (1 Ticket)
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                 <div className="space-y-8 lg:col-span-1">
                    <Card className="glass-card flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                        <CardHeader className="text-center">
                            <div className="mx-auto bg-primary/10 text-primary border border-primary/20 rounded-full p-4 w-fit mb-4">
                                <Coins className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Coin Flip</CardTitle>
                            <CardDescription>A simple 50/50 game of chance.</CardDescription>
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
                            <CardDescription>Outsmart your opponent to win.</CardDescription>
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
            </div>
            
            <Card className="glass-card mt-12">
                 <CardHeader>
                    <CardTitle className="font-headline">Upcoming 1v1 Matches</CardTitle>
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
