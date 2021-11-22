import { NextApiHandler } from 'next';
import 'reflect-metadata';
import { User } from "../../entities/User";
import getEM from '../../utils/getEM';
import withORM from '../../utils/withORM';

const handler: NextApiHandler = async (req, res) => {
  const em = getEM();
  const users = await em.find(User, {});

  console.log(`context-specific em-ID: ${em.id}`);
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(users));
};

export default withORM(handler);
