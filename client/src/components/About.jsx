import { motion } from "framer-motion";
import { Code2, Database, Globe, Lightbulb, Users, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern technologies",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Designing efficient and scalable data systems",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Creating responsive and accessible user interfaces",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Delivering fast and efficient applications",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Thriving in Agile and team-oriented environments",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Transforming complex challenges into elegant solutions",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Redis",
    "TailwindCSS",
    "Python",
    "Flask",
    "Git",
    "Linux",
  ];

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background py-24 lg:py-32"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 size-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-20 bottom-40 size-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 size-64 rounded-full bg-secondary/5 blur-3xl"></div>
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
            Getting to Know Me
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            <span className="gradient-text">About Me</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Passionate about crafting digital experiences that make a difference
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-xl"></div>
              <div className="relative rounded-3xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-sm">
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  My Journey
                </h3>

                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    I am a passionate{" "}
                    <span className="font-semibold text-primary">
                      Software Engineer
                    </span>{" "}
                    and
                    <span className="font-semibold text-primary">
                      {" "}
                      Fullstack Developer
                    </span>{" "}
                    with expertise in building scalable, performant, and
                    user-focused web applications.
                  </p>

                  <p>
                    On the frontend, I work with{" "}
                    <span className="font-semibold text-accent">
                      React, TypeScript, TailwindCSS
                    </span>
                    , and modern state management solutions to create responsive
                    and accessible interfaces that deliver seamless user
                    experiences.
                  </p>

                  <p>
                    On the backend, I specialize in{" "}
                    <span className="font-semibold text-accent">
                      Node.js, Express, and RESTful APIs
                    </span>
                    , paired with databases like{" "}
                    <span className="font-semibold text-accent">
                      MongoDB, MySQL, and Redis
                    </span>{" "}
                    to design efficient and reliable systems.
                  </p>

                  <p>
                    What excites me most is the opportunity to merge technical
                    excellence with creativity, whether it's optimizing
                    performance, integrating secure payment systems, or
                    delivering end-to-end solutions that make a real impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="mb-8 text-2xl font-bold text-foreground">
              What I Bring
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-border/30 bg-card/30 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-border/50 hover:bg-card/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-xl bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="mb-1 text-sm font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
              Technologies I Work With
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A curated selection of the tools and technologies that power my
              development workflow
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="rounded-full bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:scale-105 hover:bg-muted hover:text-foreground"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {[
            {
              number: "3+",
              label: "Years of Experience",
              description: "Building web applications",
            },
            {
              number: "5+",
              label: "Projects Completed",
              description: "End-to-end solutions delivered",
            },
            {
              number: "100%",
              label: "Passion Driven",
              description: "Committed to excellence",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"></div>
                <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent">
                    {stat.number}
                  </span>
                </div>
              </div>
              <h4 className="mb-2 text-base font-bold text-foreground">
                {stat.label}
              </h4>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"></div>
            <div className="relative rounded-2xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                Let's Build Something Amazing Together
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                I'm always excited to collaborate on innovative projects and
                explore new opportunities. Whether you have a vision to bring to
                life or a challenge to solve, let's connect!
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3">
                <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-foreground">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
