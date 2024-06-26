import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cyan-400 flex flex-col justify-center items-center">
      <h1 className="text-center py-3">Next.js Tailwind Training</h1>
      <ol className="list-decimal">
        <li>
          <Link href="/normal-flow" className="hover:underline">
            Normal Flow
          </Link>
        </li>
        <li>
          <Link href="/display" className="hover:underline">
            Display: inline-block, block
          </Link>
        </li>
        <li>
          <Link href="/flex-direction-wrap-order" className="hover:underline">
            Flexbox: flex-direction, flex-wrap, order
          </Link>
        </li>
        <li>
          <Link href="/flex-grow-shrink" className="hover:underline">
            Flexbox: flex-grow, flex-shrink, flex-basis
          </Link>
        </li>
        <li>
          <Link href="/flex-alignment" className="hover:underline">
            Flexbox: justify-content, align-items, align-content, gap
          </Link>
        </li>
        <li>
          <Link href="/grid" className="hover:underline">
            Grid Template
          </Link>
        </li>
        <li>
          <Link href="/grid-alignment" className="hover:underline">
            Grid Alignment
          </Link>
        </li>
      </ol>
    </div>
  );
}
