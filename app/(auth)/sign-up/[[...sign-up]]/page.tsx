import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-950">
      <div><SignUp /></div>
    </div>
  );
}