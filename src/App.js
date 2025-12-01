import React from "react";
import Navbar from "./components/Navbar";
import Main_in from "./components/Main_in";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* ONLY Main_in here */}
      <Main_in />

      <Skills />
      <Education />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
