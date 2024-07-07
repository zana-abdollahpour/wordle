import GuessRow from "./GuessRow";

export default function WordGuesses() {
  return (
    <ul className="mt-12 flex flex-col items-center justify-center gap-2">
      {/* TODO: change the number to match the number of allowed tries */}

      {Array(6)
        .fill(null)
        .map((_, i) => (
          <GuessRow key={i} />
        ))}
    </ul>
  );
}
