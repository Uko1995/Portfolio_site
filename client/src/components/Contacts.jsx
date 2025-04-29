import { Mail, Github, Linkedin, LinkedinIcon, Send } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import ContactLink from "./ContactLink";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues: initialState });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <section id="contact" className="section-container">
      <h2 className="section-title">
        <span className="bg-primary text-background p-2 rounded-full">
          Get In
        </span>
        <span className="p-2">Touch</span>
      </h2>
      <p>
        I'm currently open to new opportunities, jobs and collaborations. Even
        if you just want to say hello, feel free to reach out.
      </p>
      <div className=" section-container flex gap-10 flex-col md:flex-row m-5">
        <div className="w-1/3 bg-accent p-5 rounded-lg flex flex-col gap-5">
          <p className="antialaised text-l">You can reach me on:</p>

          <ContactLink title="Email" icon={Mail} href="uwattuko@gmail.com" />
          <ContactLink
            title="Github"
            icon={Github}
            href="https://github.com/Uko1995"
          />
          <ContactLink
            title="Linkedin"
            icon={LinkedinIcon}
            href="https://www.linkedin.com/in/uwattuko"
          />
        </div>
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="w-2/3 section-container bg-accent p-5 rounded-lg flex flex-col gap-5"
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
              className="text-ellipsis bg-background"
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
                  value: "/S+@S+.S+/",
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
            <p className="text-green-500 m-2 ">Your message has been sent!</p>
          )}
        </form>
      </div>
    </section>
  );
}
