import { pgTable,serial,varchar } from 'drizzle-orm/pg-core'

export const Users = pgTable("users",{
    id:serial("user_id").primaryKey(),
    name:varchar("name",{length:255}).notNull(),


})