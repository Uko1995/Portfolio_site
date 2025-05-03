import { techStack } from "@/utils/skills";
import Skill from "./Skill";

export default function Project({ project }) {
  const { name, description, image, technologies } = project;
  return (
    <div className="bg-muted rounded-lg text-primary">
      <div className="overflow-hidden rounded-lg">
        <img className="rounded-t-lg" src={image} alt={name} loading="lazy" />
      </div>
      <div className="p-4">
        <h2 className="m-2 text-xl font-bold">{name}</h2>

        <p className="m-2 text-primary">{description}</p>
        <div className="flex flex-col  text-primary">
          <p className="p-2">Technologies used:</p>
          <div className="flex flex-row gap-2">
            {techStack
              .filter((skill) => technologies.includes(skill.name))
              .map((skill) => (
                <Skill key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
