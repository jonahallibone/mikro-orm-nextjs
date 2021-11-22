import { MikroORM, RequestContext } from '@mikro-orm/core';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import config from '../config/mikro-orm';

const getORM = async () => {
  if (!global.__MikroORM__){
      global.__MikroORM__ = await MikroORM.init(config)
        // specific to in-memory sqlite
        .then(async orm => {
          const generator = orm.getSchemaGenerator();
          await generator.createSchema().catch();
          return orm;
        });
  }
  return global.__MikroORM__;
};

const withORM = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  const orm = await getORM();
  return RequestContext.createAsync(orm.em, async () => handler(req, res));
}

export default withORM;
