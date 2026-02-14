import React, { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  publicKey: string | null;
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType>({
  publicKey: null,
  connected: false,
  connect: () => {},
  disconnect: () => {},
});

export const useWallet = () => useContext(WalletContext);

// Mock wallet adapter for prototype — replace with real @solana/wallet-adapter in production
export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = () => {
    // Simulated Phantom-style public key for prototype
    const mockKey = "7vfC...x3Qm";
    setPublicKey(mockKey);
    setConnected(true);
  };

  const disconnect = () => {
    setPublicKey(null);
    setConnected(false);
  };

  return (
    <WalletContext.Provider value={{ publicKey, connected, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};