'use client'
import { SignUp } from "@clerk/nextjs";
import { motion } from 'framer-motion';

const authVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

export default function SignInPage() {
  return (
    <main>
      <motion.div initial="hidden" animate="visible" variants={authVariants}>
        <div className="flex justify-center items-center min-h-screen bg-zinc-950">
          <div><SignUp /></div>
        </div>
      </motion.div>
    </main>
  );
}