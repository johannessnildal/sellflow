"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRightToLine, Box, Lock, Settings, Sparkles, TrendingUpDown } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from 'framer-motion';
import Faq02 from "@/components/kokonutui/faq-02";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth(); // Check if user is logged in
  
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
  
  <main className="bg-zinc-950 antialiased">
    <div className="relative flex h-[30rem] md:h-[50rem] w-full overflow-hidden rounded-md bg-zinc-950 antialiased md:items-center md:justify-center">
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-zinc-950" style={{ backgroundPosition: '0% 70%' }}></div>
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-zinc-900 to-zinc-950" style={{ backgroundPosition: '0% 70%' }} />
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-zinc-950/10 to-zinc-800/20" style={{ backgroundPosition: '0% 70%' }} />
      
      <div className="absolute flex justify-center text-center top-10 opacity-50">
        <HoverBorderGradient
          containerClassName=""
          as="button"
          className="bg-zinc-950 text-zinc-400 items-center hidden md:block text-sm"
        >
          <span>We only support Etsy for now - More coming!</span>
        </HoverBorderGradient>
      </div>
      
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="z-10 mx-auto mt-20 md:-mt-40 lg:-mt-20 flex flex-col gap-6">
        <h1 className="bg-gradient-to-tl from-zinc-100 via-zinc-100 to-zinc-500 bg-clip-text text-center font-bold text-transparent text-2xl sm:text-3xl md:text-5xl lg:text-7xl">
          Scale your business
        </h1>
        <h1 className="bg-gradient-to-br from-zinc-100 via-zinc-100 to-zinc-500 -mt-4 md:mt-0 bg-clip-text text-center font-bold text-transparent text-2xl sm:text-3xl md:text-5xl lg:text-7xl">
          effortlessly & lightning-fast
        </h1>
        <p className="mx-auto -mt-2 md:mt-2 max-w-[24rem] md:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[46rem] text-center text-sm sm:text-md md:text-lg xl:text-xl font-normal bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-200 bg-clip-text text-transparent">
          Automate and simplify the tedious parts of your business <br /> so you can focus on the really important stuff.
        </p>
        <div className="flex flex-row gap-6 w-auto mx-auto mt-8 sm:mt-12 items-center">
        {isSignedIn ? (
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <button
        className="flex flex-row items-center justify-center gap-2 w-30 sm:w-36 h-10 sm:h-12 dark-border-button"
        onClick={() => window.location.href = '/dashboard'}
      >
        <span className="text-xs sm:text-sm font-medium">Dashboard</span>
        <ArrowRightToLine className="w-4 h-4" />
      </button>
    </motion.div>
        ) : (
          <>
            <div>
              <SignUpButton>
                <Button className="hover:cursor-pointer w-30 sm:w-40 h-10 sm:h-12">
                  Get Started
                </Button>
              </SignUpButton>
            </div>
            <SignInButton>
              <Button variant="outline" className="hover:cursor-pointer w-20 sm:w-24 h-10 sm:h-12">
                Log In
              </Button>
            </SignInButton>
          </>
        )}
        </div>
      </div>
    </div>
    
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Robust and lightning fast"
          description="Keep your customers happy and your mind stress-free with our instant delivery infrastructure."
        />
  
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Easy configuration & setup"
          description="Once you've signed up and connected your online business marketplace, you'll be ready to go in no-time."
        />
  
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Safe and secure"
          description="Keep the conversations with your customers safe with our end-to-end encryption."
        />
  
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Customize to your heart's content"
          description="Choose from a selection of templates or add your already existing branding to ensure you stand out."
        />
  
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<TrendingUpDown className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Flexible, fair prices"
          description="Don't pay for more than you need. Our prices are based on your order volume, and scales with it."
        />
      </ul>
    </div>

    <div className="pt-14 md:pt-28">
      <Faq02 />
    </div>
  </main>
  </motion.div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
 
const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={35}
          glow={true}
          disabled={false}
          proximity={60}
          inactiveZone={0.01}
          variant="default"
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_2px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-zinc-700 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-zinc-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
