import { Archive, Download } from "lucide-react";
import { motion } from "framer-motion";

import Button from "./Button";
import AnimatedTypewriter from "./AnimatedTypewriter";
import { useScrollTo, useFileDownload } from "@/hooks/useUtilities";
import { PERSONAL_INFO } from "@/config/constants";

export default function Introduction() {
  const scrollToElement = useScrollTo();
  const downloadFile = useFileDownload();

  const handleScrollToProjects = () => {
    scrollToElement("projects");
  };

  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  const handleResumeDownload = () => {
    downloadFile("/Uko_Uwatt.pdf", "Uko_Uwatt.pdf");
  };

  return (
    <section
      className="relative -mt-10 flex max-h-dvh w-full flex-col items-center justify-center gap-5 overflow-hidden px-4 pt-24 pb-20 md:min-h-screen lg:flex-row lg:gap-10"
      id="home"
    >
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Image - appears first on mobile, second on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative order-1 flex justify-center lg:order-2"
      >
        <div className="relative h-64 w-64 md:h-80 md:w-80 lg:me-10 lg:h-[28rem] lg:w-[28rem]">
          {/* Animated background rings */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
          <div className="absolute inset-4 animate-pulse rounded-full bg-gradient-to-br from-accent/30 to-primary/30 delay-75"></div>

          {/* Main image container */}
          <div className="absolute inset-8 overflow-hidden rounded-full bg-gradient-to-br from-card via-background to-muted shadow-2xl ring-4 ring-white/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
            <img
              className="relative z-10 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              src="uko.webp"
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
              loading="eager"
              width="384"
              height="384"
            />
          </div>
        </div>
      </motion.div>

      {/* Content - appears second on mobile, first on desktop */}
      <div className="relative z-10 order-2 flex w-full max-w-4xl flex-col justify-center text-center lg:order-1 lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 font-inter text-3xl font-black tracking-tight md:text-5xl lg:ms-5 lg:text-7xl"
        >
          <span className="gradient-text block">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
          <span className="gradient-text block">
            {PERSONAL_INFO.name.split(" ")[1]}
          </span>
        </motion.h1>
        <AnimatedTypewriter />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-5 w-full max-w-3xl text-center text-base text-balance text-muted-foreground md:text-lg lg:text-left"
        >
          I build exceptional and accessible digital experiences for the web. I
          am passionate about creating intuitive and high-performance
          applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="item-center mx-auto flex w-full max-w-md flex-col justify-center gap-4 lg:mx-0 lg:ms-6 lg:max-w-lg"
        >
          <div className="flex w-full max-w-sm items-center justify-center gap-3 md:justify-start">
            <Button type="outline" size="nml" onClick={handleScrollToProjects}>
              <Archive size={18} strokeWidth={2.5} />
              <span className="text-sm md:text-base">Projects</span>
            </Button>
            <Button type="secondary" size="nml" onClick={handleResumeDownload}>
              <Download size={18} strokeWidth={2.5} />
              <span className="text-sm md:text-base">Resume</span>
            </Button>
          </div>
          <Button type="primary" size="lg" onClick={handleScrollToContact}>
            <span>Let's Connect</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
