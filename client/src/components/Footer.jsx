import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  Code2,
  Coffee,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { PERSONAL_INFO, NAVIGATION_LINKS } from "../config/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: "Email",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      href: PERSONAL_INFO.github,
      label: "GitHub",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      href: PERSONAL_INFO.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: FaXTwitter,
      href: PERSONAL_INFO.twitter,
      label: "X (Twitter)",
      color: "hover:text-foreground",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-20 size-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-0 right-20 size-64 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="mb-4 text-xl font-bold md:text-2xl">
                  <span className="gradient-text">Uko Uwatt</span>
                </h3>
                <p className="max-w-md leading-relaxed text-muted-foreground">
                  Passionate Software Engineer crafting digital experiences that
                  make a difference. Always excited to collaborate on innovative
                  projects.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50 text-muted-foreground hover:bg-muted ${social.color} group transition-all duration-300`}
                  >
                    <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="mb-6 text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="transform text-muted-foreground transition-colors duration-300 hover:translate-x-1 hover:text-foreground"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="mb-6 text-lg font-semibold text-foreground">
                Let's Connect
              </h4>

              <div className="mb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Available for new opportunities
                  </span>
                </div>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary/10 px-4 py-2 text-primary transition-all duration-300 hover:bg-primary/20"
              >
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="text-sm font-medium">Back to Top</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-4 md:flex-row"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  &copy; {currentYear} Uko Uwatt. All rights reserved.
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span>Built with</span>
                  <Heart className="h-4 w-4 animate-pulse text-red-500" />
                  <span>using</span>
                  <Code2 className="h-4 w-4 text-blue-500" />
                  <span>React & TailwindCSS</span>
                </div>

                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-amber-600" />
                  <span>Fueled by coffee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
