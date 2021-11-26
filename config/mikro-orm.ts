import { User } from "../entities/User";
import { Options } from "@mikro-orm/core";

const config: Options = {
  dbName: ":memory:",
  type: "sqlite",
  entities: [User],
  debug: process.env.DEBUG === "true" || process.env.DEBUG?.includes("db"),
};

export default config;
