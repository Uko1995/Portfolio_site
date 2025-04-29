import { GithubIcon, LinkedinIcon, LucideLinkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";
import { BsTwitterX } from "react-icons/bs";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="block text-left">
          <h2 className="font-bold text-xl bg-clip-content">
            <span>Uko</span>
            <span className="text-muted-foreground">Uwatt</span>
          </h2>
          <p className="italic text-background/70">
            Creating digital experiences with code
          </p>
        </div>
        <div className="flex gap-10 mr-10 items-baseline">
          <Link href="#contact-form">
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
