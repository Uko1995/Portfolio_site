import React from "react";
import Button from "./Button";
import { FaSquareGithub } from "react-icons/fa6";
import { useScrollTo } from "@/hooks/useUtilities";
import { PERSONAL_INFO } from "@/config/constants";

const ViewMore = () => {
  const scrollToElement = useScrollTo();

  const handleGithubClick = () => {
    window.open(`${PERSONAL_INFO.github}?tab=repositories`, "_blank");
  };

  const handleCollaborateClick = () => {
    scrollToElement("contact");
  };

  return (
    <div className="mx-2 my-10 flex w-full flex-col items-center justify-center text-primary/75">
      <div className="rounded-base flex w-full flex-col items-center gap-2 md:flex-row">
        <Button
          style="px-4 rounded-full border border-transparent"
          type="info"
          size="lg"
          onClick={handleGithubClick}
        >
          <FaSquareGithub size={25} />{" "}
          <span className="text-base md:text-lg">View more</span>
        </Button>
        <Button
          onClick={handleCollaborateClick}
          size="lg"
          style="px-4 border-2 border-muted-foreground  "
          type="other"
        >
          <span className="text-base text-primary/75 md:text-lg">
            Let's Collaborate
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ViewMore;
