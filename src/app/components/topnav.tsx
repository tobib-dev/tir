import Image from "next/image";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

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

        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start p-2">
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
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-md border-gray-700/30 bg-gray-800/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button>Search</Button>
        </div>
      </div>
    </nav>
  );
}
