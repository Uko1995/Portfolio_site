import { FaArrowUpRightFromSquare, FaSquareGithub } from "react-icons/fa6";

import Button from "./Button";
import SkillName from "./SkillName";
export default function Project({ project }) {
  const {
    name,
    type,
    description,
    image,
    technologies,
    linkToGitHub,
    linkToLive,
  } = project;
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl border border-border/30 bg-card text-card-foreground shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-2xl">
      <div className="absolute top-4 right-5 z-10 rounded-full bg-primary px-7 py-1.5 tracking-widest text-primary-foreground capitalize shadow-md">
        <p className="text-sm font-medium">{type}</p>
      </div>
      {/* Image */}
      <div className="w-full flex-1 overflow-hidden">
        {image.length > 0 ? (
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-semibold text-muted-foreground lg:text-xl">
            {name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2 p-4 lg:p-5">
        <h2 className="text-base font-bold text-foreground lg:text-lg">
          {name}
        </h2>
        <hr className="border-border/30" />
        <p className="text-xs leading-relaxed text-muted-foreground lg:text-sm">
          {description}
        </p>
        <hr className="border-border/30" />

        <div className="flex flex-wrap items-center justify-start gap-2">
          {technologies.map((skill) => (
            <SkillName key={skill} skill={skill} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 md:flex-row lg:gap-3">
          <Button
            onClick={() => window.open(linkToGitHub, "_blank")}
            type="outline"
            size="nml"
            style="text-sm border-2 flex-1 md:flex-none lg:max-w-[120px] xl:max-w-[140px]"
          >
            <FaSquareGithub className="size-4 lg:size-5" />
            <span>Repository</span>
          </Button>
          {linkToLive && linkToLive.length > 0 && (
            <Button
              onClick={() => window.open(linkToLive, "_blank")}
              type="primary"
              style="text-sm py-2 shadow-md hover:shadow-lg flex-1 md:flex-none lg:max-w-[120px] xl:max-w-[140px]"
              size="nml"
            >
              <FaArrowUpRightFromSquare className="size-4 lg:size-5" />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
