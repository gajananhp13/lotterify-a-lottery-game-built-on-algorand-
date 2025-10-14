
"use client";

import { useWallet } from "@/hooks/use-wallet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Network, networks } from "@/lib/algorand";
import { Globe } from "lucide-react";

export default function NetworkSwitcher() {
  const { network, setNetwork, activeAccount } = useWallet();

  const handleNetworkChange = (newNetwork: Network) => {
    if (newNetwork !== network) {
      setNetwork(newNetwork);
    }
  };

  return (
    <Select
      onValueChange={handleNetworkChange}
      value={network}
      disabled={!!activeAccount}
    >
      <SelectTrigger className="w-full md:w-auto text-sm md:text-xs">
        <div className="flex items-center gap-2">
            <Globe className="h-4 w-4"/>
            <div className="hidden md:block">
                <SelectValue placeholder="Select Network" />
            </div>
        </div>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(networks).map(([key, { name }]) => (
          <SelectItem key={key} value={key}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
