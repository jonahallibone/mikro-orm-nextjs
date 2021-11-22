import { User } from "../entities/User";
import { Options } from "@mikro-orm/core";

const config: Options = {
  dbName: "test.db",
  type: "sqlite",
  entities: [User],
  debug: process.env.NODE_ENV === "development",
};

export default config;
