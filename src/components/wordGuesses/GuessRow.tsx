import { useGameState } from "../../hooks/useGameState";
import GuessCell from "./GuessCell";

interface GuessRowProps {
  tryIndex: number;
}

export default function GuessRow({ tryIndex }: GuessRowProps) {
  const { currentTry, previousGuesses, targetWord, currentGuess } =
    useGameState();

  const isPreviousGuess = tryIndex < currentTry;
  const isCurrentGuess = tryIndex === currentTry;

  return (
    <li className="flex gap-2">
      {Array(targetWord.length)
        .fill(null)
        .map((_, i) => (
          <GuessCell key={i}>
            {isCurrentGuess
              ? currentGuess[i]
              : isPreviousGuess
                ? previousGuesses[tryIndex][i]
                : ""}
          </GuessCell>
        ))}
    </li>
  );
}
