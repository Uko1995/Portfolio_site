import { BookOpen, Check, Code, Code2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

import ShortInfo from "@/components/ShortInfo";
import AboutInfo from "./AboutInfo";
import Button from "./Button";

export default function About() {
  return (
    <section className="container mx-10 my-10 scroll-mt-22" id="about">
      <h1 className="section-title">About Me</h1>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex w-full flex-col items-center">
          <p className="mb-4 text-lg">
            I'm a passionate software engineer and fullstack developer with a
            strong foundation in modern technologies. My journey into coding
            began with curiosity and has evolved into a dedicated career path.
          </p>
          <p className="mb-4 text-lg">
            I specialize in building responsive web applications with React,
            creating RESTful APIs, and designing efficient database structures.
            I enjoy solving complex problems and turning ideas into reality
            through clean, maintainable code.
          </p>
        </div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="flex w-full flex-col items-start justify-start rounded-lg bg-accent md:w-2/6"
        >
          <AboutInfo>
            <div className="rounded-lg bg-primary p-3">
              <Code className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Coding Journey</h3>
              <p className="text-base text-primary/75 italic">
                Software Engineer
              </p>
            </div>
          </AboutInfo>
          <AboutInfo>
            <div className="rounded-lg bg-primary p-3">
              <Lightbulb className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Problem Solver</h3>
              <p className="text-base text-primary/75 italic">
                Creative and analytical thinking
              </p>
            </div>
          </AboutInfo>
          <AboutInfo>
            <div className="rounded-lg bg-primary p-3">
              <BookOpen className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Continuous Learner</h3>
              <p className="text-base text-primary/75 italic">
                Always expanding knowledge and skills
              </p>
            </div>
          </AboutInfo>
        </motion.div>
      </div>
    </section>
  );
}
