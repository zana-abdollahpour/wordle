import { useEffect } from "react";

import { useGameState } from "../../hooks/useGameState";
import { charPlacementChecker, wordChecker } from "../../utils";

export default function WindowKeyPressHandler() {
  const { targetWord, setGuesses, curGuess, setCurGuess, setGameResult } =
    useGameState();

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
          setGameResult("Won");
          setCurGuess("");
          return;
        }

        if (checkResult === "contains") {
          setGuesses((prev) =>
            JSON.parse(JSON.stringify(prev)).push(
              charPlacementChecker(targetWord, curGuess),
            ),
          );
          setCurGuess("");
          return;
        }
      }

      if (curGuess.length >= targetWord.length) return;

      const isValidLetter = /^[a-zA-Z]+$/.test(e.key) && e.key.length === 1;
      if (!isValidLetter) return;

      setCurGuess((prev) => (prev += e.key.toLowerCase()));
    };

    window.addEventListener("keydown", keyPressHandler);
    return () => window.removeEventListener("keydown", keyPressHandler);
  }, [curGuess, setCurGuess, setGameResult, setGuesses, targetWord]);

  return null;
}
