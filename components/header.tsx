"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Star, Zap, Shield } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderContent = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <div className="flex items-center gap-10 lg:gap-20 justify-between">
      <div>
        <a href="/">
          <Image
            src="logo/white.svg"
            width="130"
            height="0"
            alt="logo"
            className="hover:animate-pulse"
          ></Image>
        </a>
      </div>
      <div className="hidden sm:block">
        <ul className="flex flex-row gap-10">
          <li className="relative">
            <button
              className="flex items-center gap-1 hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              Solutions
              <motion.div
                animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 w-[18rem] md:w-[24rem] xl:w-[40rem] bg-zinc-950 rounded-xl shadow-2xl border border-zinc-800 p-5 z-50"
                >
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {/* VIP Solution */}
                    <a
                      href="/solution1"
                      className="col-span-2 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition duration-200 relative overflow-hidden border border-blue-400/60"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-900/30 to-blue-500/30 opacity-80 hover:opacity-100 transition-opacity duration-200" />
                      <div className="flex items-start gap-3 relative z-10">
                        <Star className="w-7 h-7 md:w-5 xl:w-4" />
                        <div>
                          <h2 className="text-md font-semibold text-zinc-200">
                            Premium Solution
                          </h2>
                          <p className="text-xs text-zinc-500 mt-2 font-medium">
                            Our flagship solution with advanced features for maximum impact.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* Secondary Solutions */}
                    <div className="col-span-1 flex flex-col gap-3 w-[15.5rem] md:w-[21.5rem] xl:w-auto">
                      <a
                        href="/solution2"
                        className="p-3 bg-gradient-to-br from-zinc-500/10 via-zinc-950 to-zinc-500/10 hover:bg-zinc-900 border-zinc-700/30 border-2 rounded-lg transition duration-200 group"
                      >
                        <div className="flex items-start gap-2">
                          <div>
                            <h2 className="text-sm font-medium text-zinc-200">
                              Basic Solution
                            </h2>
                            <p className="text-xs text-zinc-500 mt-1.5 font-medium">
                              Essential tools for getting started.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/solution3"
                        className="p-3 bg-gradient-to-br from-zinc-500/10 via-zinc-950 to-zinc-500/10 hover:bg-zinc-900 border-zinc-700/30 border-2 rounded-lg transition duration-200 group"
                      >
                        <div className="flex items-start gap-2">
                          <div>
                            <h4 className="text-sm font-medium text-zinc-200">
                              Pro Solution
                            </h4>
                            <p className="text-xs text-zinc-500 mt-1.5 font-medium">
                              Enhanced features for professionals.
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li className="hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md">
            <a href="OK">Features</a>
          </li>
          <li className="hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md">
            <a href="OK">Pricing</a>
          </li>
          <li className="hover:underline underline-offset-4 decoration-2 decoration-zinc-700 text-zinc-300 hover:text-zinc-100 transition ease-in-out duration-75 text-md hidden md:block">
            <a href="OK">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:block">
          <Button variant="outline" className="hover:cursor-pointer">
            Log In
          </Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button className="hover:cursor-pointer">Sign Up</Button>
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="grid gap-4 py-4"></div>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      {isFixed && <div style={{ height: "68px" }} />}
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