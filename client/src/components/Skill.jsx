export default function Skill({ skill }) {
  const { img: Icon, name, color } = skill;
  return (
    <div className="flex w-99/100 flex-row items-center justify-start gap-4">
      <Icon size={30} fill={color} />
      <h3>{name}</h3>
    </div>
  );
}
