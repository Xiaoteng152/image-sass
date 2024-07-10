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
                "931d22cf064f2b15c853044866fd07683b909316b4ef83f32168b56cb068ced6",
            clientSecret:
                "gloas-1b58971e83d02b4b56d23e60ce0434eb6f47931d2daa163a8a049067ff712256",
        }),
    ],
};

export function getServerSession() {
    return nextAuthGetServerSession(authOptions);
}
