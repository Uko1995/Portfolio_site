import { motion } from "framer-motion";

import Skill from "./Skill";
import Project from "./Project";
import ViewMore from "./ViewMore";

const ProjectData = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website designed to highlight my projects, skills, and experience.",
    image: "./portfolio.webp",
    technologies: ["React", "TailwindCSS", "Vite", "Responsive Web Design"],
    linkToGitHub:
      "https://github.com/Uko1995/Portfolio_site/tree/master/client",
    linkToLive: "https://uko-uwatt-portfolio-site-psi-seven.vercel.app/",
    type: "frontend",
  },
  {
    name: "ParentPal",
    description:
      "A web application that connects parents with local tutors using a location-based and ratings recommendation algorithm.",
    image: "./screen.webp",
    technologies: [
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Redis",
      "API Integration",
    ],
    linkToGitHub: "https://github.com/princedan-123/parentPal",
    linkToLive: "",
    type: "backend",
  },
  {
    name: "FashionSmith",
    description:
      "A complete custom menswear tailoring platform for a bespoke tailoring brand. ",
    image: "./fashionsmith.webp",
    technologies: ["NodeJs", "ExpressJs", "MongoDB", "API Integration"],
    linkToGitHub: "https://github.com/Uko1995/FashionSmith",
    linkToLive: "https://fashion-smith.vercel.app",
    type: "fullstack",
  },
  {
    name: "Musical",
    description:
      "A media streaming platform that enables users to search, discover, and play music and videos in real time.",
    image: "./musical.webp",
    technologies: ["Python", "Flask", "Bootstrap", "API Integration"],
    linkToGitHub: "https://github.com/Uko1995/Musical",
    linkToLive: "https://musical-1-ll7p.onrender.com/",
    type: "fullstack",
  },
  {
    name: "Simple Shell",
    description: "This is an adaptation of the UNIX command line interpreter.",
    image: "./screen.webp",
    technologies: ["C", "Unix"],
    linkToGitHub: "https://github.com/princedan-123/simple_shell",
    linkToLive: "",
    type: "software",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 size-72 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 size-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-3xl"></div>
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
            My Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A collection of projects that showcase my skills in full-stack
            development, backend architecture, and modern web technologies.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {ProjectData.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Project project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"></div>
            <div className="relative rounded-2xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                Want to see more?
              </h3>
              <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                Explore my complete portfolio and discover more projects that
                demonstrate my passion for creating innovative solutions.
              </p>
              <ViewMore />
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "10+", label: "Technologies Used" },
            { number: "3", label: "Project Types" },
            { number: "100%", label: "Passion Driven" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                <span className="text-2xl font-bold text-primary">
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
