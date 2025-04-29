import { Card, CardFooter, CardContent } from "./ui/card";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";

export default function Skill({ skill }) {
  const Icon = skill.img;
  return (
    <div className="flex flex-row gap-2 w-30 p-1 pr-5  items-start  bg-background text-foreground">
      <Icon size={25} />
      <h3>{skill.name}</h3>
    </div>
  );
}
