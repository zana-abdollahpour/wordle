interface ResultProps {
  message: React.ReactNode;
}

export default function Result({ message = "" }: ResultProps) {
  return <h1 className="absolute top-6 text-4xl text-white">{message}</h1>;
}
