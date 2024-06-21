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
              Display
            </Link>
          </li>
          <li>
            <Link href="/flex" className="hover:underline">
              Flex
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
