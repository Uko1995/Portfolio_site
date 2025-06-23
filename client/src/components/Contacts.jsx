import { Mail, X } from "lucide-react";
import { useState } from "react";

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
  const [openForm, setOpenForm] = useState(false);
  return (
    <section
      id="contact"
      className="mt-15 mb-0 flex scroll-mt-24 flex-col items-center justify-center gap-30 bg-muted px-5 py-10 text-muted-foreground sm:px-10 md:px-20 lg:px-32 xl:px-40"
    >
      <div>
        <h2 className="mx-auto my-5 w-fit px-5 py-2 text-2xl font-bold text-primary">
          Let's Connect
        </h2>
        <p className="mx-auto w-full text-justify text-base sm:w-2/3">
          Interested in working together or have a project in mind? I'm open to
          new opportunities, collaborations, or even a friendly chat. Feel free
          to reach out through any of the platforms below.
        </p>
        <div className="text mx-auto mt-5 flex w-2/3 flex-col items-center justify-center rounded-lg bg-primary p-2 text-primary-foreground">
          <p className="antialaised text-base">You can connect with me on:</p>
          <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
            <Button
              type="light"
              style="w-1/2"
              onClick={() => {
                setOpenForm((prev) => !prev);
                console.log("Form Opened: ", !openForm);
              }}
            >
              <Mail className="size-5" /> Email
            </Button>
            {openForm && <Form />}
            <Button
              type="light"
              style="w-1/2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "https://www.linkedin.com/in/uwattuko";
                link.target = "_blank";
                link.ariaLabel = "LinkedIn";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <LinkedInLogoIcon className="size-5" /> LinkedIn
            </Button>
            <Button
              type="light"
              style="w-1/2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "https://github.com/Uko1995";
                link.target = "_blank";
                link.ariaLabel = "GitHub";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <GitHubLogoIcon className="size-5" /> GitHub
            </Button>
            <Button
              type="light"
              style="w-1/2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "https://x.com/youkay_SWE";
                link.target = "_blank";
                link.ariaLabel = "X";
                link.rel = "noopener noreferrer";
                link.click();
              }}
            >
              <FaXTwitter className="size-5" /> X (Twitter)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
