import { ImHtmlFive2 } from "react-icons/im";
import { DiRedis } from "react-icons/di";
import { FaReact, FaGitAlt, FaLinux, FaCuttlefish } from "react-icons/fa6";
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
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const techStack = [
  { img: ImHtmlFive2, name: "HTML", section: "frontend" },
  { img: IoLogoCss3, name: "CSS", section: "frontend" },
  { img: SiJavascript, name: "JavaScript", section: "frontend" },
  { img: FaReact, name: "React", section: "frontend" },
  { img: IoLogoNodejs, name: "NodeJs", section: "backend" },
  { img: SiExpress, name: "Express", section: "backend" },
  { img: IoLogoPython, name: "Python", section: "backend" },
  { img: SiFlask, name: "Flask", section: "backend" },
  { img: FaCuttlefish, name: "C", section: "Others" },
  { img: SiMysql, name: "MySQL", section: "database" },
  { img: SiMongodb, name: "MongoDB", section: "database" },
  { img: DiRedis, name: "Redis", section: "database" },
  { img: FaGitAlt, name: "Git", section: "tools" },
  { img: IoLogoGithub, name: "Github", section: "tools" },
  { img: SiPostman, name: "Postman", section: "tools" },
  { img: FaLinux, name: "Linux", section: "tools" },
  { img: SiVercel, name: "Vercel", section: "tools" },
  { img: RiTailwindCssFill, name: "TailwindCSS", section: "frontend" },
];
