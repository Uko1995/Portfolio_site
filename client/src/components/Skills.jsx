import { motion, AnimatePresence } from "framer-motion";

import { techStack } from "../utils/skills";
import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div>
          <h3>FrontEnd</h3>
          <div className="flex flex-wrap gap-5 m-5 bg-background text-foreground ">
            {techStack
              .filter((skill) => skill.section === "frontend")
              .map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))}
          </div>
        </div>
        <div>
          <h3>Backend</h3>
          <div className="flex flex-wrap gap-5 m-5 bg-background text-foreground ">
            {techStack
              .filter((skill) => skill.section === "backend")
              .map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))}
          </div>
        </div>
        <div>
          <h3>Database</h3>
          <div className="flex flex-wrap gap-5 m-5 bg-background text-foreground ">
            {techStack
              .filter((skill) => skill.section === "database")
              .map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))}
          </div>
        </div>
        <div>
          <h3>Other Tools</h3>
          <div className="flex flex-wrap gap-5 m-5 bg-background text-foreground ">
            {techStack
              .filter((skill) => skill.section === "tools")
              .map((skill) => (
                <Skill skill={skill} key={skill.name} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
