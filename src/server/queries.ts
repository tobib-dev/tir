import { db } from "./db";
import { type NewGame, games } from "./db/schema";

export async function createGame(game: NewGame) {
  const [rows] = await db.insert(games).values(game).returning();

  return rows;
}