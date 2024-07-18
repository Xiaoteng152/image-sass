import { getServerSession } from "@/server/auth";
import { createTPRCContext, testRouter } from "@/utils/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from 'next/server';

const handler = (request:NextRequest)=>{
    return fetchRequestHandler({
        endpoint:'/api/trpc',
        req:request,//收到的nextRequest对象
        router:testRouter,
        createContext:createTPRCContext,
    })
}

export {handler as GET,handler as POST}