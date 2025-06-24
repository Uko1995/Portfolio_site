import { techStack } from "../utils/skills";
import { motion } from "framer-motion";

import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div id="skills" className="my-10 scroll-mt-22 p-5">
      <h1 className="w-full px-5 py-2 pb-7 text-center text-2xl font-bold text-primary/90">
        Skills & Expertise
      </h1>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-1 p-5">
          <h3 className="text-center text-lg font-bold text-primary/75">
            FrontEnd Development
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeIn" }}
            viewport={{ once: true }}
            className="flex w-full flex-col gap-5 rounded-lg bg-accent p-5 text-accent-foreground"
          >
            {techStack
              .filter((skill) => skill.section === "frontend")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-1 p-5"
        >
          <h3 className="text-center text-lg font-bold text-primary/75">
            Backend Development
          </h3>
          <div className="flex w-full flex-col gap-5 rounded-lg bg-accent p-5 text-accent-foreground">
            {techStack
              .filter((skill) => skill.section === "backend")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-1 p-5"
        >
          <h3 className="text-center text-lg font-bold text-primary/75">
            Database
          </h3>
          <div className="flex w-full flex-col gap-5 rounded-lg bg-accent p-5 text-accent-foreground">
            {techStack
              .filter((skill) => skill.section === "database")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex w-full flex-col gap-1 p-5"
        >
          <h3 className="text-center text-lg font-bold text-primary/75">
            Other Tools
          </h3>
          <div className="flex w-full flex-col gap-5 rounded-lg bg-accent p-5 text-accent-foreground">
            {techStack
              .filter((skill) => skill.section === "tools")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
