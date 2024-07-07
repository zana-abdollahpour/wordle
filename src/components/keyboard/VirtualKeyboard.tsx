import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import { useGameState } from "../../hooks/useGameState";

export default function VirtualKeyboard() {
  const {
    targetWord,
    currentGuess,
    setCurrentGuess,
    setCharPlaceValidation,
    setPreviousGuesses,
  } = useGameState();

  const handleKeyPress = (pressedKey: string) => {
    if (pressedKey === "{backspace}") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (pressedKey === "{ent}") {
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

    const isValidLetter =
      /^[a-zA-Z]+$/.test(pressedKey) && pressedKey.length === 1;
    if (!isValidLetter) return;

    setCurrentGuess((prev) => (prev += pressedKey.toLowerCase()));
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
