import { Check } from "lucide-react";

import styles from "./About.module.css";
import ShortInfo from "@/components/ShortInfo";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About Me
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am a passionate web developer with a love for creating dynamic and
        responsive web applications. I have experience in various front-end and
        back-end technologies, and I am always eager to learn more.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In my free time, I enjoy exploring new programming languages, working on
        personal projects, and contributing to open-source software.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Feel free to reach out if you want to collaborate or just chat about
        technology!
      </p>
    </div>
  );
}
