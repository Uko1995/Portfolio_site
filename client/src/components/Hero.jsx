import { Archive, Download } from "lucide-react";

import Button from "./Button";
import AnimatedTypewriter from "./AnimatedTypewriter";

export default function Introduction() {
  return (
    <section
      className="-mt-16 flex min-h-dvh w-full flex-col items-center justify-center gap-0 px-1 py-20 md:min-h-screen md:flex-row"
      id="home"
    >
      <div className="mt-20 mb-10 flex max-w-3xl flex-col justify-center text-center sm:text-2xl md:text-left">
        <h1 className="my-5 font-inter text-7xl font-black tracking-wide text-foreground/90 md:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
          UKO UWATT
        </h1>
        <AnimatedTypewriter />
        <p className="mx-auto mb-8 w-full max-w-xl text-center text-balance text-primary/60 md:mx-0 md:text-lg">
          I build exceptional and accessible digital experiences for the web. I
          am passionate about creating intuitive and high-performance
          applications.
        </p>
        <div className="mx-auto grid w-3/5 grid-cols-1 justify-center gap-4 md:mx-0 md:gap-2">
          <div className="flex w-full items-center justify-center gap-3">
            <Button
              type="info"
              onClick={() => {
                const link = document.getElementById("projects");
                link.ariaLabel = "projects";
                if (link) {
                  link.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Archive size={18} strokeWidth={3} /> Projects
            </Button>
            <Button
              type="info"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Uko_Uwatt.pdf";
                link.download = "Uko_Uwatt.pdf";
                link.click();
              }}
            >
              <Download size={18} strokeWidth={3} /> Resume
            </Button>
          </div>
          <Button
            type="info"
            style="w-full"
            size="lg"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Lets Connect
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:80 md:80 relative h-64 w-64 lg:h-96 lg:w-96">
          <div className="absolute inset-0 rounded-full bg-muted">
            <div className="absolute inset-2 overflow-hidden rounded-full bg-white shadow-2xl">
              <img className="z-10" src="uko.webp" alt="uko" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
