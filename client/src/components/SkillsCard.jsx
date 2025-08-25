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
    <Card className="card-hover group relative overflow-hidden border-0 bg-gradient-to-br from-card/80 to-muted/50 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <CardHeader className="relative z-10">
        <CardTitle className="gradient-text text-center text-xl font-bold md:text-2xl">
          {title}
        </CardTitle>
      </CardHeader>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <CardContent className="relative z-10">
        <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </CardContent>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <CardFooter className="relative z-10">
        <div className="mx-auto grid w-full grid-cols-2 justify-items-center gap-4">
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
