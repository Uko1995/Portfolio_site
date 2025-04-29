import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

export default function HomePage() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
