export default function SkillName({ skill = "" }) {
  return (
    <div className="mb-3 rounded-xl bg-primary px-4 py-2.5 text-sm text-background shadow-lg md:text-base">
      {skill}
    </div>
  );
}
