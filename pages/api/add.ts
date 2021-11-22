import Chance from 'chance';
import 'reflect-metadata';
import startOrm from "../../config/initialize-database";
import { User } from "../../entities/User";

const handler = async (req, res) => {
  const chance = new Chance()
  const orm = await startOrm();
  const user = new User(chance.name(),chance.email());
  await orm.em.persistAndFlush(user);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));
};

export default handler
