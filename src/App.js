import React from "react";
import Navbar from "./components/Navbar";
import MainIn from "./components/MainIn";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* ONLY Main_in here */}
      <MainIn />

      <Skills />
      <Education />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
