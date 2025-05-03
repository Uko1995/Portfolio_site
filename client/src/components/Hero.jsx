import ShortInfo from "./ShortInfo";
import {
  ArrowBigLeft,
  ArrowRight,
  CircleArrowRight,
  ThumbsUp,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

import PageNav from "./Header";
import Link from "./Link";

export default function Introduction() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-5  min-h-dvh justify-center">
      <div className=" flex flex-col items-center md:items-start gap-5">
        <div className="section-container flex-1 text-center md:text-left mb-10">
          <p className="ml-1 text-primary/75 font-bold text-2xl mb-2">
            Hi, I'm
          </p>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="font-black my-5 tracking-wide text-4xl md:text-6xl  text-primary "
          >
            Uko Uwatt
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="italic mb-6 text-xl font-bold text-primary/75 md:text-2xl lg:text-3xl "
          >
            Software Engineer | FullStack Developer
          </motion.h2>
          <p className=" max-w-lg mx-auto md:mx-0 mb-8">
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating intuitive and high-performance
            applications.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex  gap-10 justify-center items-center"
          >
            <Button
              variant="secondary"
              className="m-1.5 p-6 hover:shadow-b-sm hover:shadow-muted-foreground"
            >
              <a
                className="flex gap-2 items-center text-lg"
                aria-label="link to projects"
                href="#projects"
              >
                View Projects <ArrowRight />
              </a>
            </Button>
            <Button className="m-1.5 p-6 hover:shadow-sm hover:shadow-muted-foreground">
              <a
                className="flex gap-2 items-center text-lg"
                aria-label="link to contacts"
                href="#contact"
              >
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className=""
      >
        <div className="relative w-64 h-64 md:80 md:80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 rounded-full bg-muted ">
            <div className="absolute inset-2 rounded-full bg-white overflow-hidden shadow-2xl">
              <img className="z-10" src="uko.webp" alt="uko" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
