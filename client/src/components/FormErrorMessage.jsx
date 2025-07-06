import React from "react";

export default function FormErrorMessage({ children }) {
  return <p className="text-end text-sm text-red-400">{children}</p>;
}
