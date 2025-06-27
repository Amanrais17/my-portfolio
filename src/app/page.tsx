"use client";

import { Button } from "@/styles/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="flex flex-col min-h-[60vh] justify-center items-center px-4">
      {/* Title */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-2 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.span
          className="font-overbitShadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          &#123; FULL
        </motion.span>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            className="hidden dark:block"
            src="/full-stack-word-white.png"
            alt="full-stack"
            width={80}
            height={80}
          />
          <Image
            className="dark:hidden"
            src="/full-stack-word.png"
            alt="full-stack"
            width={80}
            height={80}
          />
        </motion.span>

        <motion.span
          className="font-overbitShadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DEVELOPER &#125;
        </motion.span>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="py-4 text-lg sm:text-xl text-center text-zinc-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3>&#123; React.JS, Next.JS, MongoDB, CSS, JavaScript &#125;</h3>
      </motion.div>

      {/* Interest Statement */}
      <motion.div
        className="text-base sm:text-lg text-yellow-main text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3>
          Driven by a deep interest in both the creative{" "}
          <br className="hidden sm:block" />
          and technical aspects of web development.
        </h3>
      </motion.div>

      {/* resume buttons */}
      <motion.div
        className="pt-10 space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Link href="/project">
          <Button
            className="bg-yellow-main hover:bg-modeText hover:text-yellow-main"
            variant="default"
          >
            See my dev work
          </Button>
        </Link>

        {/* <Button
          className="border-b-3 border-yellow-main dark:border-yellow-main"
          variant="outline"
          disabled
        >
          Download CV
        </Button> */}
      </motion.div>

      {/* Images Section */}
      <motion.div
        className="flex flex-col md:flex-row pt-20 md:pt-10 items-center justify-center gap-10 md:gap-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <Image
          src="/keyboard.png"
          alt="keyboard"
          width={300}
          height={80}
          className="w-[500px] sm:w-[300px] md:w-[500px] dark:opacity-80"
        />

        <Image
          src="/mouse.png"
          alt="mouse"
          width={120}
          height={120}
          className="hidden md:block dark:opacity-80"
        />
      </motion.div>
    </section>
  );
}
