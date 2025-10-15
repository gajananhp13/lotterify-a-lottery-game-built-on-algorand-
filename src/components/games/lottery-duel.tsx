'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Swords, Plus, Shield, Gem, Repeat, PartyPopper } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Confetti from './confetti';

type Player = {
  address: string;
  avatar: string;
};

type GameState = 'waiting' | 'active' | 'finished';

const AlgoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 ml-1 text-primary">
        <path d="M43.7041 23.4014L24.3164 42.7891L4.92871 23.4014L24.3164 4.01367L43.7041 23.4014Z" fill="currentColor"/>
    </svg>
)

const PlayerCard = ({ player, isWinner }: { player: Player | null; isWinner?: boolean }) => (
    <motion.div 
      className={cn(
        "glass-card p-6 rounded-2xl flex flex-col items-center gap-4 w-full md:w-64 border-2 transition-all duration-500",
        isWinner ? "border-accent shadow-accent/40 shadow-2xl" : "border-transparent",
        !player && "border-dashed"
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
        <Avatar className="w-24 h-24 border-4 border-white/10">
            {player ? <AvatarImage src={player.avatar} alt={player.address} /> : null}
            <AvatarFallback className="bg-primary/10 text-primary">
                {!player && <Plus className="h-8 w-8"/>}
            </AvatarFallback>
        </Avatar>
        {player ? (
            <div className="text-center">
                <p className="font-bold font-headline text-lg">{isWinner ? '🎉 WINNER 🎉' : 'Player'}</p>
                <p className="font-mono text-xs text-muted-foreground break-all">{player.address}</p>
            </div>
        ) : (
            <div className="text-center">
                <p className="font-bold font-headline text-lg text-muted-foreground">Waiting...</p>
                 <p className="text-xs text-muted-foreground">Looking for opponent</p>
            </div>
        )}
    </motion.div>
);

export default function LotteryDuel() {
    const [gameState, setGameState] = useState<GameState>('waiting');
    const [player1, setPlayer1] = useState<Player | null>(null);
    const [player2, setPlayer2] = useState<Player | null>(null);
    const [winner, setWinner] = useState<Player | null>(null);
    const [countdown, setCountdown] = useState(3);
    const entryAmount = 50;

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameState === 'active' && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (gameState === 'active' && countdown === 0) {
            const allPlayers = [player1, player2].filter(p => p !== null) as Player[];
            const winningPlayer = allPlayers[Math.floor(Math.random() * allPlayers.length)];
            setWinner(winningPlayer);
            setGameState('finished');
        }
        return () => clearTimeout(timer);
    }, [gameState, countdown, player1, player2]);

    const handleJoin = () => {
        const newPlayer = {
            address: `PLAYER...${Math.random().toString(16).substr(2, 4).toUpperCase()}`,
            avatar: `https://picsum.photos/seed/${Math.random()}/200`
        };
        if (!player1) {
            setPlayer1(newPlayer);
        } else if (!player2) {
            setPlayer2(newPlayer);
            setGameState('active');
            setCountdown(3);
        }
    };
    
    const handlePlayAgain = () => {
        setGameState('waiting');
        setPlayer1(null);
        setPlayer2(null);
        setWinner(null);
        setCountdown(3);
    }

    return (
        <Card className="glass-card relative overflow-hidden">
            {gameState === 'finished' && winner && <Confetti />}
            <CardHeader className="text-center">
                 <div className="mx-auto bg-primary/10 text-primary border border-primary/20 rounded-full p-4 w-fit mb-4">
                    <Swords className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-3xl">Lottery Duel (1v1)</CardTitle>
                <CardDescription>Stake your ALGO in a head-to-head, winner-takes-all match. Fair, random, and on-chain.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative">
                    <AnimatePresence><PlayerCard player={player1} isWinner={winner?.address === player1?.address} /></AnimatePresence>
                    
                    <motion.div 
                        className="text-center font-headline text-4xl text-muted-foreground my-4 md:my-0 md:mx-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                    >
                        VS
                    </motion.div>

                    <AnimatePresence><PlayerCard player={player2} isWinner={winner?.address === player2?.address} /></AnimatePresence>
                </div>

                <div className="mt-8 text-center">
                    {gameState === 'waiting' && (
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                            <p className="text-muted-foreground mb-4">Entry Amount: <span className="font-bold text-primary font-headline">{entryAmount} ALGO</span></p>
                            <Button size="lg" onClick={handleJoin} disabled={!!player2}>
                                <Shield className="mr-2" /> {player1 ? 'Waiting for Challenger' : `Join Duel for ${entryAmount} ALGO`}
                            </Button>
                        </motion.div>
                    )}
                    {gameState === 'active' && (
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="space-y-4">
                           <p className="text-2xl font-headline">Total Pot: <span className="font-bold text-primary">{entryAmount * 2} ALGO</span></p>
                           <p className="text-4xl font-bold font-headline text-accent animate-pulse">{countdown > 0 ? `Selecting winner in ${countdown}...` : 'Revealing Winner...'}</p>
                        </motion.div>
                    )}
                    {gameState === 'finished' && winner && (
                         <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="space-y-4">
                            <p className="text-2xl font-headline">🎉 <span className="font-bold text-accent font-mono text-lg">{winner.address}</span> wins the pot! 🎉</p>
                            <p className="text-4xl font-bold font-headline text-primary">{(entryAmount * 2) * 0.95} ALGO</p>
                             <div className="flex justify-center gap-4 mt-6">
                                <Button size="lg" variant="outline" onClick={handlePlayAgain}><Repeat className="mr-2"/>Play Again</Button>
                                <Button size="lg"><Gem className="mr-2"/>Withdraw Winnings</Button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
