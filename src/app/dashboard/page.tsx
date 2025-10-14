'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@/hooks/use-wallet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import ConnectWallet from '@/components/connect-wallet';
import { mockTickets } from '@/lib/mock-data';
import TicketCard from '@/components/ticket-card';
import { Wallet, Ticket as TicketIcon, Gem, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

const AlgoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-1 h-7 w-7">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
)

const RoundsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m10 8 4 4-4 4"/>
    </p>
)

export default function DashboardPage() {
    const { activeAccount, algodClient } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (activeAccount?.address && algodClient) {
            setLoading(true);
            algodClient.accountInformation(activeAccount.address)
                .do()
                .then(accountInfo => {
                    setBalance(accountInfo.amount / 1000000); // Convert microAlgos to ALGO
                })
                .catch(error => {
                    console.error("Failed to fetch account balance:", error);
                    setBalance(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setBalance(null);
            setLoading(false);
        }
    }, [activeAccount, algodClient]);
    
    const userTickets = activeAccount 
        ? mockTickets.filter((ticket) => ticket.ownerAddress === activeAccount.address)
        : [];
        
    const uniqueRounds = activeAccount 
        ? [...new Set(userTickets.map(t => t.roundNumber))].length
        : 0;

    if (!activeAccount) {
        return (
            <div className="flex items-center justify-center h-full min-h-[60vh] bg-card/50 rounded-xl border-2 border-dashed">
                <Alert className="max-w-md text-center border-0">
                    <Wallet className="h-6 w-6 mx-auto mb-4 text-primary" />
                    <AlertTitle className="font-headline text-2xl">Connect Your Wallet</AlertTitle>
                    <AlertDescription className="text-lg text-muted-foreground mt-2">
                        Connect your wallet to unlock your personal dashboard and view your lottery tickets.
                    </AlertDescription>
                    <div className="mt-6">
                        <ConnectWallet />
                    </div>
                </Alert>
            </div>
        );
    }
    
    return (
        <div className="space-y-12">
            <header className="space-y-2">
                <p className="text-lg font-medium text-primary">Welcome Back,</p>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground break-all">
                   {activeAccount.address}
                </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">ALGO Balance</CardTitle>
                        <AlgoIcon />
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <Skeleton className="h-10 w-3/4 mt-1" />
                        ) : (
                           <p className="text-4xl font-bold font-headline text-primary">
                               {balance !== null ? balance.toLocaleString() : '0'}
                               <span className="text-2xl text-foreground ml-2">ALGO</span>
                            </p>
                        )}
                    </CardContent>
                </Card>
                 <Card className="bg-gradient-to-br from-card to-secondary/20 hover:border-foreground/20 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Tickets Owned</CardTitle>
                        <TicketIcon className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold font-headline">{userTickets.length}</p>
                    </CardContent>
                </Card>
                 <Card className="bg-gradient-to-br from-card to-secondary/20 hover:border-foreground/20 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Rounds Joined</CardTitle>
                        <RoundsIcon />
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold font-headline">{uniqueRounds}</p>
                    </CardContent>
                </Card>
            </div>

             <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                    <Zap className="text-accent"/> My Ticket Collection
                </h2>
                {userTickets.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {userTickets.map((ticket) => (
                            <div key={ticket.id} className="w-full">
                                <TicketCard ticket={ticket} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-[30vh] bg-card/50 rounded-xl border-2 border-dashed">
                        <Alert className="max-w-md text-center border-0">
                            <Gem className="h-6 w-6 mx-auto mb-4 text-primary" />
                            <AlertTitle className="font-headline text-2xl">Your Collection is Empty</AlertTitle>
                            <AlertDescription className="text-lg text-muted-foreground mt-2">
                                You don't own any tickets yet. Time to try your luck!
                            </AlertDescription>
                             <div className="mt-6">
                                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                   <Link href="/marketplace">Buy Your First Ticket</Link>
                                </Button>
                            </div>
                        </Alert>
                    </div>
                )}
            </div>
        </div>
    );
}
