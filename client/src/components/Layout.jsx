import { useState } from "react";

import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import Contacts from "./Contacts";
import About from "./About";
import Projects from "./Projects";

export default function Layout() {
  const [focusField, setFocusField] = useState({
    name: "",
    timestamp: 0,
  });
  return (
    <main id="home">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts focusField={focusField} setFocusField={setFocusField} />
    </main>
  );
}
