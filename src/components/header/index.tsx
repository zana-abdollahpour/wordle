import GameStatus from "./GameStatus";
import ResetButton from "./ResetButton";

export default function Header() {
  return (
    <div className="absolute top-6 flex w-[30rem] items-center justify-between text-4xl text-white">
      <GameStatus />
      <ResetButton />
    </div>
  );
}
