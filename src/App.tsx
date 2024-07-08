import WordGuesses from "./components/wordGuesses";
import Keyboard from "./components/keyboard";
import Header from "./components/header";

export default function App() {
  return (
    <div className="h-screen w-screen">
      <div className="mx-auto flex max-w-[30rem] flex-col items-center gap-8 pt-20">
        <Header />
        <WordGuesses />
        <Keyboard />
      </div>
    </div>
  );
}
