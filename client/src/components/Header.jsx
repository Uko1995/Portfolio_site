import { House, Tally1, Linkedin, Github } from "lucide-react";

import styles from "./Header.module.css";
import CV from "./CV";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function PageNav() {
  return (
    <nav className={`${styles.nav}`}>
      <a>
        <span>Uko</span>
        <span>Uwatt</span>
      </a>
      <div>
        {links.map((link) => (
          <>
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          </>
        ))}
        <CV />
      </div>

      {/* <a href="https://github.com/Uko1995">
          <li>
            <div className=" flex gap-2 items-center bg-foreground hover:text-background p-2 rounded-md text-gray-300">
              <Github />
              GitHub
            </div>
          </li>
        </a> */}
    </nav>
  );
}
