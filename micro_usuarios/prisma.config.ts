import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "src/core/prisma/schema.prisma",
  migrations: {
    path: "src/core/prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
