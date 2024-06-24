import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cyan-400 flex flex-col justify-center items-center">
      <h1 className="text-center py-3">NextJS Tailwind Training</h1>
      <ol className="list-decimal">
        <li>
          <Link href="/normal-flow" className="hover:underline">
            Normal Flow
          </Link>
        </li>
        <li>
          <Link href="/display" className="hover:underline">
            display inline block
          </Link>
        </li>
        <li>
          <Link href="/flex-direction-wrap-order" className="hover:underline">
            flex-direction, flex-wrap, order
          </Link>
        </li>
        <li>
          <Link href="/flex-grow-shrink" className="hover:underline">
            flex-grow, flex-shrink, flex-basis
          </Link>
        </li>
        <li>
          <Link href="/flex-alignment" className="hover:underline">
            flex: justify-content, align-items, align-content, gap
          </Link>
        </li>
        <li>
          <Link href="/grid" className="hover:underline">
            Grid
          </Link>
        </li>
      </ol>
    </div>
  );
}
