import {
  PrimaryKey,
  Entity,
  Property,  
  Unique,
} from "@mikro-orm/core";

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
  age?: number;

  @Property({ nullable: true })
  born?: Date;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
