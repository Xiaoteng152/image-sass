import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
export default function Home() {
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
    </div>
  );
}
