
import algosdk from "algosdk";

export type Network = "testnet" | "localnet";

export const networks = {
  testnet: {
    name: "TestNet",
    algod: {
      server: "https://testnet-api.algonode.cloud",
      port: 443,
      token: "",
    },
  },
  localnet: {
    name: "LocalNet",
    algod: {
      server: "http://localhost",
      port: 4001,
      token: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  },
};

export const getAlgodClient = (network: Network): algosdk.Algodv2 => {
  const { server, port, token } = networks[network].algod;
  return new algosdk.Algodv2(token, server, port);
};
