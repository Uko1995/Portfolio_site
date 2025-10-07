import { ImHtmlFive2 } from "react-icons/im";
import { DiRedis } from "react-icons/di";
import {
  FaReact,
  FaGitAlt,
  FaLinux,
  FaCuttlefish,
  FaBootstrap,
} from "react-icons/fa6";
import {
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoGithub,
} from "react-icons/io";
import {
  SiFlask,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiVercel,
  SiExpress,
  SiJavascript,
  SiSupabase,
  SiRender,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";

export const techStack = [
  { img: ImHtmlFive2, name: "HTML", section: "frontend", color: "#E34F26" },
  { name: "NextJs", section: "frontend", img: SiNextdotjs, color: "#000000" },
  { img: IoLogoCss3, name: "CSS", section: "frontend", color: "#1572B6" },
  {
    img: SiJavascript,
    name: "JavaScript",
    section: "languages",
    color: "#F7DF1E",
  },
  {
    img: SiTypescript,
    name: "TypeScript",
    section: "languages",
    color: "#3178C6",
  },
  { img: FaReact, name: "React", section: "frontend", color: "#61DAFB" },
  { img: IoLogoNodejs, name: "NodeJs", section: "backend", color: "#8CC84B" },
  { img: SiExpress, name: "Express", section: "backend", color: "#000000" },
  { img: IoLogoPython, name: "Python", section: "languages", color: "#3776AB" },
  { img: SiFlask, name: "Flask", section: "backend", color: "#000000" },
  { img: FaCuttlefish, name: "C", section: "languages", color: "#A8B9CC" },
  { img: SiMysql, name: "MySQL", section: "database", color: "#00758F" },
  { img: SiMongodb, name: "MongoDB", section: "database", color: "#47A248" },
  { img: DiRedis, name: "Redis", section: "database", color: "#D82C20" },
  { img: FaGitAlt, name: "Git", section: "tools", color: "#F05032" },
  { img: IoLogoGithub, name: "Github", section: "tools", color: "#181717" },
  { img: SiPostman, name: "Postman", section: "tools", color: "#FF6C37" },
  { img: FaLinux, name: "Linux", section: "tools", color: "#FCC624" },
  { img: SiVercel, name: "Vercel", section: "tools", color: "#000000" },
  { img: TbBrandVite, name: "Vite", section: "frontend", color: "#646CFF" },
  {
    img: RiTailwindCssFill,
    name: "Tailwind",
    section: "frontend",
    color: "#38B2AC",
  },
  { img: SiSupabase, name: "Supabase", section: "database", color: "#3ECF8E" },
  {
    img: FaBootstrap,
    name: "Bootstrap",
    section: "frontend",
    color: "#7952B3",
  },
  { img: SiRender, name: "Render", section: "tools", color: "#F05A28" },
];

export const SkillsText = {
  frontend: `I have a strong foundation in HTML, CSS, and JavaScript, with
          experience in frameworks like React and TailwindCss. I am also
          proficient in responsive web design, search engine optimization and accessibility best practices.`,
  backend:
    "I have experience working with Node.js and Express for building RESTful APIs, as well as Python and Flask for server-side development. I am familiar with authentication, database integration, and deploying backend services.",
  database:
    "I have worked with both SQL and NoSQL databases, including MySQL, Supabase, and MongoDB. I understand data modeling, querying, and optimization techniques.",
  tools:
    "I am proficient in using Git for version control, and I have experience with tools like Postman for API testing and Vercel for deployment.",
  languages:
    "I am comfortable with multiple programming languages, including JavaScript, Python and C. I can adapt to new languages and technologies as needed.",
};
