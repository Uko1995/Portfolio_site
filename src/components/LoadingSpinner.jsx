import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner({
  size = "md",
  className = "",
  text = "Loading...",
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <LoaderCircle className={`animate-spin ${sizeClasses[size]}`} />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
}

export function LoadingSkeleton({ className = "" }) {
  return (
    <div className={`animate-pulse rounded bg-muted ${className}`}>
      <div className="mb-2 h-4 w-3/4 rounded bg-muted-foreground/20"></div>
      <div className="h-4 w-1/2 rounded bg-muted-foreground/20"></div>
    </div>
  );
}
