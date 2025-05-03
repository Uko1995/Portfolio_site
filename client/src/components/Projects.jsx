import Skill from "./Skill";
import Project from "./Project";

const ProjectData = [
  {
    name: "Portfolio Site",
    description: "Portfolio website that showcases my work and skills.",
    image: "./portfolio1.webp",
    technologies: ["React", "TailwindCss", "Vite"],
  },
  {
    name: "ParentPal",
    description:
      "An educational recommendation app that connects parents with nearby tutors. It uses a location-based filtering algorithm to help users find the closest available educators based on their search queries.",
    image: "./parentpal.png",
    technologies: ["React", "NodeJs", "ExpressJs", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container mt-10 scroll-mt-24 bg-[url(./pixels.jpg)] bg-fixed bg-cover bg-no-repeat bg-center text-accent"
    >
      <div className="inset-0">
        <h1 className="section-title">Projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ProjectData.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
