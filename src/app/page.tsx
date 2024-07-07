import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { db } from "@/server/db/db";
import { Users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
export default async function Home() {

  // const users = await db.query.Users.findMany()
  const users = await db.select().from(Users).where(eq(Users.name,"Tengg"))

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
         <h1 className="text-center text-2xl  font-bold">Create Your App</h1>
      <Input name="name" placeholder="App name"></Input>
      <Textarea name="description" placeholder="description"></Textarea>
      <Button
        type="submit"
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Submitwwww
      </Button>
      </form>
      {
        users.map((user)=><div key={user.id}>{user.name}</div>)
      }
    </div>
  );
}
