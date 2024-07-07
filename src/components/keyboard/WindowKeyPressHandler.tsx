import { useEffect } from "react";

import { useGameState } from "../../hooks/useGameState";

export default function WindowKeyPressHandler() {
  const {
    targetWord,
    currentGuess,
    setCurrentGuess,
    setCharPlaceValidation,
    setPreviousGuesses,
  } = useGameState();

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }
      if (e.key === "Enter") {
        if (targetWord.length > currentGuess.length) return;

        const hasTargetChar = [...currentGuess].some((char) =>
          [...targetWord].includes(char),
        );

        if (!hasTargetChar) return;

        setCharPlaceValidation(
          [...currentGuess].map((char, i) =>
            char === targetWord[i]
              ? "right"
              : [...targetWord].includes(char)
                ? "wrong"
                : "absent",
          ),
        );

        setPreviousGuesses((prev) => [...prev, currentGuess]);
        setCurrentGuess("");
      }

      if (currentGuess.length >= targetWord.length) return;

      const isValidLetter = /^[a-zA-Z]+$/.test(e.key) && e.key.length === 1;
      if (!isValidLetter) return;

      setCurrentGuess((prev) => (prev += e.key.toLowerCase()));
    };

    window.addEventListener("keydown", keyPressHandler);
    return () => window.removeEventListener("keydown", keyPressHandler);
  }, [
    currentGuess,
    currentGuess.length,
    setCharPlaceValidation,
    setCurrentGuess,
    setPreviousGuesses,
    targetWord,
    targetWord.length,
  ]);

  return null;
}
