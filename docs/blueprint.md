# **App Name**: Lotterify

## Core Features:

- Lottery Initialization: Smart contract deployment and initialization of new lottery rounds via lottery_manager.py.
- Ticket Purchase: Enables users to buy NFT tickets (ARC-19) with ALGO, updating participant lists in the smart contract and generating the corresponding ARC-19 NFT.
- Ticket Listing and Trading: Users can list their purchased tickets on a secondary marketplace. Other users can purchase listed tickets before the lottery draw. This feature leverages the marketplace.py smart contract for listing and purchase operations.
- On-Chain Winner Selection: Select a winner using Algorand’s randomness beacon, managed via the lottery_manager smart contract. The tool uses the on-chain randomness to ensure fairness and transparency.
- Prize Distribution: Automatic distribution of the prize pool (ALGO) from the escrow account to the winner’s address upon the trigger from the lottery_manager smart contract.
- Wallet Integration: Seamless integration with Algorand wallets like Pera Wallet, allowing users to connect and interact with the dApp for buying, selling, and managing tickets.
- Round Information Display: Display information about the active round, prize pool, countdown timer, and ticket status on the frontend using React components.

## Style Guidelines:

- Primary color: Saturated blue (#29ABE2) to represent trust, security, and transparency, aligning with blockchain principles.
- Background color: Light gray (#F0F2F5), providing a clean and neutral backdrop to emphasize key elements.
- Accent color: Bright yellow (#FFDA63) for CTAs and highlights, drawing attention to interactive elements.
- Body font: 'PT Sans', a modern humanist sans-serif for clear and accessible text throughout the dApp.
- Headline font: 'Space Grotesk' to create a balance of tech and fashion styles; monospace; designed for code.
- Use clean, simple icons from a consistent set to represent actions, status, and key features (e.g., wallet, tickets, marketplace).
- Employ a grid-based layout for a clean, responsive design, ensuring a consistent experience across devices.
- Subtle animations, such as transitions and loading indicators, to provide feedback and improve user engagement without being distracting.