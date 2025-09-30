import { Mail } from "lucide-react";
import { motion } from "framer-motion";

import Button from "./Button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Form from "./Form";
import { FaXTwitter } from "react-icons/fa6";
import { useScrollTo } from "@/hooks/useUtilities";
import { PERSONAL_INFO } from "@/config/constants";

export default function Contacts() {
  const scrollToElement = useScrollTo();

  const handleEmailClick = () => {
    scrollToElement("name");
  };

  const handleSocialClick = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background px-4 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Ready to bring your ideas to life? I'm excited to hear about your
            project and explore how we can work together to create something
            amazing.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Connect With Me
              </h3>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailClick}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 rounded-xl p-3 transition-colors">
                    <Mail className="size-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      Let's discuss your project
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSocialClick(PERSONAL_INFO.linkedin)}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-4 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 rounded-xl p-3 transition-colors">
                    <LinkedInLogoIcon className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional networking
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSocialClick(PERSONAL_INFO.github)}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-4 transition-all duration-300 hover:border-secondary/40 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 rounded-xl p-3 transition-colors group-hover:bg-secondary/30">
                    <GitHubLogoIcon className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GitHub</h4>
                    <p className="text-sm text-muted-foreground">
                      Check out my code
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSocialClick(PERSONAL_INFO.twitter)}
                  className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 rounded-xl p-3 transition-colors">
                    <FaXTwitter className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      X (Twitter)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Follow my journey
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border/50 bg-card/50 shadow-2xl backdrop-blur-sm"
          >
            <div className="border-b p-6">
              <h3 className="text-xl font-bold text-foreground">
                Send a Message
              </h3>
              <p className="mt-2 text-muted-foreground">
                I'll get back to you within 24 hours
              </p>
            </div>
            <div className="p-6">
              <Form />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3">
            <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-foreground">
              Available for new projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
