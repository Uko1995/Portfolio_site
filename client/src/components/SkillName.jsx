export default function SkillName({ skill = "" }) {
  return (
    <div className="mb-3 rounded-xl bg-muted/600 px-4 py-2.5 text-sm text-background text-primary/75 shadow-lg md:text-base">
      {skill}
    </div>
  );
}
