import { X } from "lucide-react";
import React from "react";

export default function ClearInput({ onClick = () => {}, isSubmitting }) {
  return (
    <button
      className="absolute top-7 right-2 cursor-pointer border-1"
      type="reset"
      onClick={onClick}
      disabled={isSubmitting}
    >
      <X size={20} />
    </button>
  );
}
