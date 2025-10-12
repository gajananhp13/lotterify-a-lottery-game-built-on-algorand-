export type Ticket = {
  id: number;
  roundNumber: number;
  ownerAddress: string;
  status: 'owned' | 'listed';
  price: number;
  image: string; // id from placeholder-images.json
};

export type Winner = {
  roundNumber: number;
  winnerAddress: string;
  prizeAmount: number;
  winningTicketId: number;
  drawDate: string;
};

const MOCK_ADDRESS_1 = "USER...V3RSE";
const MOCK_ADDRESS_2 = "ALICE...XMPL";
const MOCK_ADDRESS_3 = "BOB...TEST";

export const mockTickets: Ticket[] = [
  { id: 1024, roundNumber: 5, ownerAddress: MOCK_ADDRESS_1, status: 'owned', price: 100, image: 'ticket-1' },
  { id: 1025, roundNumber: 5, ownerAddress: MOCK_ADDRESS_1, status: 'owned', price: 100, image: 'ticket-2' },
  { id: 876, roundNumber: 5, ownerAddress: MOCK_ADDRESS_2, status: 'listed', price: 150, image: 'ticket-3' },
  { id: 345, roundNumber: 5, ownerAddress: MOCK_ADDRESS_3, status: 'listed', price: 120, image: 'ticket-4' },
  { id: 912, roundNumber: 5, ownerAddress: MOCK_ADDRESS_2, status: 'listed', price: 110, image: 'ticket-5' },
  { id: 555, roundNumber: 5, ownerAddress: MOCK_ADDRESS_3, status: 'listed', price: 200, image: 'ticket-6' },
  { id: 731, roundNumber: 5, ownerAddress: MOCK_ADDRESS_1, status: 'listed', price: 135, image: 'ticket-7' },
  { id: 404, roundNumber: 5, ownerAddress: MOCK_ADDRESS_2, status: 'owned', price: 100, image: 'ticket-8' },
];

export const mockWinners: Winner[] = [
    { roundNumber: 4, winnerAddress: "WINR...ABCD", prizeAmount: 850230, winningTicketId: 777, drawDate: "2024-07-20" },
    { roundNumber: 3, winnerAddress: "LUCKY...EFGH", prizeAmount: 720100, winningTicketId: 123, drawDate: "2024-07-13" },
    { roundNumber: 2, winnerAddress: "JACKPOT...IJKL", prizeAmount: 980500, winningTicketId: 456, drawDate: "2024-07-06" },
    { roundNumber: 1, winnerAddress: "FIRST...MNOP", prizeAmount: 550000, winningTicketId: 789, drawDate: "2024-06-29" },
];
