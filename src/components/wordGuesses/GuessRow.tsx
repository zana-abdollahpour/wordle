import { useGameState } from "../../hooks/useGameState";
import GuessCell from "./GuessCell";

export default function GuessRow() {
  const { targetWord } = useGameState();

  return (
    <li className="flex gap-2">
      {Array(targetWord.length)
        .fill(null)
        .map((_, i) => (
          <GuessCell key={i} />
        ))}
    </li>
  );
}
