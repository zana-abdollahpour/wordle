import { useGameState } from "../../hooks/useGameState";

interface GuessCellProps {
  children: React.ReactNode;
  tryIndex: number;
  charIndex: number;
}

export default function GuessCell({
  children,
  tryIndex,
  charIndex,
}: GuessCellProps) {
  const { guesses, currentGuessIndex } = useGameState();

  let bgColor = "";
  if (tryIndex < currentGuessIndex) {
    const charPlacementStatus = guesses[tryIndex][charIndex].placement;
    if (charPlacementStatus === "right") bgColor = "!bg-green-600";
    else if (charPlacementStatus === "misplaced") bgColor = "bg-yellow-600";
    else bgColor = "bg-gray-600";
  }

  return (
    <div
      className={`text flex h-14 w-14 items-center justify-center border border-gray-600 bg-transparent align-middle text-3xl font-bold text-white ${bgColor}`}
    >
      {children}
    </div>
  );
}
