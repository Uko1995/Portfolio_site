import { motion } from "framer-motion";

import Skill from "./Skill";
import Project from "./Project";
import ViewMore from "./ViewMore";

const ProjectData = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website designed to highlight my projects, skills, and experience. Built with React and TailwindCSS, it features a responsive layout, smooth navigation, light / dark modes and interactive project showcases.",
    image: "./portfolio.webp",
    technologies: ["React", "TailwindCSS", "Vite", "Responsive Web Design"],
    linkToGitHub:
      "https://github.com/Uko1995/Portfolio_site/tree/master/client",
    linkToLive: "https://uko-uwatt-portfolio-site-psi-seven.vercel.app/",
    type: "frontend",
  },
  {
    name: "Musical",
    description:
      "A media streaming platform that enables users to search, discover, and play music and videos. Integrates multiple APIs to deliver real-time content and provides a seamless, user-friendly experience for media consumption.",
    image: "./musical.webp",
    technologies: ["Python", "Flask", "Bootstrap", "API Integration"],
    linkToGitHub: "https://github.com/Uko1995/Musical",
    linkToLive: "https://musical-1-ll7p.onrender.com/",
    type: "fullstack",
  },
  {
    name: "ParentPal",
    description:
      "A web application that connects parents with local tutors using a location-based and ratings recommendation algorithm. Developed as a collaborative project, ParentPal streamlines the process of finding and contacting nearby educators, making it easier for parents to access quality tutoring services.",
    image: "",
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
    name: "FashionSmith Clothing",
    description:
      "A custom menswear e-commerce platform for a bespoke tailoring brand. Users can browse collections, place orders, upload measurements, make payments, and manage their accounts through an intuitive and secure interface.",
    image: "",
    technologies: ["NodeJs", "ExpressJs", "MongoDB", "API Integration"],
    linkToGitHub: "https://github.com/Uko1995/FashionSmith",
    linkToLive: "",
    type: "backend",
  },
  {
    name: "Simple Shell",
    description:
      "This is an adaptation of the UNIX command line interpreter. This was done as a group project to understand how the shell works and how to implement it in C. It supports basic commands like ls, pwd, echo, and more.",
    image: "",
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
      className="mx-5 my-30 min-h-dvh scroll-mt-24 py-5 text-primary md:mx-20"
    >
      <h1 className="mx-auto mb-8 w-fit px-5 py-2 text-4xl font-bold md:text-3xl">
        Projects
      </h1>
      <div className="p-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mx-2 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2"
        >
          {ProjectData.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
      <div>
        <ViewMore />
      </div>
    </section>
  );
}
