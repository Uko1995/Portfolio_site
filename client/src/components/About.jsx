export default function About() {
  return (
    <section className="mx-10 my-15 scroll-mt-24" id="about">
      <h1 className="mx-auto w-fit px-5 py-2 text-2xl font-bold text-primary/90">
        About Me
      </h1>
      <div className="flex flex-col gap-5 rounded-lg bg-secondary p-5 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:max-w-3xl">
          <p className="mb-4 text-base">
            I'm a passionate software engineer and fullstack developer with a
            strong foundation in modern technologies. My journey into coding
            began with curiosity and has evolved into a dedicated career path.
          </p>
          <p className="mb-4 text-base">
            I specialize in building responsive web applications with React,
            creating RESTful APIs, and designing efficient database structures.
            I enjoy solving complex problems and turning ideas into reality
            through clean, maintainable code.
          </p>
        </div>
        <div className="">
          <div className="md:80 md:80 relative h-64 w-64 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-full bg-muted">
              <div className="absolute inset-2 overflow-hidden rounded-full bg-white shadow-2xl">
                <img className="z-10" src="uko.webp" alt="uko" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
