"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const marginX = 20; // sum margin left & right

export default function Page() {
  const gridRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(
        gridRef.current ? gridRef.current["offsetWidth"] + marginX : 0
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="grid">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>
      <div className="ml-1">
        <h3>Responsive Notes</h3>
        <ol className="list-disc pl-5">
          <li className="text-blue-400">
            Default is below sm, and focus on them first
          </li>
          <li className="text-emerald-400">sm: 640px</li>
          <li className="text-red-400">md: 768px</li>
          <li className="text-yellow-400">lg: 1024px</li>
          <li className="text-orange-400">xl: 1280px</li>
          <li className="text-gray-400">2xl: 1536px</li>
        </ol>
      </div>

      <hr className="my-5"></hr>

      <p className="mb-5 text-right">Width {`${windowWidth}`}px</p>

      <div
        ref={gridRef}
        className="grid grid-cols-4 gap-4 p-4 bg-blue-400 sm:bg-emerald-400 md:bg-red-400 lg:bg-yellow-400 xl:bg-orange-400 2xl:bg-gray-400"
      >
        <div className="content col-span-4">col-span-4</div>
        <div className="content col-span-2">col-span-2</div>
        <div className="content col-span-2">col-span-2</div>
        <div className="content col-span-3">col-span-3</div>
        <div className="content col-span-1">col-span-1</div>
        <div className="content col-span-2 row-span-2">
          col-span-2 rows-span-2
        </div>
        <div className="content row-span-2">row-span-2</div>
        <div className="content col-span-1">col-span-1</div>
        <div className="content col-span-1">col-span-1</div>
      </div>
    </div>
  );
}
