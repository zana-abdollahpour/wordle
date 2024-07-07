import { createContext, useState } from "react";

const NUM_ALLOWED_TRIES = 6;

export interface IGameContext {
  numAllowedTries: number;
  targetWord: string;
  currentGuess: string;
  previousGuesses: string[];
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
  setPreviousGuesses: React.Dispatch<React.SetStateAction<string[]>>;
  currentTry: number;
}

export const GameContext = createContext<IGameContext | null>(null);

export const GameProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  // You can use lazy initialization with callback function to get the word from an api
  // We don't need setter function, because we won't change it
  const [targetWord] = useState<string>("regret");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [previousGuesses, setPreviousGuesses] = useState<string[]>([]);

  const currentTry = previousGuesses.length;

  return (
    <GameContext.Provider
      value={{
        numAllowedTries: NUM_ALLOWED_TRIES,
        targetWord,
        currentGuess,
        setCurrentGuess,
        previousGuesses,
        setPreviousGuesses,
        currentTry,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
