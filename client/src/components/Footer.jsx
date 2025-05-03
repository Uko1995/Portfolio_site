import { GithubIcon, LinkedinIcon, LucideLinkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";
import { BsTwitterX } from "react-icons/bs";
import Link from "./Link";

export default function Footer({ onEmailClick }) {
  return (
    <footer className={`${styles.footer}`}>
      <div className="flex justify-center items-center  md:justify-between gap-2 flex-col md:flex-row">
        <div className="block text-left">
          <h2 className="font-bold text-2xl text-center md:text-start bg-clip-content">
            <span>Uko</span>
            <span className="text-muted-foreground">Uwatt</span>
          </h2>
          <p className="italic text-background/70 text-center md:text-start">
            Creating digital experiences with code
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 mb-2">
          <Link onEmailClick={onEmailClick} href={null}>
            <Mail className=" hover:scale-120" />
          </Link>
          <Link href="https://github.com/Uko1995">
            <GithubIcon className=" hover:scale-120" />
          </Link>
          <Link href="https://www.linkedin.com/in/uwattuko">
            <LinkedinIcon className=" hover:scale-120" />
          </Link>
          <Link href="https://x.com/youkay_SWE">
            <BsTwitterX size={20} className=" hover:scale-120" />
          </Link>
        </div>
      </div>
      <hr className="my-2" />
      <time className="text-background/70">
        &copy; {new Date().getFullYear()} Project
      </time>
    </footer>
  );
}
