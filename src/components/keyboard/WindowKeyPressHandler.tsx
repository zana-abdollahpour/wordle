import { useEffect } from "react";

import { useGameState } from "../../hooks/useGameState";
import { charPlacementChecker, wordChecker } from "../../utils";

export default function WindowKeyPressHandler() {
  const {
    targetWord,
    setGuesses,
    curGuess,
    setCurGuess,
    setGameResult,
    gameResult,
  } = useGameState();

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setCurGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (e.key === "Enter") {
        if (targetWord.length > curGuess.length) return;

        const checkResult = wordChecker(targetWord, curGuess);

        if (checkResult === "correct") {
          setGuesses((prev) => [
            ...JSON.parse(JSON.stringify(prev)),
            charPlacementChecker(targetWord, curGuess),
          ]);
          setGameResult("Won");
          setCurGuess("");
          return;
        }

        if (checkResult === "contains") {
          setGuesses((prev) => [
            ...JSON.parse(JSON.stringify(prev)),
            charPlacementChecker(targetWord, curGuess),
          ]);
          setCurGuess("");
          return;
        }
      }

      if (curGuess.length >= targetWord.length) return;

      const isValidLetter = /^[a-zA-Z]+$/.test(e.key) && e.key.length === 1;
      if (!isValidLetter) return;

      setCurGuess((prev) =>
        prev.length <= targetWord.length ? (prev += e.key.toLowerCase()) : prev,
      );
    };

    if (gameResult !== "OnGoing")
      return () => window.removeEventListener("keydown", keyPressHandler);

    window.addEventListener("keydown", keyPressHandler);
    return () => window.removeEventListener("keydown", keyPressHandler);
  }, [
    curGuess,
    gameResult,
    setCurGuess,
    setGameResult,
    setGuesses,
    targetWord,
  ]);

  return null;
}
