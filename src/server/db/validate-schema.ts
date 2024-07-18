import {createInsertSchema,createSelectSchema} from 'drizzle-zod'

import {users} from './schema'

//使用zod检验邮箱
export const insertUserSchema = createInsertSchema(users,{
    email:(schema)=>schema.email.email(),
})

//校验只需要email
export const updateUserSchema = insertUserSchema.pick({email:true})

export const queryUserSchema = createSelectSchema(users)