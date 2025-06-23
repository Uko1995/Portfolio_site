import { GithubIcon, LinkedinIcon, LucideLinkedin, Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-primary p-3 text-primary-foreground">
      <time className="p-2">
        &copy; {new Date().getFullYear()} Project by Uko Uwatt
      </time>
    </footer>
  );
}
