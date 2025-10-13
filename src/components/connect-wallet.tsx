"use client";

import { useWallet } from "@/hooks/use-wallet";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

export default function ConnectWallet() {
  const { activeAccount, connect, disconnect } = useWallet();

  const handleConnect = () => {
    connect().catch((error: any) => {
      // The user closing the connection modal is a normal UX flow, so we don't need to log it as an error.
      if (error?.message?.includes("Connect modal is closed by user")) {
        return;
      }
      console.error("Failed to connect wallet:", error);
    });
  };

  const handleDisconnect = () => {
    disconnect();
  };

  if (activeAccount) {
    return (
      <Button variant="outline" onClick={handleDisconnect}>
        <LogOut className="mr-2 h-4 w-4" />
        Disconnect
      </Button>
    );
  }

  return (
    <Button onClick={handleConnect}>
      <LogIn className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
}
