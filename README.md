# Lotterify – Decentralized Lottery & Gaming on Algorand

> A fully on-chain, decentralized lottery and gaming platform where every ticket is a tradable NFT. Built on Algorand for speed, security, and unparalleled transparency.

---

## ✨ Core Features

-   **Decentralized NFT Lottery**: Purchase lottery tickets as unique Algorand Standard Assets (ASAs). Every ticket is an NFT you truly own.
-   **Secondary Marketplace**: Trade your NFT tickets on an open marketplace before the official draw. Speculate on lucky numbers or sell your tickets for a profit.
-   **Community Games Hub**: Challenge other players in a variety of on-chain games of chance and skill.
    -   **Lottery Duel (1v1, 2v2, 4v4)**: Go head-to-head with others in a winner-takes-all match.
    -   **Tournament Pool**: Join bracket-style tournaments, advancing through rounds to become the champion.
    -   **Quick Games**: Engage in simple, fast-paced betting games like Coin Flip and Rock, Paper, Scissors.
-   **Provably Fair Draws**: Winner selection for both the main lottery and duels utilizes on-chain randomness, ensuring every outcome is transparent and tamper-proof.
-   **Instant & Automatic Payouts**: The smart contract handles the entire prize pool, automatically distributing winnings to the victor's wallet instantly after a draw.
-   **Personalized Dashboard**: Connect your wallet to access a dashboard showing your ALGO balance, ticket collection, and game history.

---

## 🚀 How It Works

1.  **Connect Wallet**: Users connect their Pera Wallet to the dApp, establishing a secure link to the Algorand blockchain.
2.  **Buy a Ticket**: Users purchase an NFT ticket for the main lottery. The funds are automatically sent to the prize pool escrow contract.
3.  **Trade on the Marketplace**: Before the draw, ticket holders can list their NFTs on the marketplace for others to buy.
4.  **Play Community Games**: Users can join a duel or tournament by staking ALGO or a lottery ticket, competing directly against others.
5.  **The Draw**: The smart contract executes the draw for the main lottery or a game, using an on-chain randomness source to select a winner.
6.  **Winner Payout**: The prize pool is instantly and automatically transferred to the winner’s account without any manual intervention.

---

## 🛠️ Tech Stack

-   **Smart Contracts**: PyTeal (for secure, Python-based smart contract development)
-   **Frontend**: Next.js (React), Tailwind CSS, ShadCN UI, Framer Motion
-   **Wallet Integration**: Pera Wallet Connect SDK
-   **Backend**: Flask + Algorand SDK
-   **Network**: Algorand (TestNet & MainNet)

---

## 💡 Key Concepts & Technical Highlights

### 1. NFTs with Embedded Utility
Lotterify transforms lottery tickets from simple numbers into valuable digital assets. By minting each ticket as an ASA-based NFT, we unlock a secondary economy where tickets can be traded, creating a more dynamic and engaging user experience.

### 2. Composable & Modular Smart Contracts
The application's logic is broken down into a suite of modular contracts:
- **Ticket Minting**: Manages the creation of NFT tickets.
- **Round Management**: Controls the lifecycle of each lottery round.
- **Marketplace**: Handles the secure, on-chain trading of tickets via escrow.
- **Game Logic**: Contains the code for duels and tournaments.

This architecture promotes separation of concerns, making the system secure, maintainable, and easy to extend.

### 3. Full End-to-End dApp Implementation
Lotterify serves as a complete reference application, providing a full-stack solution that includes:
- **On-Chain Logic**: PyTeal smart contracts for all core functionality.
- **Backend Services**: A Python backend to interface with the blockchain.
- **Modern Frontend**: A responsive and interactive UI built with Next.js, including seamless wallet integration.

### 4. Advanced On-Chain Patterns
The project demonstrates several sophisticated smart contract patterns crucial for building robust dApps:
- **On-Chain Randomness**: Integration with a Verifiable Random Function (VRF) for fair winner selection.
- **Secure Escrow**: On-chain trading is handled safely through atomic transfers and escrow logic.
- **State Management**: Secure handling of prize pools, fees, and claims within the contract's state.

### 5. Community & Educational Value
With its clean architecture and comprehensive documentation, the Lotterify repository is an ideal resource for developers looking to build high-quality dApps on Algorand. It serves as both a practical tutorial and a "gold-standard" reference app.

---

## ⚙️ Setup and Installation

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
