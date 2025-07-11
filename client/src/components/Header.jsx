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
import useScrollSpy from "@/hooks/useScrollSpy";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contact" },
];

export default function Header() {
  const isActiveId =
    useScrollSpy({
      sectionIds: links.map((link) => link.href.replace("#", "")),
      threshold: 0.3,
    }) || "home";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section
      className={`sticky top-3 z-50 container mx-auto flex w-[90%] scroll-mt-20 items-center justify-between rounded-sm border-1 p-2.5 shadow-lg sm:bg-background ${isMenuOpen ? "bg-gray-100" : ""} backdrop-blur-lg md:w-[85%] lg:w-[95%]`}
    >
      <a
        href="#"
        onClick={() => window.location.reload()}
        aria-label="home"
        className="bg-gradient-to-r from-foreground to-sidebar-ring bg-clip-text font-cinzel text-xl font-black text-transparent"
      >
        <span>UKO</span>
        <span>UWATT</span>
      </a>

      <div className="flex items-center justify-end space-x-1">
        {/* Desktop navigation */}
        <nav className="hidden items-center space-x-8 text-sm lg:flex">
          {links.map((link) => (
            <a
              aria-label={link.name}
              key={link.name}
              href={link.href}
              className={`scroll-margin-top border-b border-transparent font-semibold transition-colors duration-200 hover:border-b-accent-foreground md:text-base ${isActiveId === link.href.replace("#", "") ? "bg-blue-600 px-2 py-1 text-background" : ""}`}
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
          className="cursor-pointer bg-inherit transition-transform duration-200 ease-in-out lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {/* mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full right-0 left-0 animate-collapsible-down bg-background shadow-md transition-all duration-300 lg:hidden">
            <div className="container mx-auto flex flex-col items-center space-y-1 px-4 py-4">
              {links.map((item) => (
                <>
                  <a
                    aria-label={item.name}
                    key={item.name}
                    href={item.href}
                    className="nav-link block py-2 text-xl font-bold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </>
              ))}
              <div className="flex w-full flex-col space-y-2">
                <Button
                  type="outline"
                  style="text-xl"
                  onClick={() => {
                    window.open("/Uko_Uwatt.pdf", "_blank");
                    setIsMenuOpen(false);
                  }}
                >
                  <FileText className="my-1" size={20} />
                  View Resume
                </Button>
                <Button
                  type="primary"
                  style="text-xl"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Uko_Uwatt.pdf";
                    link.download = "Uko_Uwatt.pdf";
                    link.click();
                    setIsMenuOpen(false);
                  }}
                >
                  <Download className="my-1" size={20} />
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
