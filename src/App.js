import React from "react";
import "./App.css";
import { BrowserRouter} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Home from "./Components/main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Project from "./Components/Project";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar persists across all pages */}
      <Navbar />

      {/* Sections with proper IDs for smooth scrolling */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;