"use client";

import AnimatedHeading from "@/components/AnimateHeading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <div>
      {/* Animated side images */}
      <motion.div
        className="flex flex-nowrap justify-between"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            className=" relative left-5 w-[30vw] md:w-[15vw] h-auto md:left-15"
            src="/hand-speaker.png"
            alt="hand-speaker"
            width={200}
            height={200}
          />
        </motion.span>
        <motion.span
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            className=" relative right-5 w-[30vw] md:w-[15vw] h-auto md:right-15"
            src="/idea-bulb.png"
            alt="idea-bulb"
            width={200}
            height={200}
          />
        </motion.span>
      </motion.div>

      {/* Non-animated heading */}
      <AnimatedHeading text="PROJECTS" />

      {/* Animated text below */}
      <motion.h1
        className="text-2xl font-medium flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        LISTING SOON ! :&#41;
      </motion.h1>
    </div>
  );
}
