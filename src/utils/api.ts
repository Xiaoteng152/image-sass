import { TestRouter } from './trpc';
import {createTRPCReact, CreateTRPCReact} from '@trpc/react-query'
import { createTRPCClient, httpBatchLink } from '@trpc/client'

//初始化trpc客户端，在use clint模式下调用它
export const trpcClientReact = createTRPCReact<TestRouter>();

export const trpcClient = trpcClientReact.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});