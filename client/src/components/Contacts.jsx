import { Mail, Github, Linkedin, LinkedinIcon, Send } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import ContactLink from "./ContactLink";
import AboutInfo from "./AboutInfo";
import Button from "./Button";
import Footer from "./Footer";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contacts({ focusField, setFocusField }) {
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
        },
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
    <section id="contact" className="container mx-5 my-10 scroll-mt-24">
      <h2>
        <span className="rounded-lg bg-primary p-2 text-background">
          Get In
        </span>
        <span className="p-2">Touch</span>
      </h2>
      <p className="w-full text-justify text-lg">
        I'm currently open to new opportunities, jobs and collaborations. Even
        if you just want to say hello, feel free to reach out.
      </p>
      <div className="m-5 mx-auto flex w-full flex-col items-center justify-center gap-2 p-2 sm:px-6 md:flex-row lg:px-8">
        <div className="flex w-full flex-col gap-5 rounded-lg bg-accent px-5 py-23 md:w-1/3">
          <p className="antialaised text-l">You can reach me on:</p>

          <Button
            variant="ghost"
            className="m-2 justify-start border-2 p-7"
            onClick={handleClick}
          >
            <div className="rounded-lg bg-accent-foreground p-2">
              <Mail className="size-5 text-accent" />
            </div>
            <div className="transition-scale ms-3 cursor-pointer duration-150 hover:scale-110">
              <h3 className="text-base text-primary">Email</h3>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="m-2 justify-start border-2 p-7"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "https://github.com/Uko1995";
              link.target = "_blank";
              link.ariaLabel = "GitHub";
              link.rel = "noopener noreferrer";
              link.click();
            }}
          >
            <div className="rounded-lg bg-accent-foreground p-2">
              <Github className="size-5 text-accent" />
            </div>
            <div className="transition-scale ms-3 cursor-pointer duration-150 hover:scale-110">
              <h3 className="text-base text-primary">GitHub</h3>
            </div>
          </Button>
          <Button
            variant="ghost"
            className="m-2 justify-start border-2 p-7"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "https://www.linkedin.com/in/uwattuko";
              link.ariaLabel = "LinkedIn";
              link.target = "_blank";
              link.rel = "noopener noreferrer";
              link.click();
            }}
          >
            <div className="rounded-lg bg-accent-foreground p-2">
              <LinkedinIcon className="size-5 text-accent" />
            </div>
            <div className="transition-scale ms-3 cursor-pointer duration-150 hover:scale-110">
              <h3 className="text-base text-primary">LinkedIn</h3>
            </div>
          </Button>
        </div>
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="section-container my-10 flex w-full flex-col gap-5 rounded-lg bg-accent p-5 md:w-2/3"
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
              className="scroll-mt-24 bg-background text-ellipsis"
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
              className="bg-background text-ellipsis"
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
              className="bg-background text-ellipsis"
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
              className="bg-background text-ellipsis"
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
            <Send /> {isSubmitting ? "Sending" : "Send"}
          </Button>
          {isSubmitted && (
            <p className="m-2 text-green-500">Your message has been sent!</p>
          )}
        </form>
      </div>

      <Footer
        onEmailClick={(e) => {
          e.preventDefault();
          setFocusField({ name: "email", timestamp: Date.now() });
        }}
      />
    </section>
  );
}
