import { defineConfig } from "drizzle-kit";
process.env.DB_URL = "postgres://postgres:123123@localhost:5432/postgres";

export default defineConfig({
    schema: "./src/server/db/schema.ts",
    dialect:"postgresql",
    dbCredentials: {
        url: process.env.DB_URL,
    },
    verbose: true,
    strict: true,
});
