
"use client";

import { PeraWalletConnect } from "@perawallet/connect";
import type { Account } from "@perawallet/connect/dist/util/model/peraWalletModels";
import { createContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";
import algosdk from "algosdk";
import { useToast } from "@/hooks/use-toast";
import { getAlgodClient, Network, networks } from "@/lib/algorand";

interface IWalletContext {
  accounts: Account[];
  activeAccount: Account | null;
  connect: () => Promise<Account[]>;
  disconnect: () => void;
  peraWallet: PeraWalletConnect;
  algodClient: algosdk.Algodv2;
  network: Network;
  setNetwork: (network: Network) => void;
}

export const WalletContext = createContext<IWalletContext | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [activeAccount, setActiveAccount] = useState<Account | null>(null);
  const [network, setNetwork] = useState<Network>("testnet");
  const { toast } = useToast();

  const algodClient = useMemo(() => getAlgodClient(network), [network]);

  const peraWallet = useMemo(() => {
    return new PeraWalletConnect({
      chainId: network === "testnet" ? 416002 : 416001,
      shouldShowSignTxnToast: false,
    });
  }, [network]);

  const handleDisconnect = useCallback(() => {
    setAccounts([]);
    setActiveAccount(null);
    if(peraWallet.connector) {
      peraWallet.disconnect();
    }
  }, [peraWallet]);

  const handleSetNetwork = (newNetwork: Network) => {
    if (activeAccount) {
      toast({
        variant: "destructive",
        title: "Network Change Disabled",
        description: "Disconnect your wallet before switching networks.",
      });
      return;
    }
    setNetwork(newNetwork);
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
        // Suppress noisy reconnect errors
      }
    };
    reconnect();

    return () => {
      if (peraWallet.connector) {
        peraWallet.connector.off("disconnect", handleDisconnect);
      }
    };
  }, [peraWallet, handleDisconnect]);

  function handleConnect() {
    return peraWallet
      .connect()
      .then((newAccounts) => {
        if (peraWallet.connector) {
          peraWallet.connector.on("disconnect", handleDisconnect);
        }

        setAccounts(newAccounts);
        const newActiveAccount = newAccounts[0];
        
        if (newActiveAccount) {
            setActiveAccount(newActiveAccount);

            toast({
              title: "Wallet Connected!",
              description: `Welcome, ${newActiveAccount.name || newActiveAccount.address}.`,
            });
        }


        return newAccounts;
      })
  }

  const walletContextValue: IWalletContext = {
    accounts,
    activeAccount,
    connect: handleConnect,
    disconnect: handleDisconnect,
    peraWallet,
    algodClient,
    network,
    setNetwork: handleSetNetwork,
  };

  return (
    <WalletContext.Provider value={walletContextValue}>
      {children}
    </WalletContext.Provider>
  );
}
