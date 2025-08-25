export default function ShortInfo({ children, bgColor = "bg-ring" }) {
  return (
    <div className={`flex gap-5 ${bgColor} w-fit py-3 px-6 rounded-lg`}>
      {children}
    </div>
  );
}
