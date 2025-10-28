import { getGames } from "tir/server/queries";
import { SeedDatabase } from "tir/api/games";

await SeedDatabase();
const games = await getGames();

export default function HomePage() {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </div>
  );
}
