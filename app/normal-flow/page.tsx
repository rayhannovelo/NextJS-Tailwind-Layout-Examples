import Link from "next/link";

export default function Home() {
  return (
    <div id="normal-flow" className="w-[500px] min-h-screen">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>

      <h1>Normal Flow</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
        inventore eius in officiis vitae velit maxime aliquid nihil est
        similique ad magnam fuga neque! Dicta iste sit rerum dolore minus?
      </p>

      <h2>Normal Flow</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        nihil reiciendis possimus expedita nesciunt mollitia eveniet, sapiente
        dolor, perspiciatis est sunt, voluptates dolorum ducimus impedit ratione
        sint placeat? Possimus, tempore.
      </p>
    </div>
  );
}
