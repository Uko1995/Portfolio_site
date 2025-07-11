import { techStack } from "@/utils/skills";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Skill from "./Skill";

export default function SkillsCard({
  title = "",
  description = "",
  titleNumber = 0,
}) {
  return (
    <Card className="mx-auto w-full bg-accent text-primary shadow-lg hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
      <CardHeader>
        <CardTitle
          className={`text-center text-2xl font-bold text-primary/90 md:text-lg`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <hr />
      <CardContent>
        <p className="text-center text-lg text-balance text-primary/75 lg:text-base">
          {description}
        </p>
      </CardContent>
      <hr />
      <CardFooter>
        <div className="align-center mx-auto grid grid-cols-2 justify-items-center gap-5">
          {techStack
            .filter(
              (skill) =>
                skill.section ===
                title.trim().split(" ")[titleNumber].toLowerCase(),
            )
            .map((skill, i) => (
              <Skill skill={skill} key={i} />
            ))}
        </div>
      </CardFooter>
    </Card>
  );
}
