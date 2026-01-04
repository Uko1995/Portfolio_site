import React from "react";
import Button from "./Button";
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
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-4 lg:max-w-none lg:flex-row lg:justify-center lg:gap-5">
        <Button
          style="px-6 py-3 rounded-full border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full lg:w-auto flex items-center justify-center"
          type="info"
          size="lg"
          onClick={handleGithubClick}
        >
          <span className="text-base font-semibold md:text-lg">
            View More Projects
          </span>
        </Button>
        <Button
          onClick={handleCollaborateClick}
          size="lg"
          style="px-6 py-3 rounded-full border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full lg:w-auto flex items-center justify-center"
          type="other"
        >
          <span className="text-base font-semibold text-primary md:text-lg">
            Let's Collaborate
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ViewMore;
