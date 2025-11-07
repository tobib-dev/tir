import { db } from "./db";
import { type NewGame, type NewTeam, games, teams } from "./db/schema";
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

export async function createTeam(team: NewTeam) {
  await db.insert(teams).values(team);
}

export async function getTeams() {
  return await db.select().from(teams).orderBy(asc(teams.name));
}
