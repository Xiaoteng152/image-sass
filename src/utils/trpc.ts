import { getServerSession } from '@/server/auth'
import {initTRPC, TRPCError} from '@trpc/server'
import { createCallerFactory } from '@trpc/server/unstable-core-do-not-import'
import { resolve } from 'path'

export async function createTPRCContext(){
    const session = await getServerSession()

    if(!session?.user){
       throw new TRPCError({
        code:"FORBIDDEN"
       })
    }
    return {
        session
    }
}

const t = initTRPC.context<typeof createTPRCContext>().create()

const {router,procedure} = t

const middleware = t.middleware( async({ctx,next})=>{
    const start = Date.now()

    const result = await next()
    console.log("===>",Date.now()-start)
    return result
})

const checkeLoginMiddleware = t.middleware(async({ctx,next})=>{
    if(!ctx.session?.user){
        throw new TRPCError({
            code:"FORBIDDEN"
        })
    }
    return next()
})

const loggedProcedure = procedure.use(middleware)

const protectedProcedure = procedure.use(checkeLoginMiddleware)


//声明api
export const testRouter = router({
    hello:loggedProcedure.query(async({ctx})=>{
        await new Promise((resolve)=>{
            setTimeout(resolve,1000)
        })
        return {
            hello:'world'
        }
    })
})

export type TestRouter = typeof testRouter;

export const serverColler = createCallerFactory()(testRouter)