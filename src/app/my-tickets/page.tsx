import TicketCard from "@/components/ticket-card";
import { mockTickets } from "@/lib/mock-data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ticket } from "lucide-react";
import ConnectWallet from "@/components/connect-wallet";
import { Button } from "@/components/ui/button";

export default function MyTicketsPage() {
    // In a real app, this would be the connected user's address.
    const currentUserAddress = "USER...V3RSE";
    const userTickets = mockTickets.filter(
        (ticket) => ticket.ownerAddress === currentUserAddress && ticket.status === 'owned'
    );

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-5xl font-headline font-bold mb-2">My Tickets</h1>
                <p className="text-lg text-muted-foreground">Here are all the lottery tickets you currently own.</p>
            </header>

            {userTickets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {userTickets.map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ) : (
                <Alert className="max-w-2xl mx-auto text-center">
                    <Ticket className="h-4 w-4" />
                    <AlertTitle className="font-headline text-xl">No Tickets Found!</AlertTitle>
                    <AlertDescription className="mt-2">
                        You don't own any lottery tickets yet. Connect your wallet and buy a ticket to get started.
                    </AlertDescription>
                    <div className="mt-4 flex justify-center gap-4">
                        <Button>Buy a Ticket</Button>
                        <ConnectWallet />
                    </div>
                </Alert>
            )}
        </div>
    );
}
