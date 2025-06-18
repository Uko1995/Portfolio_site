import { MapPinIcon } from "lucide-react";

export default function MapPin({ text = "" }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-full bg-green-400 px-5 py-1.5 text-white dark:bg-green-800/10 dark:text-green-300">
      {" "}
      <MapPinIcon className="animate-pulse" /> {text}
    </div>
  );
}
