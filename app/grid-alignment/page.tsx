import Link from "next/link";

export default function Page() {
  return (
    <div id="grid-alignment">
      <Link href="/" className="underline mb-3 block">
        Back To Home
      </Link>

      <h3>
        display: grid, grid-cols-[100px_100px_100px],
        grid-rows-[100px_100px_100px], justify-evenly, content-evenly,
        items-stretch
      </h3>
      <div className="grid grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px] bg-emerald-400 h-[500px] justify-evenly content-evenly items-stretch">
        <div className="content">1</div>
        <div className="content">2</div>
        <div className="content">3</div>
        <div className="content">4</div>
        <div className="content">5</div>
        <div className="content">6</div>
        <div className="content">7</div>
        <div className="content">8</div>
        <div className="content">9</div>
      </div>
    </div>
  );
}
