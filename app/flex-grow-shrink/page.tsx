import Link from "next/link";
import "./styles.css";

export default function Page() {
  return (
    <div id="flex-grow-shrink">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>

      <h3 className="ml-1">flex-grow</h3>
      <div className="flex flex-wrap">
        <div className="content grow flex items-center justify-center">1</div>
        <div className="content grow-[2] flex items-center justify-center">
          2
        </div>
        <div className="content grow-[3] flex items-center justify-center">
          3
        </div>
        <div className="content grow-0 flex items-center justify-center">0</div>
        <div className="content grow flex items-center justify-center">1</div>
        <div className="content flex items-center justify-center">0</div>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">flex-shrink, w-96</h3>
      <div className="flex">
        <div className="content shrink-0 bg-blue-500 w-96 flex items-center justify-center">
          0
        </div>
        <div className="content shrink-[4] bg-red-500 w-96 flex items-center justify-center">
          4
        </div>
        <div className="content shrink-[2] bg-green-500 w-96 flex items-center justify-center">
          2
        </div>
        <div className="content shrink-[2] bg-yellow-500 w-96 flex items-center justify-center">
          2
        </div>
        <div className="content shrink-1 bg-yellow-500 w-96 flex items-center justify-center">
          4
        </div>
      </div>

      <hr className="my-5"></hr>

      <h3 className="ml-1">flex-basis-96</h3>
      <div className="flex">
        <div className="content shrink-0 bg-blue-500 basis-96 flex items-center justify-center">
          0 basis
        </div>
        <div className="content shrink-1 bg-red-500 basis-96 flex items-center justify-center">
          1
        </div>
        <div className="content shrink-[2] bg-green-500 basis-96 flex items-center justify-center">
          2
        </div>
        <div className="content shrink-[3] bg-green-500 basis-96 flex items-center justify-center">
          3
        </div>
        <div className="content shrink-[2] bg-green-500 basis-96 flex items-center justify-center">
          2
        </div>
      </div>
    </div>
  );
}
