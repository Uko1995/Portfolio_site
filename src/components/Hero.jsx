import { Archive, Download } from "lucide-react";
import { motion } from "framer-motion";

import Button from "./Button";
import AnimatedTypewriter from "./AnimatedTypewriter";
import { useScrollTo } from "@/hooks/useUtilities";
import { PERSONAL_INFO } from "@/config/constants";

export default function Introduction() {
  const scrollToElement = useScrollTo();
  void motion; // Ensures ESLint sees `motion` as used (JSX member tags can be missed).

  const handleScrollToProjects = () => {
    scrollToElement("projects");
  };

  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  return (
    <section
      className="dark-transition relative -mt-16 flex max-h-dvh w-full flex-col items-center justify-center gap-2 overflow-hidden bg-white px-4 pt-24 pb-20 md:min-h-screen lg:flex-row lg:gap-1 dark:bg-gray-900"
      id="home"
    >
      {/* Decorative grid + color accents (kept behind content for performance). */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[85%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_100%)]"
      >
        {/* Subtle base grid */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-70 dark:[background-image:linear-gradient(to_right,rgba(156,163,175,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.16)_1px,transparent_1px)] dark:opacity-100" />

        {/* Darker "major" grid cells */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(17,24,39,0.10)_2px,transparent_2px),linear-gradient(to_bottom,rgba(17,24,39,0.10)_2px,transparent_2px)] [background-size:160px_160px] opacity-90 dark:[background-image:linear-gradient(to_right,rgba(156,163,175,0.24)_2px,transparent_2px),linear-gradient(to_bottom,rgba(156,163,175,0.24)_2px,transparent_2px)]" />

        {/* Color accents that match your primary/accent scheme */}
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_15%_10%,rgba(124,58,237,0.16),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.12),transparent_50%),radial-gradient(circle_at_50%_75%,rgba(124,58,237,0.10),transparent_55%)] dark:opacity-60 dark:[background:radial-gradient(circle_at_15%_10%,rgba(124,58,237,0.22),transparent_48%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.16),transparent_52%),radial-gradient(circle_at_50%_75%,rgba(124,58,237,0.16),transparent_58%)]" />
      </div>

      {/* Image - appears first on mobile, second on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative z-10 order-1 flex justify-center lg:order-2"
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
