import { motion } from "framer-motion";

function AnimatedHeading({ text }: { text: string }) {
  return (
    <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-2 z-0">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.2,
          }}
          className="text-[14vw] sm:text-[12vw] md:text-[18vw] font-extrabold leading-none tracking-tight  text-yellow-main dark:text-yellow-main"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default AnimatedHeading;
