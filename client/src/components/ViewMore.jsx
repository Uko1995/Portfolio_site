import React from "react";
import Button from "./Button";
import { FaSquareGithub } from "react-icons/fa6";

const GITHUB_URL = "https://github.com/Uko1995?tab=repositories";

const ViewMore = () => (
  <div className="mx-2 my-10 flex w-full flex-col items-center justify-center rounded-lg bg-primary p-6 text-primary-foreground shadow-lg">
    <h2 className="mb-4 text-2xl font-bold">Want to see more projects?</h2>

    <div className="flex w-4/5 flex-col items-center gap-4 rounded-lg px-6 py-4 md:flex-row">
      <Button
        style="px-4 rounded-full border border-transparent"
        type="special"
        size="lg"
        onClick={() => window.open(GITHUB_URL, "_blank")}
      >
        <FaSquareGithub size={20} />{" "}
        <span className="text-base">View more</span>
      </Button>
      <Button
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        size="lg"
        style="px-4 border-2 border-muted/50 "
        type="outline"
      >
        <span className="text-base text-background">Let's Collaborate</span>
      </Button>
    </div>
  </div>
);

export default ViewMore;
