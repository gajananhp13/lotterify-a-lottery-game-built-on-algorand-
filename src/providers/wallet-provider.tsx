"use client";

import { PeraWalletConnect } from "@perawallet/connect";
import type { Account } from "@perawallet/connect/dist/util/model/peraWalletModels";
import { createContext, useState, useEffect, ReactNode } from "react";
import algosdk from "algosdk";

interface IWalletContext {
  accounts: Account[];
  activeAccount: Account | null;
  connect: () => Promise<Account[]>;
  disconnect: () => void;
  peraWallet: PeraWalletConnect;
  algodClient: algosdk.Algodv2;
}

export const WalletContext = createContext<IWalletContext | undefined>(undefined);

// Initialize PeraWalletConnect without a chainId to let the client and wallet negotiate
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

  useEffect(() => {
    // Reconnect session on component mount
    peraWallet.reconnectSession().then((accounts) => {
      // Setup disconnect event listener
      peraWallet.connector?.on("disconnect", handleDisconnect);

      if (accounts.length) {
        setAccounts(accounts);
        setActiveAccount(accounts[0]);
      }
    });
  }, []);

  function handleConnect() {
    return peraWallet
      .connect()
      .then((newAccounts) => {
        // Setup disconnect event listener
        peraWallet.connector?.on("disconnect", handleDisconnect);

        setAccounts(newAccounts);
        setActiveAccount(newAccounts[0]);
        return newAccounts;
      })
  }

  function handleDisconnect() {
    peraWallet.disconnect();
    setAccounts([]);
    setActiveAccount(null);
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
