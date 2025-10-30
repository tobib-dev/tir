import { getGames } from "tir/server/queries";
import { SeedDatabase } from "tir/api/games";

await SeedDatabase();
const games = await getGames();

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center gap-4 p-2">
        {games.map((game) => (
          <div key={game.id} className="flex flex-col items-center bg-blue-500/10 p-3 rounded-md shadow-md w-96 h-36">
            <div className="text-lg font-semibold mb-1">{game.name}</div>
            <div className="text-base">
              {game.homeScore} - {game.visitingScore}
            </div>
            <div className="text-sm text-gray-400">
            {new Date(game.startTime).toLocaleString()}
          </div>
          <div>
            {game.location}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
