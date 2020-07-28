import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Link href="/kickers">Voir la page kickers</Link>
      </div>
      <div>
        <Link href="/clarks">Voir la page clarks</Link>
      </div>
      <div>
        <Link href="/edito/sarenza-x-daphne">Voir la Edito</Link>
      </div>
    </div>
  );
}
