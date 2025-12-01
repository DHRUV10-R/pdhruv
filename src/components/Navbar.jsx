import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel" style={{marginBottom: 0, marginTop: '1rem', padding: '1rem 2rem'}}>
      <h1 style={{margin: 0}}>Dhruv's Portfolio</h1>
      <ul className="navbar-list">
        <li><a href="#welcome">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}