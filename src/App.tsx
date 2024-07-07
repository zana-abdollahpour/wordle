import WordGuesses from "./components/wordGuesses";
import Keyboard from "./components/keyboard";
import { GameProvider } from "./contexts/gameContext";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black/90">
      <div className="mx-auto flex max-w-[30rem] flex-col items-center gap-8 pt-12">
        <GameProvider>
          <WordGuesses />
          <Keyboard />
        </GameProvider>
      </div>
    </div>
  );
}
