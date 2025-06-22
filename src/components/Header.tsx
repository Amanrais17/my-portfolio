"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkModeButton from "./DarkModeButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 sm:px-10 md:px-20 w-full">
      <nav className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Top row: Logo + Hamburger + DarkModeButton for mobile */}
        <div className="flex w-full items-center justify-between md:w-auto">
          {/* Logo */}
          <div className="flex flex-row space-x-1 items-center">
            <a className="flex flex-row space-x-1" href="/">
              <motion.h1
                className="text-4xl sm:text-5xl font-black text-yellow-main"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                A
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl font-black dark:text-modeText"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                R
              </motion.h1>
            </a>
          </div>

          {/* Hamburger + DarkModeButton for mobile */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeButton />
            <button
              className="text-yellow-main"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 font-medium dark:text-modeText">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} className="relative px-1">
                <span className="relative z-10">{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 top-8 h-[3px] bg-yellow-main rounded"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact + Dark Mode (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className={`font-medium border-2 rounded-full py-1.5 px-5 text-sm sm:text-base transition-all duration-300 dark:text-modeText ${
              pathname === "/contact"
                ? "bg-yellow-main text-modeText border-yellow-main"
                : "border-yellow-main"
            }`}
          >
            Contact
          </Link>
          <DarkModeButton />
        </div>
      </nav>

      {/* Mobile Dropdown Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col gap-4"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg px-4 py-2 rounded dark:text-modeText ${
                    isActive
                      ? "bg-yellow-main text-modeText"
                      : "text-yellow-main dark:text-modeText hover:bg-yellow-main hover:text-modeText"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`font-medium border-2 mt-2 rounded-full py-1.5 px-5 w-max mx-auto transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-yellow-main text-white border-yellow-main"
                  : "border-yellow-main "
              }`}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
