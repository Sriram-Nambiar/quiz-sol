export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What consensus mechanism does Solana use?",
    options: ["Proof of Work", "Proof of Stake", "Proof of History", "Delegated PoS"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "What is the native token of Solana?",
    options: ["ETH", "SOL", "SLN", "SOLA"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Who founded Solana?",
    options: ["Vitalik Buterin", "Anatoly Yakovenko", "Charles Hoskinson", "Gavin Wood"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What is Solana's theoretical max TPS?",
    options: ["1,000", "10,000", "65,000", "1,000,000"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "What language are Solana programs written in?",
    options: ["Solidity", "Rust", "Python", "Go"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "What is an SPL Token?",
    options: ["A Solana smart contract", "Solana Program Library Token", "A Solana wallet", "A Solana validator"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "What is the smallest unit of SOL called?",
    options: ["Wei", "Gwei", "Lamport", "Satoshi"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "Which wallet is popular for Solana?",
    options: ["MetaMask", "Phantom", "Trust Wallet", "Ledger"],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "What is Solana's block time approximately?",
    options: ["12 seconds", "400 milliseconds", "1 second", "6 seconds"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "What framework is used to build Solana dApps?",
    options: ["Hardhat", "Truffle", "Anchor", "Brownie"],
    correctAnswer: 2,
  },
];
