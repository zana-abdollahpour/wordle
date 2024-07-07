import { useGameState } from "../../hooks/useGameState";
import GuessRow from "./GuessRow";

export default function WordGuesses() {
  const { numAllowedTries } = useGameState();

  return (
    <ul className="mt-12 flex flex-col items-center justify-center gap-2">
      {Array(numAllowedTries)
        .fill(null)
        .map((_, i) => (
          <GuessRow key={i} />
        ))}
    </ul>
  );
}
