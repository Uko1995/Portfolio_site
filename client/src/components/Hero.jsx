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
    <section className="radila-blur -mt-16 flex min-h-dvh w-full flex-col items-center justify-center gap-5 bg-[url('Image_fx.jpg')] md:min-h-screen md:flex-row dark:bg-[url('Image_dark.jpg')]">
      <div className="flex flex-col items-center gap-5 md:items-start">
        <div className="mt-25 mb-10 flex-1 text-center md:text-left">
          <h1 className="my-5 font-inter text-3xl font-bold tracking-wide md:text-5xl lg:text-6xl">
            UKO UWATT
          </h1>
          <AnimatedTypewriter />
          <p className="mx-auto mb-8 max-w-lg text-left text-base text-primary/60 md:mx-0">
            I build exceptional and accessible digital experiences for the web.
            I am passionate about creating intuitive and high-performance
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
      </div>
      <div className="">
        <div className="md:80 md:80 relative h-64 w-64 lg:h-96 lg:w-96">
          <div className="absolute inset-0 rounded-full bg-muted">
            <div className="absolute inset-2 overflow-hidden rounded-full bg-white shadow-2xl">
              <img className="z-10" src="uko.webp" alt="uko" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
