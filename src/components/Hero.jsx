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
      className="dark-transition relative -mt-10 flex max-h-dvh w-full flex-col items-center justify-center gap-4 overflow-hidden bg-white px-4 pt-24 pb-20 md:min-h-screen lg:flex-row lg:gap-1 dark:bg-gray-900"
      id="home"
    >
      {/* Image - appears first on mobile, second on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative order-1 flex justify-center lg:order-2"
      >
        <div className="relative h-64 w-64 md:h-80 md:w-80 lg:me-10 lg:h-[28rem] lg:w-[28rem]">
          {/* Main image container */}
          <div className="absolute">
            <img
              className="relative z-10 -ms-5 h-full w-full object-cover"
              src="gummy-programming.svg"
              alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
              loading="eager"
              width="384"
              height="384"
            />
          </div>
        </div>
      </motion.div>

      {/* Content - appears second on mobile, first on desktop */}
      <div className="relative z-10 order-2 flex w-full max-w-4xl flex-col justify-center text-center lg:order-1 lg:mt-10 lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 font-inter text-3xl font-black tracking-tight md:text-5xl lg:ms-4 lg:text-5xl"
        >
          <span className="gradient-text block">{PERSONAL_INFO.name}</span>
        </motion.h1>
        <AnimatedTypewriter />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-5 w-full max-w-3xl text-center text-base text-balance text-muted-foreground md:text-base lg:text-left"
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
          <div className="flex w-full max-w-lg items-center justify-center gap-3 md:justify-start">
            <Button type="outline" size="lg" onClick={handleScrollToProjects}>
              <Archive size={18} strokeWidth={2.5} />
              <span className="text-base md:text-lg">Projects</span>
            </Button>
            <Button type="primary" size="lg" onClick={handleScrollToContact}>
              <span className="text-base md:text-lg">Let's Connect</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
