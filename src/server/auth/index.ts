import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
    AuthOptions,
    getServerSession as nextAuthGetServerSession,
} from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";
import { db } from "@/server/db/db";
export const authOptions: AuthOptions = {
    // session: {
    //     strategy: "jwt",
    // },
    adapter: DrizzleAdapter(db),
    // Configure one or more authentication providers
    providers: [
        GitlabProvider({
            clientId:
                "e688d12fef27a77cd3651c0476c5a811a012201fba01441cfde6d673f3039f96",
            clientSecret:
                "gloas-5144bc69e2a1289659fadb0711c7a5c68e3c1b4bff6c24fefb529fa43f66a5f5",
        }),
    ],
};

export function getServerSession() {
    return nextAuthGetServerSession(authOptions);

    
}
