import Result from "./components/result";
import WordGuesses from "./components/wordGuesses";
import Keyboard from "./components/keyboard";
import { useGameState } from "./hooks/useGameState";

export default function App() {
  const { gameResult } = useGameState();

  return (
    <div className="h-screen w-screen">
      <div className="mx-auto flex max-w-[30rem] flex-col items-center gap-8 pt-12">
        <Result result={gameResult} />
        <WordGuesses />
        <Keyboard />
      </div>
    </div>
  );
}
