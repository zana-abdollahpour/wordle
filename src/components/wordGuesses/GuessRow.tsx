import { useGameState } from "../../hooks/useGameState";
import GuessCell from "./GuessCell";

interface GuessRowProps {
  tryIndex: number;
}

export default function GuessRow({ tryIndex }: GuessRowProps) {
  const { targetWord, curGuess, currentGuessIndex, guesses } = useGameState();

  return (
    <li className="flex gap-2">
      {Array(targetWord.length)
        .fill(null)
        .map((_, i) => (
          <GuessCell key={i}>
            {tryIndex < currentGuessIndex
              ? guesses[tryIndex][i].char
              : tryIndex === currentGuessIndex
                ? curGuess[i]
                : ""}
          </GuessCell>
        ))}
    </li>
  );
}
