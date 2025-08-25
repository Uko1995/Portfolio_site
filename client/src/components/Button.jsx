export default function Button({
  children,
  style = "",
  type = "primary",
  size = "nml",
  onClick,
  disabled = false,
}) {
  const types = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 border-0",
    secondary:
      "bg-secondary/80 backdrop-blur-sm text-secondary-foreground hover:bg-secondary border border-border/50",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25",
    success:
      "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-green-500/25",
    warning:
      "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-yellow-500/25",
    info: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-blue-500/25",
    light:
      "bg-card/80 backdrop-blur-sm text-card-foreground hover:bg-card border border-border/50 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm",
    submit:
      "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl",
    special:
      "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-lg hover:shadow-xl transition-all duration-500",
    other:
      "bg-muted/80 backdrop-blur-sm text-muted-foreground hover:bg-muted border border-border/50",
  };

  const sizes = {
    lg: "py-4 px-8 text-lg font-semibold",
    nml: "px-4 py-2.5 text-sm font-medium",
    sm: "px-3 py-1.5 text-xs font-medium",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` ${style} flex w-full transform cursor-pointer items-center justify-center gap-2.5 rounded-xl font-bold transition-all duration-300 ease-out hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 ${types[type]} ${sizes[size]} `}
    >
      {children}
    </button>
  );
}
