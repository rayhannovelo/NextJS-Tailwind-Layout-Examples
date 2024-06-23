import Link from "next/link";

export default function Page() {
  return (
    <div id="flex-alignment">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>

      <div className="ml-1">
        <h3>Flex Notes</h3>
        <ol className="list-disc pl-5">
          <li>justify-content {"->"} justify-center: x-axis</li>
          <li>align-items {"->"} items-center: y-axis</li>
        </ol>
      </div>

      <hr className="my-5"></hr>

      <h3>display: flex, justify-center, items-center</h3>
      <div className="flex flex-wrap justify-center items-center bg-red-400 min-h-[450px] p-5">
        <div className="content bg-blue-400 flex flex-col justify-center items-center text-center">
          <h1>Content 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit! lor
          </p>
        </div>
        <div className="content bg-emerald-400 flex flex-col justify-center items-center text-center">
          <h1>Content 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit!
          </p>
        </div>
        <div className="content bg-yellow-400 flex flex-col justify-center items-center text-center">
          <h1>Content 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit!
          </p>
        </div>
      </div>

      <hr className="my-5"></hr>

      <h3>display: flex, justify-end, items-start</h3>
      <div className="flex flex-wrap justify-end items-start bg-red-400 min-h-[450px] p-5">
        <div className="content bg-blue-400 flex flex-col justify-center items-center text-center">
          <h1>Content 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit! lor
          </p>
        </div>
        <div className="content bg-emerald-400 flex flex-col justify-center items-center text-center">
          <h1>Content 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit!
          </p>
        </div>
        <div className="content bg-yellow-400 flex flex-col justify-center items-center text-center">
          <h1>Content 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit!
          </p>
        </div>
      </div>

      <hr className="my-5"></hr>

      <h3>display: flex, justify-start, items-end</h3>
      <div className="flex flex-wrap justify-start items-end bg-red-400 min-h-[450px] p-5">
        <div className="content bg-blue-400 flex flex-col justify-center items-center text-center">
          <h1>Content 1</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit! lor
          </p>
        </div>
        <div className="content bg-emerald-400 flex flex-col justify-center items-center text-center">
          <h1>Content 2</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit!
          </p>
        </div>
        <div className="content bg-yellow-400 flex flex-col justify-center items-center text-center">
          <h1>Content 3</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            asperiores provident? Porro enim praesentium itaque. Eveniet enim
            amet recusandae cupiditate! Dolor facere ex quis consequatur amet,
            eum maiores error fugit!
          </p>
        </div>
      </div>
    </div>
  );
}
