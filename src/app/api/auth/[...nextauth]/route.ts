import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials) return null

        const { username, password } = credentials
        if(username!== "admin" || password!== "admin") return null


        return {
            id: "1",
            ...credentials,

        }
       
      }
    })
  ]
}

const handler = NextAuth(authOptions)
export {handler as GET,handler as POST} 