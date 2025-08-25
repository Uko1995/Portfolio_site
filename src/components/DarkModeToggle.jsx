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
      className="relative flex cursor-pointer items-center justify-center rounded-2xl bg-muted/50 p-3 transition-all duration-300 hover:scale-105 hover:bg-muted"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {!isDarkMode ? (
        <FaMoon
          size={20}
          className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
        />
      ) : (
        <FaSun
          size={20}
          className="text-amber-500 transition-colors duration-300 hover:text-amber-400"
        />
      )}
    </div>
  );
}
