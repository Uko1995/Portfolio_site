import { Mail, X } from "lucide-react";

import ContactLink from "./ContactLink";
import AboutInfo from "./AboutInfo";
import Button from "./Button";
import Footer from "./Footer";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Form from "./Form";
import { FaXTwitter } from "react-icons/fa6";

export default function Contacts() {
  return (
    <section
      id="contact"
      className="mt-15 mb-0 flex scroll-mt-24 flex-col items-center justify-center gap-30 px-5 py-10 text-primary/75 sm:px-10 md:px-20 lg:px-32 xl:px-40"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="mx-auto my-5 w-fit px-5 py-2 text-3xl font-bold text-primary">
          Let's Connect
        </h2>
        <p className="mx-auto mb-5 w-full text-justify text-lg sm:w-full">
          Interested in working together or have a project in mind? I'm open to
          new opportunities, collaborations, or even a friendly chat. Feel free
          to reach out through any of the platforms below.
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-15 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center rounded-lg bg-primary p-5 py-21.5 text-primary-foreground dark:bg-primary-foreground dark:text-primary">
            <p className="antialaised mb-5 text-lg font-semibold">
              You can connect with me on:
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-10 text-lg">
              <Button
                type="light"
                style="w-2/3 gap-3 text-xl"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "#name";
                  link.ariaLabel = "Contact Form";
                  link.rel = "noopener noreferrer";
                  link.click();
                }}
              >
                <Mail className="size-6" strokeWidth={2.5} />
                <div className="flex flex-col items-start">
                  <p>Email</p>
                </div>
              </Button>

              <Button
                type="light"
                style="w-2/3 gap-3 text-xl"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "https://www.linkedin.com/in/uwattuko";
                  link.target = "_blank";
                  link.ariaLabel = "LinkedIn";
                  link.rel = "noopener noreferrer";
                  link.click();
                }}
              >
                <LinkedInLogoIcon className="size-6" />{" "}
                <p className="mt-0">LinkedIn</p>
              </Button>
              <Button
                type="light"
                style="w-2/3 gap-3 text-xl"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "https://github.com/Uko1995";
                  link.target = "_blank";
                  link.ariaLabel = "GitHub";
                  link.rel = "noopener noreferrer";
                  link.click();
                }}
              >
                <GitHubLogoIcon className="size-6" /> GitHub
              </Button>
              <Button
                type="light"
                style="w-2/3 gap-3 text-xl"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "https://x.com/youkay_SWE";
                  link.target = "_blank";
                  link.ariaLabel = "X";
                  link.rel = "noopener noreferrer";
                  link.click();
                }}
              >
                <FaXTwitter className="size-6" /> X (Twitter)
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-accent-foreground/50 bg-secondary text-secondary-foreground shadow-2xl">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
