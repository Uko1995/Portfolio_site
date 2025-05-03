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
import { TbBrandVite } from "react-icons/tb";

export const techStack = [
  { img: ImHtmlFive2, name: "HTML", section: "frontend", color: "#E34F26" },
  { img: IoLogoCss3, name: "CSS", section: "frontend", color: "#1572B6" },
  {
    img: SiJavascript,
    name: "JavaScript",
    section: "frontend",
    color: "#F7DF1E",
  },
  { img: FaReact, name: "React", section: "frontend", color: "#61DAFB" },
  { img: IoLogoNodejs, name: "NodeJs", section: "backend", color: "#8CC84B" },
  { img: SiExpress, name: "Express", section: "backend", color: "#000000" },
  { img: IoLogoPython, name: "Python", section: "backend", color: "#3776AB" },
  { img: SiFlask, name: "Flask", section: "backend", color: "#000000" },
  { img: FaCuttlefish, name: "C", section: "Others", color: "#A8B9CC" },
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
    name: "TailwindCss",
    section: "frontend",
    color: "#38B2AC",
  },
];
