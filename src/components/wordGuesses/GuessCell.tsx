interface GuessCellProps {
  children: React.ReactNode;
}

export default function GuessCell({ children }: GuessCellProps) {
  return (
    <div
      className={`text flex h-14 w-14 items-center justify-center border border-gray-600 bg-transparent align-middle text-3xl font-bold text-white`}
    >
      {children}
    </div>
  );
}
