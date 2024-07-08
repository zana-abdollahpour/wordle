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
  const result = [...guess].map((char, i) => {
    if (char === targetWord[i]) return { char, placement: "right" as const };
    if (targetWord.includes(char))
      return { char, placement: "misplaced" as const };
    return { char, placement: "absent" as const };
  });

  return result;
};
