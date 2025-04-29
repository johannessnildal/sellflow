import { SignUp } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-950">
      <div
              className={cn(
                "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
              )}
            />
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-zinc-950" style={{ backgroundPosition: '0% 70%' }}></div>
            <div className="absolute inset-0 z-0 bg-radial from-transparent via-zinc-900 to-zinc-950" style={{ backgroundPosition: '0% 70%' }} />
            <div className="absolute inset-0 z-0 bg-radial from-transparent via-zinc-950/10 to-zinc-800/20" style={{ backgroundPosition: '0% 70%' }} />
      <SignUp />
    </div>
  );
}