import { useGameState } from "../../hooks/useGameState";

export default function GameStatus() {
  const { gameResult } = useGameState();

  let message;
  if (gameResult === "OnGoing") message = "keep guessing ...";
  else if (gameResult === "Won") message = "You guessed right!";
  else if (gameResult === "Lost") message = "You lost :(";

  return <h1>{message}</h1>;
}
