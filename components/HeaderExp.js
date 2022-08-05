import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="backdrop-blur-md grid justify-between grid-cols-[1fr_auto_auto] gap-2 md:gap-6 bg-white/70 dark:bg-slate-700/70 sticky top-0 w-full shadow-sm px-2 md:px-10 m py-3 z-50">
        <Link href="/">
          <div className="text-2xl bg-clip-text bg-gradient-to-l to-indigo-500 from-purple-700 text-transparent dark:text-indigo-300 font-sans font-bold p-1">
            PreLink
          </div>
        </Link>

        <Link href="https://github.com/AkashDeep000/prelink">
          <button className="text-purple-500 dark:text-purple-300 px-2 font-bold ">
            Github
          </button>
        </Link>
        <Link href="/api-info">
          <button className="bg-gradient-to-r d to-indigo-500 from-purple-500 text-white dark:text-slate-100 dark:bg-slate-600 px-3 font-bold rounded">
            Get API
          </button>
        </Link>
      </div>
    </>
  );
}
