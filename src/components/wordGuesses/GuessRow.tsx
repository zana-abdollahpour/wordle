import GuessCell from "./GuessCell";

export default function GuessRow() {
  return (
    <li className="flex gap-2">
      {/* TODO: change the number to match length of the target word */}
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <GuessCell key={i} />
        ))}
    </li>
  );
}
