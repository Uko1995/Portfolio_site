import {
  House,
  Tally1,
  Linkedin,
  Github,
  FileText,
  Download,
  Menu,
  X,
} from "lucide-react";
import { BsWindowSidebar } from "react-icons/bs";
import { useState } from "react";

import Button from "./Button";
import MapPin from "./MapPin";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { name: "HOME", href: "#home" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section
      className={`sticky top-5 z-50 container mx-auto flex w-[90%] scroll-mt-20 items-center justify-between rounded-sm border-1 p-2.5 shadow-lg ${isMenuOpen ? "bg-gray-100" : ""} backdrop-blur-lg md:w-[85%] lg:w-[95%]`}
    >
      <a
        href="#home"
        aria-label="home"
        className="font-cinzel text-base font-black md:text-xl"
      >
        <span>UKO</span>
        <span>UWATT</span>
      </a>

      <div className="flex items-center justify-end space-x-1">
        {/* Desktop navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {links.map((link) => (
            <a
              aria-label={link.name}
              key={link.name}
              href={link.href}
              className="scroll-margin-top border-b border-transparent text-sm transition-colors duration-200 hover:border-b-accent-foreground md:text-base"
            >
              {link.name}
            </a>
          ))}

          <Button
            type="primary"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Uko_Uwatt.pdf";
              link.download = "Uko_Uwatt.pdf";
              link.click();
            }}
          >
            <Download size={18} /> Resume
          </Button>
        </nav>
        <DarkModeToggle />

        {/* mobile open button */}

        <button
          className="cursor-pointer bg-inherit transition-transform duration-200 ease-in-out md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {/* mobile navigation */}
        {isMenuOpen && (
          <nav className="animate-fade-in absolute top-full right-0 left-0 bg-gray-100 shadow-md md:hidden">
            <div className="container mx-auto flex flex-col items-center space-y-1 px-4 py-4">
              {links.map((item) => (
                <a
                  aria-label={item.name}
                  key={item.name}
                  href={item.href}
                  className="nav-link block py-2 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex w-full flex-col space-y-2">
                <Button
                  type="outline"
                  onClick={() => {
                    window.open("/Uko_Uwatt.pdf", "_blank");
                    setIsMenuOpen(false);
                  }}
                >
                  <FileText className="my-1" size={16} />
                  View Resume
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Uko_Uwatt.pdf";
                    link.download = "Uko_Uwatt.pdf";
                    link.click();
                    setIsMenuOpen(false);
                  }}
                >
                  <Download className="my-1" size={16} />
                  Download Resume
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
