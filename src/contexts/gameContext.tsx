import { createContext, useEffect, useState } from "react";

import type { CharPlacement } from "../types/guess.types";

const NUM_ALLOWED_TRIES = 6;

export interface IGameContext {
  numAllowedTries: number;
  targetWord: string;
  guesses: CharPlacement[];
  setGuesses: React.Dispatch<React.SetStateAction<CharPlacement[]>>;
  currentGuessIndex: number;
  gameResult: GameResult;
  setGameResult: React.Dispatch<React.SetStateAction<GameResult>>;
  curGuess: string;
  setCurGuess: React.Dispatch<React.SetStateAction<string>>;
}

export type GameResult = "Lost" | "OnGoing" | "Won";

export const GameContext = createContext<IGameContext | null>(null);

export const GameProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  // You can use lazy initialization with callback function to get the word from an api
  // We don't need setter function, because we won't change it
  const [targetWord] = useState<string>("regret");
  const [guesses, setGuesses] = useState<CharPlacement[]>([]);
  const [gameResult, setGameResult] = useState<GameResult>("OnGoing");
  const [curGuess, setCurGuess] = useState<string>("");

  const currentGuessIndex = guesses.length;

  useEffect(() => {
    if (currentGuessIndex === NUM_ALLOWED_TRIES) setGameResult("Lost");
  }, [currentGuessIndex]);

  return (
    <GameContext.Provider
      value={{
        numAllowedTries: NUM_ALLOWED_TRIES,
        targetWord,
        guesses,
        setGuesses,
        currentGuessIndex,
        gameResult,
        setGameResult,
        curGuess,
        setCurGuess,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
