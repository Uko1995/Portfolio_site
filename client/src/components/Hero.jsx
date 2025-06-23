import ShortInfo from "./ShortInfo";
import {
  Archive,
  ArrowBigLeft,
  ArrowRight,
  CircleArrowRight,
  Download,
  ThumbsUp,
} from "lucide-react";

import PageNav from "./Header";
import Link from "./Link";
import Button from "./Button";
import AnimatedTypewriter from "./AnimatedTypewriter";
import { FaDiagramProject } from "react-icons/fa6";
import MapPin from "./MapPin";

export default function Introduction() {
  return (
    <section
      className="-mt-16 flex min-h-dvh w-full items-center justify-center bg-[url('Image_fx.jpg')] bg-cover bg-center bg-no-repeat px-10 py-20 md:min-h-screen md:px-20 lg:px-40 dark:bg-none"
      id="home"
    >
      <div className="mt-25 mb-10 max-w-3xl flex-1 text-center md:text-left">
        <h1 className="my-5 font-inter text-3xl font-bold tracking-wide text-foreground md:text-5xl lg:text-6xl">
          UKO UWATT
        </h1>
        <AnimatedTypewriter />
        <p className="mx-auto mb-8 max-w-xl text-left text-base text-primary/60 md:mx-0">
          I build exceptional and accessible digital experiences for the web. I
          am passionate about creating intuitive and high-performance
          applications.
        </p>
        <div className="mx-auto grid w-fit grid-cols-1 justify-center gap-4 md:mx-0 md:gap-2">
          <div className="flex w-full items-center justify-start gap-3">
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
              <Archive size={18} strokeWidth={3} /> View Projects
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
    </section>
  );
}
