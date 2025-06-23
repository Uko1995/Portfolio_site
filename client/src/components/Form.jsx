import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import { LoaderCircle, Send, SendHorizonal } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ defaultValues: initialState });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PRIVATE_KEY);
  }, []);

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    const upperSubject = subject.toUpperCase();

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          title: upperSubject,
          message,
        },
      );
      if (response.status === 200) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
      alert(`Email failed: ${error.text || error.message || "Unknown error"}`);
    }
  };
  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="my-10 flex w-full flex-col gap-5 rounded-lg bg-accent p-5 font-semibold text-accent-foreground md:w-2/3"
    >
      <p className="antialaised text-center text-lg">
        Fill out this form to send me a message
      </p>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          disabled={isSubmitting}
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="Your name"
          required
          autoComplete="name"
          className="scroll-mt-24 bg-background text-ellipsis"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          disabled={isSubmitting}
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
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          disabled={isSubmitting}
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
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          disabled={isSubmitting}
          id="message"
          placeholder="Type your message here"
          {...register("message", { required: "Message is required" })}
          required
          autoComplete="message"
          className="bg-background text-ellipsis"
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <Button
        asChild
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className={`${
          isSubmitting ? "cursor-progress" : "cursor-pointer"
        } w-1/2 self-center`}
      >
        {isSubmitting && <LoaderCircle className="animate-spin" />}
        {isSubmitting ? "Sending Email" : "Send Email"}
      </Button>
      {isSubmitted && (
        <p className="m-2 text-green-500">Your message has been sent!</p>
      )}
    </form>
  );
}
