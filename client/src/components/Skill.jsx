export default function Skill({ skill }) {
  const { img: Icon, name, color } = skill;
  return (
    <div className="flex flex-row gap-2 w-35 p-1 pr-5  items-start  ">
      <Icon size={30} fill={color} />
      <h3>{name}</h3>
    </div>
  );
}
