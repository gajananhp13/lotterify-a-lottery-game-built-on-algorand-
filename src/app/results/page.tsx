import { mockWinners } from "@/lib/mock-data";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AlgoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block -mt-1">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
)

export default function ResultsPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-5xl font-headline font-bold mb-2">Past Winners</h1>
                <p className="text-lg text-muted-foreground">A hall of fame for all our lucky winners.</p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Recent Draws</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>All prize distributions are automatic and verifiable on the Algorand blockchain.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Round</TableHead>
                                <TableHead>Draw Date</TableHead>
                                <TableHead>Winner Address</TableHead>
                                <TableHead>Winning Ticket</TableHead>
                                <TableHead className="text-right">Prize Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockWinners.map((winner) => (
                                <TableRow key={winner.roundNumber}>
                                    <TableCell className="font-medium font-headline">#{winner.roundNumber}</TableCell>
                                    <TableCell>{new Date(winner.drawDate).toLocaleDateString()}</TableCell>
                                    <TableCell className="font-mono text-sm">{winner.winnerAddress}</TableCell>
                                    <TableCell className="font-mono text-sm">#{String(winner.winningTicketId).padStart(6, '0')}</TableCell>
                                    <TableCell className="text-right font-bold text-primary font-headline">
                                       <AlgoIcon /> {winner.prizeAmount.toLocaleString()} ALGO
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
