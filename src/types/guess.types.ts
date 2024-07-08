export type WordCheckResult = "correct" | "wrong" | "contains";

export type charPlacementCheckResult = "right" | "absent" | "misplaced";

export type CharPlacement = {
  char: string;
  placement: charPlacementCheckResult;
}[];
