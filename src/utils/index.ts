import type { CharPlacement, WordCheckResult } from "../types/guess.types";

export const wordChecker = (
  targetWord: string,
  guess: string,
): WordCheckResult => {
  if (targetWord === guess) return "correct";

  const hasTargetChar = [...targetWord].some((char) =>
    [...guess].includes(char),
  );

  if (!hasTargetChar) return "wrong";

  return "contains";
};

export const charPlacementChecker = (
  targetWord: string,
  guess: string,
): CharPlacement => {
  const result = [...targetWord].map((char, i) => {
    if (char === guess[i]) return { char, placement: "right" as const };
    if (guess.includes(char)) return { char, placement: "misplaced" as const };
    return { char, placement: "absent" as const };
  });

  return result;
};
