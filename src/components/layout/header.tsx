
"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import ConnectWallet from "@/components/connect-wallet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Ticket as TicketIcon, Store, Trophy, LayoutDashboard } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";
import NetworkSwitcher from "../network-switcher";
import { useEffect, useState } from "react";

const Logo = () => (
    <Link href="/" className="flex items-center gap-2" aria-label="Lotterify Home">
        <TicketIcon className="h-8 w-8 text-primary" />
        <span className="text-2xl font-headline font-bold">Lotterify</span>
    </Link>
);

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
    { href: "/my-tickets", label: "My Tickets", icon: <TicketIcon className="h-4 w-4" /> },
    { href: "/marketplace", label: "Marketplace", icon: <Store className="h-4 w-4" /> },
    { href: "/results", label: "Results", icon: <Trophy className="h-4 w-4" /> },
];

export default function Header() {
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-lg border-white/10">
            <div className="container flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    <Logo />
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-background/80 backdrop-blur-xl">
                            <div className="py-6">
                                <Logo />
                            </div>
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-2 text-lg font-medium",
                                            pathname === item.href
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {item.icon} {item.label}
                                    </Link>
                                ))}
                            </nav>
                             <div className="mt-6">
                                <NetworkSwitcher />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <Button key={item.href} variant="ghost" asChild className={cn(
                                "nav-link-hover font-body",
                                isClient && pathname === item.href ? "text-primary font-semibold" : "hover:bg-transparent"
                            )}>
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <ConnectWallet />
                        <div className="hidden md:flex">
                            <NetworkSwitcher />
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
