import type { Validity } from "../../contexts/gameContext";

interface GuessCellProps {
  children: React.ReactNode;
  isInCurrentGuess: boolean;
  bgColorType: Validity;
}

export default function GuessCell({
  children,
  bgColorType,
  isInCurrentGuess,
}: GuessCellProps) {
  const bgColor = !isInCurrentGuess
    ? "bg-transparent"
    : bgColorType === "wrong"
      ? "bg-yellow-600"
      : bgColorType === "right"
        ? "bg-green-600"
        : "bg-transparent";

  return (
    <div
      className={`text flex h-14 w-14 items-center justify-center border border-gray-600 bg-transparent align-middle text-3xl font-bold text-white ${bgColor} `}
    >
      {children}
    </div>
  );
}
