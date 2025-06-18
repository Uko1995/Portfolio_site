export default function Button({
  children,
  type = "primary",
  size = "nml",
  onClick,
}) {
  const types = {
    primary:
      "bg-primary border-1 border-transparent hover:bg-foreground text-background hover:text-background/80 dark:bg-primary dark:hover:bg-foreground dark:text-background",
    secondary: "bg-secondary hover:bg-secondary- text-secondary",
    danger:
      "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white",
    success:
      "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white",
    warning:
      "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-white",
    info: "border-1 border-transparent bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white",
    light:
      "bg-gray-200 border-1 border-transparent hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-200 text-gray-800",
    outline:
      "border-1 border-foreground text-foreground hover:text-foreground/80 hover:bg-foreground/10 dark:text-foreground",
  };

  const sizes = {
    lg: "py-3 px-5 text-xl",
    nml: "px-3 py-1.5",
  };

  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-md font-bold ${types[type]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}
