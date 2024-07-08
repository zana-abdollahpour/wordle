import { useGameState } from "../../hooks/useGameState";

export default function ResetButton() {
  const { resetGame } = useGameState();

  return (
    <button
      type="button"
      className="rounded-md border bg-gray-50 px-3 py-2 text-black transition-all hover:scale-105 active:scale-95"
      onClick={resetGame}
    >
      RESET
    </button>
  );
}
