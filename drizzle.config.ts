require("dotenv").config();

import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema/*",
  out: "./db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL! as string,
    authToken: process.env.TURSO_AUTH_TOKEN as string,
  },
} satisfies Config;