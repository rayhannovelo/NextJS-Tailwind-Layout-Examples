import Link from "next/link";
import "./styles.css";

export default function Page() {
  return (
    <div id="flex-direction-wrap-order">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>

      <div className="ml-1">
        <h3>Flex Default Value</h3>
        <ol className="list-disc pl-5">
          <li>flex-direction: row</li>
          <li>flex-wrap: nowrap</li>
        </ol>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">
        display: flex, flex-direction: row, flex-wrap: wrap; order content 1
        -&gt; 2 content 2 -&gt; 3 content 3 -&gt; 1
      </h3>
      <div className="flex flex-wrap">
        <div className="content bg-blue-400 m-1 p-3 order-2">
          <h1>Content 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-emerald-400 m-1 p-3 order-3">
          <h1>Content 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-yellow-400 m-1 p-3 order-1">
          <h1>Content 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">display: flex, flex-direction: row-reverse</h3>
      <div className="flex flex-row-reverse">
        <div className="content bg-blue-400 m-1 p-3">
          <h1>Content 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-emerald-400 m-1 p-3">
          <h1>Content 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-yellow-400 m-1 p-3">
          <h1>Content 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">display: flex, flex-direction: col</h3>
      <div className="flex flex-col">
        <div className="content bg-blue-400 m-1 p-3">
          <h1>Content 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-emerald-400 m-1 p-3">
          <h1>Content 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-yellow-400 m-1 p-3">
          <h1>Content 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">display: flex, flex-direction: col-reverse</h3>
      <div className="flex flex-col-reverse">
        <div className="content bg-blue-400 m-1 p-3">
          <h1>Content 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-emerald-400 m-1 p-3">
          <h1>Content 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
        <div className="content bg-yellow-400 m-1 p-3">
          <h1>Content 3</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            in, est magnam eos distinctio officiis eligendi odit maxime
            laudantium, dolorem voluptate inventore blanditiis, earum veniam ex
            harum optio nostrum quis.
          </p>
        </div>
      </div>
    </div>
  );
}
