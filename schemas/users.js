import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: integer('id').primaryKey(),
  username: text('username')
});
