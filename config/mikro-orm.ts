import { User } from "../entities/User";
import { Options } from "@mikro-orm/core";

const config: Options = {
  dbName: "async-up",
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  entities: [User],
  debug: process.env.NODE_ENV === "development",
};

export default config;
