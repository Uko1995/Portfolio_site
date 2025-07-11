export default function Skill({ skill }) {
  const { img: Icon, name, color } = skill;
  return (
    <div className="flex w-99/100 flex-row items-center justify-start gap-2 rounded-lg bg-accent p-1 text-primary shadow-md hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
      <Icon size={30} fill={color} />
      <h3>{name}</h3>
    </div>
  );
}
