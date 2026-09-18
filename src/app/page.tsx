import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phil's Portfolio",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 m-8">
      <h1 className="text-4xl font-bold text-gray-100">Philemon Landry's Portfolio</h1>
      <p className="text-gray-400">A collection of things I've built</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/pokemon"
          className="flex flex-col items-center bg-gray-950 rounded-sm p-6 border border-gray-900 w-64
                     transition-all duration-200
                     [@media(hover:hover)]:hover:border-gray-700
                     [@media(hover:hover)]:hover:-translate-y-0.5
                     active:border-gray-700 active:-translate-y-0.5
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600"
        >
          <h2 className="font-semibold text-gray-100">Pokémon Browser</h2>
          <p className="text-gray-400 text-sm text-center mt-2">
            Search and explore the classic 151 with detail pages
          </p>
        </Link>
      </div>
    </div>
  );
}