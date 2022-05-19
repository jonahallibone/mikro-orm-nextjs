import {
    PrimaryKey,
    Entity,
    Property,
    ManyToOne,
    Reference,  
} from "@mikro-orm/core";
import { User } from "./User";
  
@Entity()
export class Book {
    @PrimaryKey()
    id!: number;
  
    @Property()
    title!: string;

    @ManyToOne({ entity: () => User, wrappedReference: true })
    user!: Reference<User>;
}
