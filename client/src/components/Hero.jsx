import ShortInfo from "./ShortInfo";
import { ThumbsUp } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

import PageNav from "./Header";

export default function Introduction() {
  return (
    <motion.section
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative flex flex-1 flex-col md:flex-row gap-5 items-center-safe min-h-dvh justify-center mx-10"
    >
      <div className=" section-container block ml-5 gap-5 md:w-1/2 w-2/3">
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <p className="italic text-primary/75 font-medium mb-2 animate-fade-in">
            Hi, I'm
          </p>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-bold tracking-widest text-4xl md:text-6xl lg:text-7xl text-primary mb-4 mt-4"
          >
            Uko Uwatt
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
            className="italic text-xl font-bold text-primary/75 md:text-2xl lg:text-3xl"
          >
            Software Engineer | Web Developer
          </motion.h2>
          <p className="text-justify text-pretty">
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating intuitive and high-performance
            applications.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex gap-15 justify-center items-center"
          >
            <Button size={"lg"}>
              <a href="contact" className="font-bold">
                Hire Me
              </a>
            </Button>
            <Button>
              <div className="flex gap-3 ">
                <ThumbsUp />
                <p className="font-bold">Available</p>
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-64 h-64 md:80 md:80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 rounded-full bg-muted ">
            <div className="absolute inset-2 rounded-full bg-white overflow-hidden shadow-2xl">
              <img className="" src="/uko.png" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
