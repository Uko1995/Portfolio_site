export default function SkillName({ skill = "" }) {
  return (
    <div className="dark-transition-fast rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground shadow-sm sm:text-sm dark:bg-gray-700 dark:text-gray-300">
      {skill}
    </div>
  );
}
