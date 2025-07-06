import { techStack } from "@/utils/skills";
import Skill from "./Skill";
import Button from "./Button";
import SkillName from "./SkillName";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  FaArrowUpRightDots,
  FaArrowUpRightFromSquare,
  FaSquareArrowUpRight,
  FaSquareGithub,
} from "react-icons/fa6";

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
    <div className="relative flex flex-col overflow-hidden rounded-3xl border-2 bg-accent text-accent-foreground shadow-lg hover:scale-103 hover:transition-all hover:delay-300 hover:duration-500 hover:ease-in-out dark:bg-secondary dark:text-foreground">
      <div className="absolute top-4 right-5 z-10 rounded-full bg-gradient-to-r from-blue-700 to-chart-1 px-7 py-1.5 tracking-widest capitalize">
        <p className="text-sm text-white">{type}</p>
      </div>
      {/* Image */}
      <div className="h-1/2 w-full overflow-hidden">
        {image.length > 0 ? (
          <img
            className="w-full object-cover"
            src={image}
            alt={name}
            loading="lazy"
          />
        ) : (
          <div className="flex h-60 w-full items-center justify-center bg-muted-foreground/30 text-4xl">
            {name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 backdrop-blur-lg">
        <h2 className="mb-2 text-lg font-bold">{name}</h2>
        <hr className="mb-2 border-accent-foreground/20" />
        <p className="mb-2 text-sm md:text-base">{description}</p>
        <hr className="mb-2 border-accent-foreground/20" />

        <div className="flex flex-wrap items-center justify-start gap-2">
          {technologies.map((skill) => (
            <SkillName key={skill} skill={skill} />
          ))}
        </div>
        <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row">
          <Button
            onClick={() => window.open(linkToGitHub, "_blank")}
            type="primary"
            size="nml"
            style="py-2 text-lg"
          >
            <FaSquareGithub className="size-6" />
            Repo
          </Button>
          {linkToLive && linkToLive.length > 0 && (
            <Button
              type="outline"
              style="text-accent-foreground border-2 py-2 text-lg"
              size="nml"
            >
              <FaArrowUpRightFromSquare className="size-5" />
              Live
            </Button>
          )}
        </div>
      </div>
    </div>

    // <div className="rounded-lg bg-muted text-primary">
    //   <div className="relative inset-0 overflow-hidden rounded-lg">
    //     <img className="rounded-t-lg" src={image} alt={name} loading="lazy" />
    //   </div>
    //   <div className="bg-transparent p-4 backdrop-blur-lg">
    //     <h2 className="m-2 text-xl font-bold">{name}</h2>

    //     <p className="m-2 text-primary">{description}</p>
    //     <div className="flex flex-col text-primary">
    //       <p className="p-2">Technologies used:</p>
    //       <div className="flex flex-row gap-2">
    //         {techStack
    //           .filter((skill) => technologies.includes(skill.name))
    //           .map((skill) => (
    //             <Skill key={skill.name} skill={skill} />
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
