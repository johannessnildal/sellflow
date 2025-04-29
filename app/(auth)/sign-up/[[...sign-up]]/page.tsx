'use client'
import { SignUp } from "@clerk/nextjs";
import { motion } from 'framer-motion';
import { House } from "lucide-react";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
      >
        <div 
          className="mt-14 flex flex-row gap-2 items-center justify-center text-zinc-500 antialiased text-xs sm:text-sm hover:bg-zinc-800/80 rounded-lg w-[7rem] h-[2rem] sm:w-[7.3rem] hover:text-white duration-100 ease-in-out cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <House size='15px' /> Homepage
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={authVariants}>
          <div><SignUp /></div>
      </motion.div>
    </main>
  );
}