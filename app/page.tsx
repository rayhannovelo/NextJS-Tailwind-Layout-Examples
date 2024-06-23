import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center my-3">Tutorial Tailwind Layout</h1>
      <div className="flex justify-center">
        <ol className="list-decimal flex space-x-12">
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
            <Link href="/grid" className="hover:underline">
              Grid
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
