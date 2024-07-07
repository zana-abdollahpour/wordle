import { useEffect } from "react";

import { useGameState } from "../../hooks/useGameState";

export default function WindowKeyPressHandler() {
  const { targetWord, currentGuess, setCurrentGuess } = useGameState();

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }
      if (e.key === "Enter") {
        if (targetWord.length > currentGuess.length) return;
        // TODO: Check to see if targetWord and current guess match
      }

      if (currentGuess.length >= targetWord.length) return;

      const isValidLetter = /^[a-zA-Z]+$/.test(e.key) && e.key.length === 1;
      if (!isValidLetter) return;

      setCurrentGuess((prev) => (prev += e.key.toLowerCase()));
    };

    window.addEventListener("keydown", keyPressHandler);
    return () => window.removeEventListener("keydown", keyPressHandler);
  }, [currentGuess.length, setCurrentGuess, targetWord.length]);

  return null;
}
