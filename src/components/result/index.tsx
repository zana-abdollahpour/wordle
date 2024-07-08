import type { GameResult } from "../../contexts/gameContext";

interface ResultProps {
  result: GameResult;
}

export default function Result({ result }: ResultProps) {
  let message;
  if (result === "OnGoing") message = "keep guessing ...";
  else if (result === "Won") message = "You guessed right!";
  else if (result === "Lost") message = "You lust :(";

  return <h1 className="absolute top-6 text-4xl text-white">{message}</h1>;
}
