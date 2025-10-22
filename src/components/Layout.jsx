import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";
import Contacts from "./Contacts";
import About from "./About";
import Projects from "./Projects";
import SkipToContent from "./SkipToContent";

export default function Layout() {
  return (
    <div className="dark-transition min-h-screen bg-white text-foreground dark:bg-gray-900 dark:text-white">
      <SkipToContent />
      <Header />
      <main id="main-content" className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
