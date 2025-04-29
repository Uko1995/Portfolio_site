import Header from "./Header";
import Hero from "./Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import About from "./About";

export default function Layout() {
  return (
    <div id="home" className=" min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}
