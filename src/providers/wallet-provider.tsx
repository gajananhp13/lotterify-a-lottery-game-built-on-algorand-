
"use client";

import { PeraWalletConnect } from "@perawallet/connect";
import type { Account } from "@perawallet/connect/dist/util/model/peraWalletModels";
import { createContext, useState, useEffect, ReactNode } from "react";
import algosdk from "algosdk";
import { useToast } from "@/hooks/use-toast";

interface IWalletContext {
  accounts: Account[];
  activeAccount: Account | null;
  connect: () => Promise<Account[]>;
  disconnect: () => void;
  peraWallet: PeraWalletConnect;
  algodClient: algosdk.Algodv2;
}

export const WalletContext = createContext<IWalletContext | undefined>(undefined);

// Initialize PeraWalletConnect and let the wallet negotiate the chainId
const peraWallet = new PeraWalletConnect({
  shouldShowSignTxnToast: false,
});

const algodClient = new algosdk.Algodv2(
  "", // No token needed for public TestNet client
  "https://testnet-api.algonode.cloud",
  ""
);


export function WalletProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [activeAccount, setActiveAccount] = useState<Account | null>(null);
  const { toast } = useToast();

  const handleDisconnect = () => {
    try {
      peraWallet.disconnect();
    } catch (error) {
      // Log the error for debugging, but don't let it crash the app
      console.error("Error during wallet disconnection:", error);
    } finally {
      // Always reset the state, even if disconnect fails
      setAccounts([]);
      setActiveAccount(null);
    }
  };

  useEffect(() => {
    const reconnect = async () => {
      try {
        const connectedAccounts = await peraWallet.reconnectSession();
        if (peraWallet.connector) {
          peraWallet.connector.on("disconnect", handleDisconnect);
        }
        if (connectedAccounts.length) {
          setAccounts(connectedAccounts);
          setActiveAccount(connectedAccounts[0]);
        }
      } catch (error) {
        // Don't log the reconnect error to the console, it's noisy
      }
    };
    reconnect();

    // Cleanup listener on component unmount
    return () => {
      if (peraWallet.connector) {
        peraWallet.connector.off("disconnect", handleDisconnect);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleConnect() {
    return peraWallet
      .connect()
      .then((newAccounts) => {
        if (peraWallet.connector) {
          peraWallet.connector.on("disconnect", handleDisconnect);
        }

        setAccounts(newAccounts);
        const newActiveAccount = newAccounts[0];
        setActiveAccount(newActiveAccount);

        toast({
          title: "Wallet Connected!",
          description: `Welcome, ${newActiveAccount.name}.`,
        });

        return newAccounts;
      })
  }

  const walletContextValue: IWalletContext = {
    accounts,
    activeAccount,
    connect: handleConnect,
    disconnect: handleDisconnect,
    peraWallet,
    algodClient
  };

  return (
    <WalletContext.Provider value={walletContextValue}>
      {children}
    </WalletContext.Provider>
  );
}
