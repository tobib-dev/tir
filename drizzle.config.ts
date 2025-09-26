import { type Config } from "drizzle-kit";

import { env } from "tir/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["tir_*"],
} satisfies Config;
