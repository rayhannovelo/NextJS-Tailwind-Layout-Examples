import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Tutorial Tailwind Layout</h1>
      <div className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/normal-flow">Normal Flow</Link>
          </li>
          <li>Display</li>
          <li>FlexBox</li>
          <li>Grid</li>
        </ul>
      </div>
    </div>
  );
}
