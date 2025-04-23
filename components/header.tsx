"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const HeaderContent = () => (
  <div className="flex items-center gap-10 lg:gap-20 justify-between">
    <div>
      <a href="/">
        <Image src='logo/white.svg' width='130' height='0' alt='logo' className='hover:animate-pulse'></Image>
      </a>
    </div>
    <div className='hidden sm:block'>
      <ul className='flex flex-row gap-10'>
        <li className='hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md'>
          <a href="OK">Products</a>
        </li>
        <li className='hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md'>
          <a href="OK">Features</a>
        </li>
        <li className='hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md'>
          <a href="OK">Pricing</a>
        </li>
        <li className='hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md hidden md:block'>
          <a href="OK">Contact</a>
        </li>
      </ul>
    </div>
    <div className='flex items-center gap-4'>
      <div className='hidden lg:block'>
        <Button variant='outline' className='hover:cursor-pointer'>
          Log In
        </Button>
      </div>
      <div>
        <Button className='hover:cursor-pointer'>Sign Up</Button>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setIsFixed(true);
      if (latest > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsFixed(false);
      setIsVisible(false);
    }
    setLastScrollY(latest);
  });

  return (
    <>
      {isFixed && <div style={{ height: '68px' }} />}
      {!isFixed && (
        <header className="w-full py-4 px-4 sm:px-8 lg:px-16 bg-radial from-zinc-950 to-zinc-900 from-80% border-b border-zinc-800 antialiased">
          <HeaderContent />
        </header>
      )}
      <motion.header
        className="fixed top-0 left-0 right-0 w-full py-4 px-4 sm:px-8 lg:px-16 bg-radial from-zinc-950 to-zinc-900 from-80% border-b border-zinc-800 antialiased shadow-md z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <HeaderContent />
      </motion.header>
    </>
  );
};

export default Header;