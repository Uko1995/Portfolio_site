import { motion, AnimatePresence } from "framer-motion";

import { techStack } from "../utils/skills";
import Skill from "../components/Skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, type: "tween", ease: "easeInOut" }}
      viewport={{ once: true }}
      exit={{ opacity: 0, y: 50 }}
      id="skills"
      className="section-container my-10 scroll-mt-22 text-foreground"
    >
      <h2 className="section-title">Skills & Expertise</h2>
      <div className=" w-full inline-grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="flex flex-col gap-5">
          <h3 className=" text-lg font-bold text-muted-foreground">
            FrontEnd Development
          </h3>
          <div className="flex flex-wrap gap-5 m-5">
            {techStack
              .filter((skill) => skill.section === "frontend")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className=" text-lg font-bold text-muted-foreground">
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-5 m-5  ">
            {techStack
              .filter((skill) => skill.section === "backend")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className=" text-lg font-bold text-muted-foreground">Database</h3>
          <div className="flex flex-wrap gap-5 m-5 ">
            {techStack
              .filter((skill) => skill.section === "database")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className=" text-lg font-bold text-muted-foreground">
            Other Tools
          </h3>
          <div className="flex flex-wrap gap-5 m-5 ">
            {techStack
              .filter((skill) => skill.section === "tools")
              .map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
