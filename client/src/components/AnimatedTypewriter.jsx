import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "SOFTWARE ENGINEER",
  "BACKEND DEVELOPER",
  "FULLSTACK DEVELOPER",
];

export default function AnimatedTypewriter() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentText = titles[index];
    let i = 0;
    setDisplayedText(""); // reset text

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + currentText.charAt(i - 1));
      i++;
      if (i === currentText.length) {
        clearInterval(interval);
        // Wait a bit before moving to the next word
        setTimeout(() => {
          setIndex((index + 1) % titles.length);
        }, 2000); // delay after full word typed
      }
    }, 80); // typing speed

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className={`my-2 text-center text-xl font-semibold text-accent-foreground/85 italic md:text-2xl lg:text-left`}
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      exit={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {displayedText}
      <motion.span
        className="ml-1 inline-block w-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
}
