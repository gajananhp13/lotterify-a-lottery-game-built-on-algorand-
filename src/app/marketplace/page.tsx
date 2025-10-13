import TicketCard from "@/components/ticket-card";
import { mockTickets } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function MarketplacePage() {
    const listedTickets = mockTickets.filter((ticket) => ticket.status === 'listed');

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-5xl font-headline font-bold mb-2">Marketplace</h1>
                <p className="text-lg text-muted-foreground">Find rare tickets or sell yours before the draw.</p>
            </header>
            
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by Ticket ID..." className="pl-10" />
                </div>
                <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Recently Listed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listedTickets.map((ticket) => (
                   <div key={ticket.id} className="w-full">
                        <TicketCard ticket={ticket} />
                    </div>
                ))}
            </div>
        </div>
    );
}
