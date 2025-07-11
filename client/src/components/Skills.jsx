import { SkillsText } from "../utils/skills";
import { motion } from "framer-motion";

import Skill from "../components/Skill";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto my-30 min-h-screen scroll-mt-24 lg:mx-10"
    >
      <h1 className="w-full px-5 py-2 pb-7 text-center text-4xl font-bold text-primary/90 md:text-3xl">
        Skills & Expertise
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mx-auto grid w-19/20 grid-cols-1 gap-7 md:grid-cols-2 lg:w-full lg:grid-cols-3"
      >
        <SkillsCard
          title="FrontEnd Development"
          description={SkillsText.frontend}
        />
        <SkillsCard
          title="Backend Development"
          description={SkillsText.backend}
        />
        <SkillsCard
          title="Programming Languages"
          description={SkillsText.languages}
          titleNumber={1}
        />
        <SkillsCard
          title="Database Management"
          description={SkillsText.database}
        />
        <SkillsCard title="Tools" description={SkillsText.tools} />
      </motion.div>
    </section>
  );
}
