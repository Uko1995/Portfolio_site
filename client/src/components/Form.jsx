import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import { LoaderCircle } from "lucide-react";
import ClearInputButton from "./ClearInputButton";
import FormErrorMessage from "./FormErrorMessage";

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
    setValue,
    clearErrors,
    watch,
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

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
      className="flex w-full flex-col gap-5 rounded-lg bg-accent p-5 text-xl font-semibold text-accent-foreground"
    >
      <p className="antialaised text-center">Fill the form to send a message</p>
      <div className="relative flex w-2/3 flex-col gap-2">
        <Label className="text-xl" htmlFor="name">
          Name
        </Label>
        <Input
          disabled={isSubmitting}
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="Your name"
          required
          autoComplete="name"
          className="scroll-mt-24 bg-input text-lg text-ellipsis"
        />
        {watch("name")?.length > 0 && (
          <ClearInputButton
            isSubmitting={isSubmitting}
            onClick={() => {
              setValue("name", "");
              clearErrors("name");
            }}
          />
        )}
        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </div>
      <div className="relative flex flex-col gap-2">
        <Label className="text-xl" htmlFor="email">
          Email
        </Label>
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
          placeholder="sample@gmail.com"
          required
          autoComplete="email"
          className="bg-input text-lg text-ellipsis"
        />
        {watch("email")?.length > 0 && (
          <ClearInputButton
            isSubmitting={isSubmitting}
            onClick={() => {
              setValue("email", "");
              clearErrors("email");
            }}
          />
        )}
        {errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </div>
      <div className="relative flex flex-col gap-2">
        <Label className="text-xl" htmlFor="subject">
          Subject
        </Label>
        <Input
          disabled={isSubmitting}
          id="subject"
          {...register("subject", {
            required: "Subject of mail is required",
          })}
          placeholder="Title of your message"
          required
          autoComplete="subject"
          className="bg-input text-lg text-ellipsis"
        />
        {watch("subject")?.length > 0 && (
          <ClearInputButton
            isSubmitting={isSubmitting}
            onClick={() => {
              setValue("subject", "");
              clearErrors("subject");
            }}
          />
        )}
        {errors.subject && (
          <FormErrorMessage>{errors.subject.message}</FormErrorMessage>
        )}
      </div>
      <div className="relative flex w-full flex-col gap-2">
        <Label className="text-xl" htmlFor="message">
          Message
        </Label>
        <Textarea
          disabled={isSubmitting}
          id="message"
          placeholder="Type your message here"
          {...register("message", { required: "Message is required" })}
          required
          autoComplete="message"
          className="bg-input text-lg text-ellipsis"
        />
        {watch("message")?.length > 0 && (
          <ClearInputButton
            isSubmitting={isSubmitting}
            onClick={() => {
              setValue("message", "");
              clearErrors("message");
            }}
          />
        )}
        {errors.message && (
          <FormErrorMessage>{errors.message.message}</FormErrorMessage>
        )}
      </div>
      <Button
        asChild
        type="submit"
        size="nml"
        disabled={isSubmitting}
        className={`${
          isSubmitting ? "cursor-progress" : "cursor-pointer"
        } w-1/2 self-center`}
      >
        {isSubmitting && <LoaderCircle className="animate-spin" />}
        {isSubmitting ? (
          <span className="text-xl">Sending Email</span>
        ) : (
          <span className="text-xl">Send Email</span>
        )}
      </Button>
      {isSubmitted && (
        <p className="m-2 text-green-500">Your message has been sent!</p>
      )}
    </form>
  );
}
