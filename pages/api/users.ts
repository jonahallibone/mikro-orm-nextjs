import 'reflect-metadata';
import startOrm from "../../config/initialize-database";
import { User } from "../../entities/User";

const handler = async (req, res) => {
  const orm = await startOrm();
  const users = await orm.em.find(User, {});

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ user: users }));
};

export default handler
