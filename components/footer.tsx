"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Heart, Instagram, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  SignInButton,
  SignUpButton,
  useAuth,
} from "@clerk/nextjs";

const Footer = () => {
  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const { isSignedIn } = useAuth(); // Check if user is logged in

  return (
    <footer className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-radial from-zinc-900/50 via-zinc-950 to-zinc-900 border-t border-zinc-800 antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center md:place-items-start text-center md:text-left">
        {/* Brand Section */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="/">
            <Image
              src="/logo/white.svg"
              alt="Sellflow Logo"
              className="hover:animate-pulse"
              width="130"
              height="32"
            />
          </Link>
          <p className="text-sm text-zinc-500 max-w-[14rem]">
            Empowering small businesses with seamless solutions. <br /> <br /> <span className="hidden md:block"> Made with <Heart className="w-3 text-zinc-400 inline-block mx-[2px]"/> in Norway. </span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-md font-semibold text-zinc-200">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition duration-200"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-md font-semibold text-zinc-200">Legal</h3>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition duration-200"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-md font-semibold text-zinc-200">Get started</h3>
          <div className="flex gap-2 w-full justify-center md:justify-start">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button className="dark-border-button">Dashboard</Button>
              </Link>
            ) : (
              <>
                <div className="hidden lg:block">
                  <SignInButton>
                    <Button variant="outline" className="hover:cursor-pointer">
                      Log In
                    </Button>
                  </SignInButton>
                </div>
                <SignUpButton>
                  <Button className="hover:cursor-pointer">Sign Up</Button>
                </SignUpButton>
              </>
            )}
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-zinc-400 hover:text-zinc-100 transition duration-200"
              >
                <social.Icon className="w-4 h-4 mt-2" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-t-zinc-900 border-zinc-800 text-center w-[40vw] mx-auto">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Sellflow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;