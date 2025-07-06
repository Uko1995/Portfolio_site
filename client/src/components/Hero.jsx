import { Archive, Download } from "lucide-react";

import Button from "./Button";
import AnimatedTypewriter from "./AnimatedTypewriter";

export default function Introduction() {
  return (
    <section
      className="-mt-16 flex min-h-dvh w-full flex-col items-center justify-center gap-0 px-10 py-20 md:min-h-screen md:flex-row"
      id="home"
    >
      <div className="mt-20 mb-10 flex max-w-3xl flex-col justify-center text-center sm:text-left sm:text-2xl md:text-left">
        <h1 className="my-5 font-inter text-7xl font-black tracking-wide text-foreground/90 md:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
          UKO UWATT
        </h1>
        <AnimatedTypewriter />
        <p className="mx-auto mb-8 max-w-xl text-left text-primary/60 md:mx-0 md:text-lg">
          I build exceptional and accessible digital experiences for the web. I
          am passionate about creating intuitive and high-performance
          applications.
        </p>
        <div className="grid w-3/5 grid-cols-1 justify-center gap-4 md:mx-0 md:gap-2">
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
            size="lg"
            onClick={() => {
              const link = document.getElementById("contact");
              link.ariaLabel = "contact me";
              if (link) {
                link.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Lets Connect
          </Button>
        </div>
      </div>
      <div className="mt-20 size-100 items-center bg-[url('26-Programmer.webp')] mask-r-from-60% mask-b-from-80% mask-radial-from-70% mask-radial-to-85% bg-cover bg-center bg-no-repeat" />
    </section>
  );
}
