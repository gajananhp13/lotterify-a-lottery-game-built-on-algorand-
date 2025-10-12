# Lotterify  – Decentralized Lottery Game on Algorand

## Description
Lotterify is a fully on-chain decentralized lottery where every ticket is a tradable NFT. Built on Algorand for speed, security, and transparency.

## Features:

- **Buy NFT-based tickets**: Purchase tickets using ALGO, with each ticket minted as a unique ARC-19 NFT.
- **Ticket Trading**: Tickets can be bought and sold on a secondary marketplace before the draw.
- **Fair Winner Selection**: Utilizes an on-chain random winner selection mechanism for transparent and fair draws.
- **Automatic Payout**: The prize pool is automatically and instantly distributed to the winner's wallet.
- **Modern dApp Experience**: A clean, responsive, and interactive frontend built with Next.js and Tailwind CSS.

## Key Concepts & Technical Highlights

### Novel use of ASA / NFT + utility
Lotry turns each lottery ticket into an ASA-based NFT, enabling secondary trading before the draw. This showcases the power of Algorand Standard Assets (ASA) not just for art or collectibles, but with embedded utility. Many Algorand projects focus on NFT marketplaces — but Lotry demonstrates how NFTs can carry dynamic state and link to business logic (ticket rounds, draw, prize claiming, etc.).

### Composable smart contract architecture
It decomposes functionality across modular contracts: ticket minting, round management, marketplace, and referral logic. This architecture follows best practices (separation of concerns) and can be a good template for future dApps.

### Integration end-to-end (backend + front + chain)
Many projects show either frontend or contract, but Lotry includes the full stack: PyTeal contracts, Python SDK backend, and a React + wallet UI. It’s a full “example app” for others to clone, adapt, or learn from.

### Demonstrates advanced features
- Integration of randomness (oracle / VRF)
- On‑chain trading (escrow flows)
- Referral reward flows
- Handling of prize pools, fees, and claims
- Security patterns (opt-in, re-entrancy safety, atomic transfers)

These are non-trivial contract patterns.

### Community & educational value
A well-documented Lotry repository can serve as a tutorial for others building dApps on Algorand. It would be a good “reference app” for people to fork and decompose.

## Tech Stack:

- **Smart Contracts**: PyTeal
- **Frontend**: Next.js (React) + TailwindCSS + Pera Wallet
- **Backend**: Flask + Algorand SDK
- **Network**: Algorand TestNet

## How It Works:

1.  **Connect Wallet**: User connects their Pera Wallet to the dApp.
2.  **Buy Ticket**: User purchases an NFT ticket, and the funds are added to the prize pool escrow.
3.  **Trade Tickets**: Before the draw, users can list their tickets for sale on the marketplace.
4.  **Draw**: The smart contract executes the draw on-chain using a randomness source.
5.  **Winner Payout**: The entire prize pool is automatically transferred to the winner's account.

## Setup Instructions:

### Smart Contracts
```bash
# Navigate to the contracts directory
cd contracts

# Install dependencies
pip install pyteal algokit

# Deploy to testnet
algokit deploy --network testnet
```

### Backend
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
pip install flask algosdk

# Run the backend server
python app.py
```

### Frontend
```bash
# Navigate to the root of the project
# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
