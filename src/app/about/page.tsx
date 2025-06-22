"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GrReactjs } from "react-icons/gr";
import {
  TbBrandNextjs,
  TbBrandMongodb,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { JSX } from "react/jsx-runtime";
import AnimatedHeading from "@/components/AnimateHeading";
export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);

  const toggleAbout = () => setShowContent((prev) => !prev);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-dark-mode px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="absolute z-30 top-60 left-20 rotate-12 w-18 md:left-20 md:w-25 sm:left-20 sm:w-25"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/bug.png" alt="animated bug" width={100} height={100} />
      </motion.div>

      <motion.div
        className="absolute z-40 rotate-180 top-38 right-18 w-18 md:right-20 md:top-60 md:w-25 sm:right-20 sm:top-60 sm:w-25"
        animate={{
          y: [0, 12, 0],
          rotate: [0, 2, -2, 0], // subtle wobble
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/bug.png" alt="animated bug" width={100} height={100} />
      </motion.div>
      {/* Hint Image */}
      {/* Hint Image with Animation */}
      <div className="relative z-10 top-0 left-20 sm:top-10 sm:left-40 md:top-20 md:left-50 mt-6 mb-4 w-24 sm:w-32 md:w-40">
        {/* Light Mode */}
        <motion.div
          className="dark:hidden w-full h-auto"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/click-black.png"
            alt="click-on-me-img"
            width={200}
            height={200}
          />
        </motion.div>

        {/* Dark Mode */}
        <motion.div
          className="hidden dark:block w-full h-auto"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/click-white.png"
            alt="click-on-me-img"
            width={200}
            height={200}
          />
        </motion.div>
      </div>

      {/* ABOUT Heading */}
      <div
        onClick={toggleAbout}
        className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 cursor-pointer z-0"
      >
        <AnimatedHeading text="ABOUT" />
      </div>

      {/* About Me Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 sm:mt-14 max-w-3xl text-center px-4 sm:px-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-full md:w-[40%] flex justify-center">
                <Image
                  src="/profile.png"
                  alt="profile-img"
                  width={2000}
                  height={2000}
                  className="w-[380px] sm:w-[1000px] md:w-[1000px] h-full rounded-xl object-cover"
                />
              </div>
              <div className="w-full md:w-[60%] text-justify md:text-left">
                <h2 className="text-2xl text-wrap sm:text-3xl font-bold mb-4 text-black dark:text-modeText">
                  Hi, I&apos;m Aman Raiswal
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-modeText">
                  A passionate full-stack developer driven by creativity and
                  problem-solving. I love crafting visually engaging and
                  technically sound digital experiences using{" "}
                  <strong>React.js, Next.js, MongoDB, TypeScript</strong> and
                  modern UI/UX techniques.
                  <br />
                  <br />
                  Always learning, always building.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="py-4 mt-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <GlowButton
                  glow="#f43f5e"
                  text="React.js"
                  icon={<GrReactjs />}
                />
                <GlowButton
                  glow="#06b6d4"
                  text="Next.js"
                  icon={<TbBrandNextjs />}
                />
                <GlowButton
                  glow="#14b8a6"
                  text="MongoDB"
                  icon={<TbBrandMongodb />}
                />
                <GlowButton
                  glow="#eab308"
                  text="JavaScript"
                  icon={<TbBrandJavascript />}
                />
                <GlowButton
                  glow="#0ea5e9"
                  text="Tailwind CSS"
                  icon={<RiTailwindCssFill />}
                />
                <GlowButton
                  glow="#6366f1"
                  text="TypeScript"
                  icon={<TbBrandTypescript />}
                />
              </div>
            </div>

            <div className="py-4 mt-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                My Journey
              </h2>
              <div className="space-y-6 border-l-2 border-yellow-main pl-6">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Mid 2023
                  </div>
                  <div className="text-lg font-medium text-black dark:text-white">
                    Built E-Commerce Website (Summer Training)
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developed a full-stack e-commerce platform using the MERN
                    stack as part of my summer training project.
                  </p>
                </div>

                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Feb – Mar 2024
                  </div>
                  <div className="text-lg font-medium text-black dark:text-white">
                    Internship at Bharti Airtel
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Completed a 2-month internship focused on enterprise-level
                    system architecture and operations.
                  </p>
                </div>

                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    2024
                  </div>
                  <div className="text-lg font-medium text-black dark:text-white">
                    B.Tech Graduation – GGSIPU
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Successfully completed my Bachelor's in Technology from Guru
                    Gobind Singh Indraprastha University.
                  </p>
                </div>

                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Final Year
                  </div>
                  <div className="text-lg font-medium text-black dark:text-white">
                    Major Project – Event Management Website
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Created an end-to-end event management web application using
                    MERN & Next.js for the final year project.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ✅ Custom GlowButton Component with colorized icon, glow & hover text
function GlowButton({
  glow,
  icon,
  text,
}: {
  glow: string;
  icon: JSX.Element;
  text: string;
}) {
  return (
    <button
      className="flex items-center justify-center gap-2 py-3 px-4 rounded-md border-2 font-medium w-full transition duration-300"
      style={{
        borderColor: glow,
        color: glow,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${glow}`;
        e.currentTarget.style.backgroundColor = `${glow}11`; // faint bg glow
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base sm:text-lg">{text}</span>
    </button>
  );
}
