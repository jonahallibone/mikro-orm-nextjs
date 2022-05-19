import {
  PrimaryKey,
  Entity,
  Property,  
  Unique,
  OneToMany,
  Collection,
  Cascade,
} from "@mikro-orm/core";
import { Book } from "./Book";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  @Unique()
  email: string;

  @Property({ nullable: true })
  born?: Date;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  @OneToMany({
    entity: () => Book,
    mappedBy: (book) => book.user,
    orphanRemoval: true,
    cascade: [Cascade.ALL],
  })
  books = new Collection<Book>(this);
}
