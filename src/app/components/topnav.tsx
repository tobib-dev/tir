import Image from "next/image";

export default function TopNav() {
  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-2">
        <Image
          src="/images/tir-logo.png"
          alt="Tir logo"
          width={100}
          height={50}
        />

        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex space-x-4">
            <a
              href="#"
              aria-current="page"
              className="rounded-md bg-gray-800/50 px-3 py-2 text-sm font-medium"
            >
              Games
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700/50 hover:text-white"
            >
              Standings
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700/50 hover:text-white"
            >
              Stats
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700/50 hover:text-white"
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
