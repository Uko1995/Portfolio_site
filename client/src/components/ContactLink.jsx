export default function ContactLink({ title = "", href = "", icon: Icon }) {
  return (
    <section className="flex flex-col gap-5 p-5 bg-background/50 rounded-lg ">
      <div className="flex gap-5 items-center">
        <Icon className="size-6" />
        <div className="flex flex-col">
          <a
            href={title === "Email" ? `mailto:${href}` : href}
            rel="noopener noreferrer"
            target="_blank"
            className="text-pretty/75 font-medium hover:text-primary/75 transition-colors duration-300"
          >
            {title}
          </a>
        </div>
      </div>
    </section>
  );
}
