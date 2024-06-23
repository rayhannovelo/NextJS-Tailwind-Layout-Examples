import Link from "next/link";

export default function Page() {
  return (
    <div id="display">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>

      <h3 className="ml-1">display: inline-block, width: 500px</h3>
      <div className="content inline-block bg-blue-400">
        <h1>Content 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in,
          est magnam eos distinctio officiis eligendi odit maxime laudantium,
          dolorem voluptate inventore blanditiis, earum veniam ex harum optio
          nostrum quis.
        </p>
      </div>
      <div className="content inline-block bg-emerald-400">
        <h1>Content 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in,
          est magnam eos distinctio officiis eligendi odit maxime laudantium,
          dolorem voluptate inventore blanditiis, earum veniam ex harum optio
          nostrum quis.
        </p>
      </div>
      <div className="content inline-block bg-yellow-400">
        <h1>Content 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in,
          est magnam eos distinctio officiis eligendi odit maxime laudantium,
          dolorem voluptate inventore blanditiis, earum veniam ex harum optio
          nostrum quis.
        </p>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">display: block, width: 500px</h3>
      <div className="content block bg-blue-400">
        <h1>Content 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in,
          est magnam eos distinctio officiis eligendi odit maxime laudantium,
          dolorem voluptate inventore blanditiis, earum veniam ex harum optio
          nostrum quis.
        </p>
      </div>
      <div className="content block bg-emerald-400">
        <h1>Content 2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in,
          est magnam eos distinctio officiis eligendi odit maxime laudantium,
          dolorem voluptate inventore blanditiis, earum veniam ex harum optio
          nostrum quis.
        </p>
      </div>
      <div className="content block bg-yellow-400">
        <h1>Content 3</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in,
          est magnam eos distinctio officiis eligendi odit maxime laudantium,
          dolorem voluptate inventore blanditiis, earum veniam ex harum optio
          nostrum quis.
        </p>
      </div>
    </div>
  );
}
