import { SunIcon } from "@radix-ui/react-icons";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.removeAttribute("class");
      }
    },
    [isDarkMode],
  );
  return (
    <div
      className="mx-3 flex cursor-pointer items-center justify-center rounded-md"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {!isDarkMode ? (
        <FaMoon size={25} className="fill-gray-800" />
      ) : (
        <FaSun size={25} className="fill-gray-800 dark:fill-gray-100" />
      )}
    </div>
  );
}
