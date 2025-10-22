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
    <div className="dark-transition relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/30 bg-card text-card-foreground shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:text-white">
      <div className="absolute top-4 right-5 z-10 rounded-md bg-primary px-3 py-1 tracking-widest text-primary-foreground capitalize">
        <p className="text-xs font-medium">{type}</p>
      </div>
      {/* Image */}
      <div className="h-60 w-full overflow-hidden">
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
        <h2 className="text-base font-bold text-foreground lg:text-lg dark:text-white">
          {name}
        </h2>
        <hr className="border-border/30 dark:border-gray-600" />
        <p className="text-xs leading-relaxed text-muted-foreground lg:text-sm dark:text-gray-300">
          {description}
        </p>
        <hr className="border-border/30 dark:border-gray-600" />

        <div className="flex flex-wrap items-center justify-start gap-2">
          {technologies.map((skill) => (
            <SkillName key={skill} skill={skill} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-4">
          <button
            onClick={() => window.open(linkToGitHub, "_blank")}
            className="flex h-10 w-10 items-center justify-center transition-all duration-300 hover:scale-105 hover:border-primary/50"
            aria-label="View GitHub Repository"
          >
            <FaSquareGithub className="size-8 text-foreground dark:text-white" />
          </button>
          {linkToLive && (
            <button
              onClick={() => window.open(linkToLive, "_blank")}
              className="flex h-10 w-10 items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="View Live Demo"
            >
              <FaArrowUpRightFromSquare className="size-6 text-primary dark:text-blue-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
