import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  imageUrl: varchar('imageUrl', { length: 255 }).notNull(),
  credits: integer('credits').notNull().default(5),
});