export default function About() {
  return (
    <section
      className="mx-2 flex w-full scroll-mt-24 flex-col items-center justify-center gap-2 py-5"
      id="about"
    >
      <h1 className="mx-auto mb-3 w-fit px-5 py-2 text-5xl font-bold text-primary/90 md:text-3xl">
        About Me
      </h1>

      <div className="flex w-full flex-col items-center justify-center rounded-lg bg-secondary p-5 pt-5 md:max-w-3xl">
        <p className="mb-4 w-full text-center text-lg text-balance">
          I'm a passionate software engineer and fullstack developer with a
          strong foundation in modern technologies. My journey into coding began
          with curiosity and has evolved into a dedicated career path.
        </p>
        <p className="mb-4 text-center text-lg text-balance">
          I specialize in building responsive web applications with React,
          creating RESTful APIs, and designing efficient database structures. I
          enjoy solving complex problems and turning ideas into reality through
          clean and maintainable code.
        </p>
      </div>
    </section>
  );
}
