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
import { useFileDownload } from "@/hooks/useUtilities";
import { NAVIGATION_LINKS, PERSONAL_INFO } from "@/config/constants";

export default function Header() {
  const downloadFile = useFileDownload();
  const isActiveId =
    useScrollSpy({
      sectionIds: NAVIGATION_LINKS.map((link) => link.href.replace("#", "")),
      threshold: 0.3,
    }) || "home";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    downloadFile("/Uko_Uwatt.pdf", "Uko_Uwatt.pdf");
  };

  return (
    <section
      className={`dark-transition sticky top-4 z-50 mx-auto flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border p-4 transition-all duration-300 md:w-[90%] ${
        isMenuOpen
          ? "border-border/50 bg-background/99 shadow-2xl backdrop-blur-md dark:border-gray-600 dark:bg-gray-800/99"
          : "border-border/30 bg-background/70 shadow-xl backdrop-blur-xl dark:border-gray-600 dark:bg-gray-800/70"
      }`}
    >
      <a
        href="/"
        aria-label="home"
        className="relative overflow-hidden rounded-lg px-3 py-2 font-cinzel text-lg font-black transition-all duration-300 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
        <span className="gradient-text relative z-10">
          {PERSONAL_INFO.name.split(" ")[0]}
        </span>
        <span className="gradient-text relative z-10 ml-1">
          {PERSONAL_INFO.name.split(" ")[1]}
        </span>
      </a>

      <div className="flex items-center justify-end space-x-2">
        {/* Desktop navigation */}
        <nav className="hidden items-center space-x-2 lg:flex">
          {NAVIGATION_LINKS.map((link) => (
            <a
              aria-label={link.name}
              key={link.name}
              href={link.href}
              className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 md:text-base ${
                isActiveId === link.href.replace("#", "")
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {link.name}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
          ))}

          <Button type="primary" size="nml" onClick={handleResumeDownload}>
            <Download size={16} strokeWidth={2} />
            <span className="font-medium">Resume</span>
          </Button>
        </nav>
        <DarkModeToggle />

        {/* mobile toggle button */}
        <button
          className={`group relative rounded-xl p-3 transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "bg-primary/20 text-primary shadow-lg"
              : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="relative z-10">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </button>

        {/* mobile navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile menu */}
            <nav className="mobile-menu-enter dark-transition absolute top-full right-0 left-0 z-50 mt-4 overflow-hidden rounded-2xl border border-border/50 bg-background/99 shadow-2xl backdrop-blur-md transition-all duration-300 lg:hidden dark:bg-gray-800/99">
              {/* Header background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

              <div className="relative z-10 flex flex-col p-6">
                {/* Navigation Links */}
                <div className="mb-6 space-y-2">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <a
                      aria-label={item.name}
                      key={item.name}
                      href={item.href}
                      className={`mobile-menu-item group relative block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                        isActiveId === item.href.replace("#", "")
                          ? "bg-primary/10 text-primary shadow-sm"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <span className="relative z-10">{item.name}</span>
                      {isActiveId === item.href.replace("#", "") && (
                        <div className="absolute top-1/2 right-4 h-2 w-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      )}
                    </a>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 border-t border-border/20 pt-6">
                  <Button
                    type="outline"
                    size="lg"
                    style="w-full justify-center text-base font-medium"
                    onClick={() => {
                      window.open("/Uko_Uwatt.pdf", "_blank");
                      setIsMenuOpen(false);
                    }}
                  >
                    <FileText size={20} strokeWidth={2} />
                    <span>View Resume</span>
                  </Button>
                  <Button
                    type="primary"
                    size="lg"
                    style="w-full justify-center text-base font-medium shadow-lg"
                    onClick={() => {
                      handleResumeDownload();
                      setIsMenuOpen(false);
                    }}
                  >
                    <Download size={20} strokeWidth={2} />
                    <span>Download Resume</span>
                  </Button>
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </section>
  );
}
