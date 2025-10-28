import { getGames } from "tir/server/queries";
import { Games } from "tir/api/games";

await Games();
const games = await getGames();
//console.log(games)

export default function HomePage() {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </div>
  );
}
