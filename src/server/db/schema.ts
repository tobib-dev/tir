// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  uniqueIndex,
  pgTableCreator,
  uuid,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `tir_${name}`);

export const games = createTable(
  "game",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
    startTime: timestamp("start_time").notNull(),
    location: varchar("location", { length: 256 }).notNull(),
    homeTeam: varchar("home_team", { length: 256 }).notNull(),
    visitingTeam: varchar("visiting_team", { length: 256 }).notNull(),
    homeScore: varchar("home_score", { length: 256 }),
    visitingScore: varchar("visiting_score", { length: 256 }),
  },
  (ex) => ({
    nameIndex: index("name_idx").on(ex.name),
  }),
);

export type NewGame = typeof games.$inferInsert;

export const teams = createTable(
  "team",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
    captain: varchar("captain", { length: 256 }).notNull(),
    logo: varchar("logo", { length: 256 }),
  },
  (table) => [uniqueIndex("team_name_idx").on(table.name)],
);

export type NewTeam = typeof teams.$inferInsert;
