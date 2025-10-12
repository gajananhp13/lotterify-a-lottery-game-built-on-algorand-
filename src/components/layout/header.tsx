import Link from "next/link";
import { Button } from "@/components/ui/button";
import ConnectWallet from "@/components/connect-wallet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Ticket, Store, Trophy } from "lucide-react";

const Logo = () => (
    <Link href="/" className="flex items-center gap-2" aria-label="Lotterify Home">
        <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
        >
            <path
                d="M50 2.5C23.7625 2.5 2.5 23.7625 2.5 50C2.5 76.2375 23.7625 97.5 50 97.5C76.2375 97.5 97.5 76.2375 97.5 50C97.5 23.7625 76.2375 2.5 50 2.5ZM50 87.5C29.2875 87.5 12.5 70.7125 12.5 50C12.5 29.2875 29.2875 12.5 50 12.5C70.7125 12.5 87.5 29.2875 87.5 50C87.5 70.7125 70.7125 87.5 50 87.5Z"
                fill="currentColor"
            />
            <path
                d="M62.5 43.75H37.5C34.1125 43.75 31.25 46.6125 31.25 50C31.25 53.3875 34.1125 56.25 37.5 56.25H62.5C65.8875 56.25 68.75 53.3875 68.75 50C68.75 46.6125 65.8875 43.75 62.5 43.75Z"
                fill="currentColor"
            />
        </svg>
        <span className="text-2xl font-headline font-bold">Lotterify</span>
    </Link>
);

const navItems = [
    { href: "/my-tickets", label: "My Tickets", icon: <Ticket className="h-4 w-4" /> },
    { href: "/marketplace", label: "Marketplace", icon: <Store className="h-4 w-4" /> },
    { href: "/results", label: "Results", icon: <Trophy className="h-4 w-4" /> },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                        <SheetContent side="left">
                            <div className="py-6">
                                <Logo />
                            </div>
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-foreground"
                                    >
                                        {item.icon} {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <ConnectWallet />
                    </div>
                </div>
            </div>
        </header>
    );
}
