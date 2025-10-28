import { db } from "./db";
import { type NewGame, games } from "./db/schema";

export async function createGame(game: NewGame) {
  await db.insert(games).values(game);
}

export async function getGames() {
    return await db.select().from(games);
}