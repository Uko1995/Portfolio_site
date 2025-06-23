import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import Contacts from "./Contacts";
import About from "./About";
import Projects from "./Projects";

export default function Layout() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </main>
  );
}
