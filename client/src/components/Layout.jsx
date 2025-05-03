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
    <div
      id="home"
      className=" min-h-screen"
      style={{ fontFamily: "Lato, sans-serif" }}
    >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts focusField={focusField} />
      <Footer
        onEmailClick={(e) => {
          e.preventDefault();
          setFocusField({ name: "email", timestamp: Date.now() });
        }}
      />
    </div>
  );
}
