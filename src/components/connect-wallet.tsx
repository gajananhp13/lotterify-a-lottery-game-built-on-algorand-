"use client";

import { useWallet } from "@/hooks/use-wallet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function ConnectWallet() {
  const { activeAccount, connect, disconnect } = useWallet();

  const handleConnect = () => {
    connect().catch((error) => {
      console.error("Failed to connect wallet:", error);
    });
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const truncateAddress = (address: string) =>
    address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";

  if (activeAccount && activeAccount.address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-medium leading-none">{activeAccount.name}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {truncateAddress(activeAccount.address)}
              </span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Wallet Connected</p>
              <p className="text-xs leading-none text-muted-foreground">
                {truncateAddress(activeAccount.address)}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDisconnect}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button onClick={handleConnect}>
      <LogIn className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
}
