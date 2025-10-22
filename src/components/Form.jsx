import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
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
        setIsSubmitted(true);
        console.log(response.text);
        toast.success("Email sent successfully!");
        reset();
      } else {
        toast.error("Failed to send email");
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(
        `Email failed: ${error.text || error.message || "Unknown error"}`,
      );
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="dark-transition flex w-full flex-col gap-3 p-3 text-xl font-semibold backdrop-blur-sm dark:text-white"
    >
      <div className="flex gap-3">
        <div className="relative flex flex-1 flex-col gap-1">
          <Label
            className="text-lg font-medium text-gray-800 dark:text-gray-200"
            htmlFor="name"
          >
            Name
          </Label>
          <Input
            disabled={isSubmitting}
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            required
            autoComplete="name"
            className="scroll-mt-24 rounded-lg border-2 border-gray-300 bg-background/80 px-4 py-2 text-lg text-gray-800 transition-all duration-200 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400"
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
        <div className="relative flex flex-1 flex-col gap-1">
          <Label
            className="text-lg font-medium text-gray-800 dark:text-gray-200"
            htmlFor="email"
          >
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
            className="rounded-lg border-2 border-gray-300 bg-background/80 px-4 py-3 text-lg text-gray-800 transition-all duration-200 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400"
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
      </div>
      <div className="relative flex flex-col gap-1">
        <Label
          className="text-lg font-medium text-gray-800 dark:text-gray-200"
          htmlFor="subject"
        >
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
          className="rounded-lg border-2 border-gray-300 bg-background/80 px-4 py-3 text-lg text-gray-800 transition-all duration-200 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400"
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
      <div className="relative flex w-full flex-col gap-1">
        <Label
          className="text-lg font-medium text-gray-800 dark:text-gray-200"
          htmlFor="message"
        >
          Message
        </Label>
        <Textarea
          disabled={isSubmitting}
          id="message"
          placeholder="Type your message here"
          {...register("message", { required: "Message is required" })}
          required
          autoComplete="message"
          className="min-h-20 resize-none rounded-lg border-2 border-gray-300 bg-background/80 px-4 py-3 text-lg text-gray-800 transition-all duration-200 placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400"
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
