export default function Skill({ skill }) {
  const { img: Icon, name, color } = skill;
  return (
    <div className="from-background/50 to-muted/30 hover:from-primary/10 hover:to-accent/10 group flex w-full items-center justify-start gap-3 rounded-xl bg-gradient-to-r p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <Icon
        size={32}
        style={{ color: color }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-foreground group-hover:text-primary text-sm font-medium transition-colors duration-300">
        {name}
      </h3>
    </div>
  );
}
