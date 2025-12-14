import Image from "next/image";

type AutismClickProps = {
  onClick: () => void;
};

export default function AutismClick({ onClick }: AutismClickProps) {
  return (
    <button onClick={onClick}>
      <Image
        src="/autism.jpg"
        width={512}
        height={512}
        alt="Silly Autism Creature"
      />
    </button>
  );
}
