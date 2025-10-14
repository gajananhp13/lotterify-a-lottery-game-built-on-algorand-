'use client';

import TicketCard from "@/components/ticket-card";
import { mockTickets } from "@/lib/mock-data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ticket, Wallet } from "lucide-react";
import ConnectWallet from "@/components/connect-wallet";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/use-wallet";
import Link from "next/link";

export default function MyTicketsPage() {
    const { activeAccount } = useWallet();

    const userTickets = activeAccount
        ? mockTickets.filter((ticket) => ticket.ownerAddress === activeAccount.address && ticket.status === 'owned')
        : [];

    if (!activeAccount) {
         return (
            <div className="flex items-center justify-center h-full min-h-[50vh]">
                <Alert className="max-w-md text-center">
                    <Wallet className="h-4 w-4" />
                    <AlertTitle className="font-headline text-xl">Connect Your Wallet</AlertTitle>
                    <AlertDescription>
                        Please connect your wallet to view your tickets.
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
                <h1 className="text-5xl font-headline font-bold mb-2">My Tickets</h1>
                <p className="text-lg text-muted-foreground">Here are all the lottery tickets you currently own.</p>
            </header>

            {userTickets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {userTickets.map((ticket) => (
                        <div key={ticket.id} className="w-full">
                            <TicketCard ticket={ticket} />
                        </div>
                    ))}
                </div>
            ) : (
                <Alert className="max-w-2xl mx-auto text-center">
                    <Ticket className="h-4 w-4" />
                    <AlertTitle className="font-headline text-xl">No Tickets Found!</AlertTitle>
                    <AlertDescription className="mt-2">
                        You don't own any lottery tickets yet. Go to the marketplace to buy one.
                    </AlertDescription>
                    <div className="mt-4 flex justify-center gap-4">
                       <Button asChild>
                           <Link href="/marketplace">Buy a Ticket</Link>
                       </Button>
                    </div>
                </Alert>
            )}
        </div>
    );
}
