import { SkillsText, techStack } from "../utils/skills";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: SkillsText.frontend,
      skills: techStack.filter((skill) => skill.section === "frontend"),
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Backend Development",
      description: SkillsText.backend,
      skills: techStack.filter((skill) => skill.section === "backend"),
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      title: "Programming Languages",
      description: SkillsText.languages,
      skills: techStack.filter((skill) => skill.section === "languages"),
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Database Management",
      description: SkillsText.database,
      skills: techStack.filter((skill) => skill.section === "database"),
      gradient: "from-orange-500/20 to-red-500/20",
      iconBg: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      title: "Tools & Technologies",
      description: SkillsText.tools,
      skills: techStack.filter((skill) => skill.section === "tools"),
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconBg: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
  ];

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 size-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 size-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 size-72 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            Technical Expertise
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            <span className="gradient-text">Skills & Technologies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A comprehensive overview of my technical skills and the technologies
            I use to bring ideas to life.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl bg-gradient-to-br ${category.gradient} p-[1px] shadow-2xl`}
            >
              <div
                className={`relative h-full rounded-3xl border bg-card/50 backdrop-blur-sm ${category.borderColor} p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${category.iconBg} mb-4`}
                  >
                    <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Skills Icons */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Technologies:
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.05 * skillIndex,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="group/skill flex flex-col items-center rounded-xl bg-muted/30 p-3 transition-all duration-300 hover:bg-muted/50"
                      >
                        <div className="mb-2 flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover/skill:scale-110">
                          <skill.img
                            className="h-6 w-6"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover/skill:text-foreground">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skill Count Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                    {category.skills.length}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"></div>
            <div className="relative rounded-3xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-sm">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                  Complete Technology Stack
                </h3>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Here's the complete collection of technologies and tools I use
                  to create amazing digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8">
                {techStack.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.02 * index,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center rounded-2xl bg-muted/20 p-4 transition-all duration-300 hover:scale-105 hover:bg-muted/40"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <skill.img
                        className="h-8 w-8"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { number: `${techStack.length}+`, label: "Technologies" },
            { number: "5", label: "Skill Categories" },
            { number: "3+", label: "Years Experience" },
            { number: "∞", label: "Learning Mindset" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent">
                  {stat.number}
                </span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
