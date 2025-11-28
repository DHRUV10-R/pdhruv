import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="glass-panel">
        <h2>Welcome!</h2>
        <p>
          Hello, I’m <strong>Dhruv</strong>. This is my modern portfolio built with React.js.
          <br/>Feel free to explore my work and reach out!
        </p>
      </div>
      <Skills />
      <Education />
      <Projects />
      <div className="glass-panel">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:dhruv@email.com">dhruv@email.com</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default App;