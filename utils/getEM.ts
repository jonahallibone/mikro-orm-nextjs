import { RequestContext } from "@mikro-orm/core";

const getEM = () => {
   const em = RequestContext.getEntityManager();
   if (!em) throw new Error("Entity manager not found. Are you in a 'withORM'-wrapped Context?");
   return em;
}

export default getEM;
