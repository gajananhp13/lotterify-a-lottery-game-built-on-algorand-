'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@/hooks/use-wallet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import ConnectWallet from '@/components/connect-wallet';
import { mockTickets } from '@/lib/mock-data';
import TicketCard from '@/components/ticket-card';
import { Wallet, User, Gem, Ticket as TicketIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

const AlgoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-1">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
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
    
    // In a real app, you would fetch the user's tickets from the blockchain.
    // For this demo, we filter mock data based on the connected account.
    const userTickets = activeAccount 
        ? mockTickets.filter((ticket) => ticket.ownerAddress === activeAccount.address)
        : [];

    if (!activeAccount) {
        return (
            <div className="flex items-center justify-center h-full min-h-[50vh]">
                <Alert className="max-w-md text-center">
                    <Wallet className="h-4 w-4" />
                    <AlertTitle className="font-headline text-xl">Connect Your Wallet</AlertTitle>
                    <AlertDescription>
                        Please connect your wallet to view your personalized dashboard.
                    </AlertDescription>
                    <div className="mt-4">
                        <ConnectWallet />
                    </div>
                </Alert>
            </div>
        );
    }
    
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-5xl font-headline font-bold mb-2">My Dashboard</h1>
                <p className="text-lg text-muted-foreground">Welcome back! Here's a summary of your account.</p>
            </header>

            <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <User />
                        Account Summary
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Wallet Address</p>
                        <p className="font-mono text-lg break-all">{activeAccount.address}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">ALGO Balance</p>
                        {loading ? (
                            <Skeleton className="h-8 w-48" />
                        ) : (
                           <p className="font-headline text-2xl font-bold text-primary">
                                <AlgoIcon /> {balance !== null ? balance.toLocaleString() : 'N/A'} ALGO
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>

             <div className="space-y-4">
                <h2 className="text-3xl font-headline font-bold flex items-center gap-2">
                    <TicketIcon /> My Tickets ({userTickets.length})
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
                    <Alert>
                        <Gem className="h-4 w-4" />
                        <AlertTitle>No Tickets Yet!</AlertTitle>
                        <AlertDescription>
                            You don't own any lottery tickets. Visit the marketplace to buy your first one.
                        </AlertDescription>
                         <div className="mt-4">
                            <Button asChild>
                               <Link href="/marketplace">Buy a Ticket</Link>
                            </Button>
                        </div>
                    </Alert>
                )}
            </div>
        </div>
    );
}
