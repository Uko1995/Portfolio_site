export default function SkillName({ skill = "" }) {
  return (
    <div className="rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground shadow-sm sm:text-sm">
      {skill}
    </div>
  );
}
