import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import { useGameState } from "../../hooks/useGameState";
import { charPlacementChecker, wordChecker } from "../../utils";

export default function VirtualKeyboard() {
  const {
    targetWord,
    setGuesses,
    curGuess,
    setCurGuess,
    setGameResult,
    gameResult,
  } = useGameState();

  const handleKeyPress = (pressedKey: string) => {
    if (gameResult !== "OnGoing") return;

    if (pressedKey === "{backspace}") {
      setCurGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (pressedKey === "{ent}") {
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

    const isValidLetter =
      /^[a-zA-Z]+$/.test(pressedKey) && pressedKey.length === 1;
    if (!isValidLetter) return;

    setCurGuess((prev) =>
      prev.length <= targetWord.length
        ? (prev += pressedKey.toLowerCase())
        : prev,
    );
  };

  return (
    <Keyboard
      layout={{
        default: [
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "{ent} Z X C V B N M {backspace}",
        ],
      }}
      display={{
        "{ent}": "ENTER",
        "{backspace}": "⌫",
      }}
      onKeyPress={handleKeyPress}
    />
  );
}
