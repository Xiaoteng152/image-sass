import { createTPRCContext, serverColler } from "@/utils/trpc"


export default async function Home(){
    const context = await createTPRCContext()
    const data = await serverColler(context).hello()
    return (
        <div>
        DashBoard{data.hello}
        </div>
    )
}