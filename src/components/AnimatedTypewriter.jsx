import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/config/constants";

const titles = ["SOFTWARE ENGINEER", "FULLSTACK DEVELOPER"];

export default function AnimatedTypewriter() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(titles[0]);

  useEffect(() => {
    const currentText = titles[index];
    let i = 0;
    setDisplayedText(""); // reset text

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + currentText.charAt(i - 1));
      i++;
      if (i >= currentText.length) {
        clearInterval(interval);
        // Wait a bit before moving to the next word
        setTimeout(() => {
          setIndex((index + 1) % titles.length);
        }, ANIMATION_CONFIG.typewriterDelay);
      }
    }, ANIMATION_CONFIG.typewriterSpeed);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className="text-center lg:text-left"
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      exit={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="gradient-text text-xl font-bold tracking-wide md:text-3xl lg:ms-4 lg:text-3xl">
        {displayedText}
        <motion.span
          className="ml-2 inline-block h-4 w-1 bg-accent md:h-6 lg:h-6"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </div>
    </motion.div>
  );
}
