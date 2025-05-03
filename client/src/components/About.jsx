import { BookOpen, Check, Code, Code2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import ShortInfo from "@/components/ShortInfo";
import { Button } from "./ui/button";
import AboutInfo from "./AboutInfo";

export default function About() {
  return (
    <section className="section-container my-10 scroll-mt-22  mx-10" id="about">
      <h1 className="section-title">About Me</h1>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full flex flex-col items-center">
          <p className="text-lg mb-4">
            I'm a passionate software engineer and fullstack developer with a
            strong foundation in modern technologies. My journey into coding
            began with curiosity and has evolved into a dedicated career path.
          </p>
          <p className="text-lg mb-4">
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
          className=" flex flex-col bg-accent rounded-lg w-full md:w-2/6 items-start justify-start"
        >
          <AboutInfo>
            <div className="bg-primary rounded-lg p-3">
              <Code className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Coding Journey</h3>
              <p className="text-base italic text-primary/75">
                Software Engineer
              </p>
            </div>
          </AboutInfo>
          <AboutInfo>
            <div className="bg-primary rounded-lg p-3">
              <Lightbulb className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Problem Solver</h3>
              <p className="text-base italic text-primary/75">
                Creative and analytical thinking
              </p>
            </div>
          </AboutInfo>
          <AboutInfo>
            <div className="bg-primary rounded-lg p-3">
              <BookOpen className="text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Continuous Learner</h3>
              <p className="text-base italic text-primary/75">
                Always expanding knowledge and skills
              </p>
            </div>
          </AboutInfo>
        </motion.div>
      </div>
    </section>
  );
}
