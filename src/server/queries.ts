import { db } from "./db";
import { type NewGame, games } from "./db/schema";
import { sql, asc, gt, gte, and, lt } from "drizzle-orm";

export async function createGame(game: NewGame) {
  await db.insert(games).values(game);
}

export async function getUpcomingGames() {
  return await db
    .select()
    .from(games)
    .where(gt(games.startTime, new Date()))
    .orderBy(asc(games.startTime));
}

export async function getLiveGames() {
  return await db
    .select()
    .from(games)
    .where(
      and(
        gte(games.startTime, sql`CURRENT_TIMESTAMP - INTERVAL '2 hours'`),
        lt(games.startTime, sql`CURRENT_TIMESTAMP`),
      ),
    )
    .orderBy(asc(games.startTime));
}
