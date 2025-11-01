import { getUpcomingGames, getLiveGames } from "tir/server/queries";
import { SeedDatabase } from "tir/api/games";

await SeedDatabase();
const uGames = await getUpcomingGames();
const lGames = await getLiveGames();

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center gap-4 p-2">
        {lGames.map((g) => (
          <div
            key={g.id}
            className="flex h-36 w-96 flex-col items-center rounded-md bg-stone-400/15 p-3 shadow-md"
          >
            <div className="relative w-full">
              <div className="mb-1 text-center text-lg font-semibold">
                {g.name}
              </div>
              <div className="absolute top-0 right-0 mb-1 text-sm font-normal text-red-500">
                &apos;
                {(
                  (Date.now() - new Date(g.startTime).getTime()) /
                  60000
                ).toFixed(0)}
              </div>
            </div>
            <div className="text-base">
              {g.homeScore} - {g.visitingScore}
            </div>
            <div>{g.location}</div>
          </div>
        ))}
        {uGames.map((game) => (
          <div
            key={game.id}
            className="flex h-36 w-96 flex-col items-center rounded-md bg-blue-500/10 p-3"
          >
            <div className="mb-1 text-lg font-semibold">{game.name}</div>
            <div className="text-base">
              {game.homeScore} - {game.visitingScore}
            </div>
            <div className="text-sm text-gray-400">
              {new Date(game.startTime).toLocaleString()}
            </div>
            <div>{game.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
