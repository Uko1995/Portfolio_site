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
import { Button } from "@/components/ui/button";
import { BsWindowSidebar } from "react-icons/bs";
import { motion } from "motion/react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
      className="flex justify-between sticky top-5 p-2.5 items-center border-1 border-foreground/50 shadow-md w-[90%] mx-auto z-50 backdrop-blur-md"
    >
      <a href="#home" aria-label="home" className="text-lg font-black">
        <span>Uko</span>
        <span className="text-muted-foreground">Uwatt</span>
      </a>
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
          <a
            aria-label={link.name}
            key={link.name}
            href={link.href}
            className="text-sm md:text-base font-medium hover:text-foreground/30 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
        <div className="flex items-center space-x-8">
          <Button
            variant="outline"
            onClick={() => window.open("/Uko_Uwatt.pdf", "_blank")}
            className="flex gap-2 cursor-pointer items-center justify-center p-4 text-base"
          >
            <FileText size="20" /> View
          </Button>
          <Button
            className="cursor-pointer flex gap-2 items-center justify-center p-4 text-base"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Uko_Uwatt.pdf";
              link.download = "Uko_Uwatt.pdf";
              link.click();
            }}
          >
            <Download /> Download
          </Button>
        </div>
      </nav>

      {/* mobile open button */}
      <button
        className="md:hidden transition-transform duration-200 ease-in-out"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      {/* mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {links.map((item) => (
              <a
                aria-label={item.name}
                key={item.name}
                href={item.href}
                className="nav-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
                onClick={() => {
                  window.open("/Uko_Uwatt.pdf", "_blank");
                  setIsMenuOpen(false);
                }}
              >
                <FileText className="mr-1" size={16} />
                View Resume
              </Button>
              <Button
                className="btn-primary w-full flex items-center justify-center"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Uko_Uwatt.pdf";
                  link.download = "Uko_Uwatt.pdf";
                  link.click();
                  setIsMenuOpen(false);
                }}
              >
                <Download className="mr-1" size={16} />
                Download Resume
              </Button>
            </div>
          </div>
        </nav>
      )}
    </motion.section>
  );
}
