import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import Contacts from "./Contacts";
import About from "./About";
import Projects from "./Projects";
import SkipToContent from "./SkipToContent";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
