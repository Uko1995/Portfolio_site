import { X } from "lucide-react";
import React from "react";

export default function ClearInput({ onClick = () => {}, isSubmitting }) {
  return (
    <button
      className="absolute top-11 right-2 cursor-pointer rounded-full border-1 text-foreground dark:text-foreground"
      type="reset"
      onClick={onClick}
      disabled={isSubmitting}
    >
      <X size={20} />
    </button>
  );
}
