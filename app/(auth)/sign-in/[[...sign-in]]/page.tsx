'use client'
import { SignIn } from "@clerk/nextjs";
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from "lucide-react";

const authVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export default function SignInPage() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center text-center">
      <div 
        className="flex flex-row gap-2 items-center justify-center text-zinc-500 antialiased text-xs sm:text-sm hover:bg-zinc-800 rounded-lg w-[6rem] h-[1.5rem] sm:w-[8rem] sm:h-[2rem] hover:text-white duration-100 ease-in-out cursor-pointer"
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon size='20px' /> Go back
      </div>

      <motion.div initial="hidden" animate="visible" variants={authVariants}>
          <div><SignIn /></div>
      </motion.div>
    </main>
  );
}