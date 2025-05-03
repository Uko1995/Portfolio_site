import { Mail, Github, Linkedin, LinkedinIcon, Send } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import ContactLink from "./ContactLink";
import AboutInfo from "./AboutInfo";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contacts({ focusField }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm({ defaultValues: initialState });

  const handleClick = () => {
    setFocus("name");
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (focusField?.name) {
      setFocus(focusField.name);
    }
  }, [focusField, setFocus]);

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_ID);
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        }
      );

      if (response.status === 200) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
      console.log("EmailJS response:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  return (
    <section id="contact" className="section-container my-10 scroll-mt-24">
      <h2 className="section-title">
        <span className="bg-primary text-background p-2 rounded-lg">
          Get In
        </span>
        <span className="p-2">Touch</span>
      </h2>
      <p className="w-full text-justify text-lg">
        I'm currently open to new opportunities, jobs and collaborations. Even
        if you just want to say hello, feel free to reach out.
      </p>
      <div className="mx-auto p-2 sm:px-6 lg:px-8 w-full flex gap-2 flex-col justify-center items-center md:flex-row m-5">
        <div className="w-full  md:w-1/3 bg-accent py-23 px-5 rounded-lg flex flex-col gap-5">
          <p className="antialaised text-l">You can reach me on:</p>

          <Button
            variant="ghost"
            className="justify-start border-2 m-2 p-7"
            onClick={handleClick}
          >
            <div className="bg-accent-foreground rounded-lg p-2">
              <Mail className="text-accent size-5" />
            </div>
            <div className="ms-3 cursor-pointer hover:scale-110 transition-scale duration-150">
              <h3 className=" text-base text-primary">Email</h3>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="justify-start border-2 m-2 p-7"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "https://github.com/Uko1995";
              link.target = "_blank";
              link.ariaLabel = "GitHub";
              link.rel = "noopener noreferrer";
              link.click();
            }}
          >
            <div className="bg-accent-foreground rounded-lg p-2">
              <Github className="text-accent size-5" />
            </div>
            <div className="ms-3 cursor-pointer hover:scale-110 transition-scale duration-150">
              <h3 className=" text-base text-primary">GitHub</h3>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="justify-start border-2 m-2 p-7"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "https://www.linkedin.com/in/uwattuko";
              link.ariaLabel = "LinkedIn";
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.click();
            }}
          >
            <div className="bg-accent-foreground rounded-lg p-2">
              <LinkedinIcon className="text-accent size-5" />
            </div>
            <div className="ms-3 cursor-pointer hover:scale-110 transition-scale duration-150">
              <h3 className=" text-base text-primary">LinkedIn</h3>
            </div>
          </Button>
        </div>
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/3 section-container my-10 bg-accent p-5 rounded-lg flex flex-col gap-5"
        >
          <p className="antialaised text-l">
            Fill out this form to send me a message
          </p>
          <div className="flex flex-col">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              required
              autoComplete="name"
              className="text-ellipsis bg-background scroll-mt-24"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Does not match email format",
                },
              })}
              placeholder="Your email"
              required
              autoComplete="email"
              className="text-ellipsis bg-background"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              {...register("subject", {
                required: "Subject of mail is required",
              })}
              placeholder="Title of your message"
              required
              autoComplete="subject"
              className="text-ellipsis bg-background"
            />
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="type your message here"
              {...register("message", { required: "Message is required" })}
              required
              autoComplete="message"
              className="text-ellipsis bg-background"
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <Button
            asChild
            variant="default"
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? "cursor-progress" : "cursor-pointer"
            } w-1/2 self-center`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send /> {isSubmitting ? "Sending" : "Send"}
            </motion.button>
          </Button>
          {isSubmitted && (
            <p className="text-green-500 m-2 ">Your message has been sent!</p>
          )}
        </form>
      </div>
    </section>
  );
}
