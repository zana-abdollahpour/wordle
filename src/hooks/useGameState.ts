import { useContext } from "react";

import { GameContext } from "../contexts/gameContext";

export const useGameState = () => {
  const context = useContext(GameContext);

  if (context === undefined)
    throw new Error("Context used outside of the Provider");

  return context!;
};
