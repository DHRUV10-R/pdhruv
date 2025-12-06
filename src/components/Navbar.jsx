import React from 'react';
import myLogo from "../assests/1.png"; // <-- your small image

export default function Navbar() {
  return (
    <nav 
      className="navbar glass-panel" 
      style={{ 
        marginBottom: 0, 
        marginTop: '1rem', 
        padding: '1rem 2rem',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img 
          src={myLogo} 
          alt="logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #00ff99"
          }}
        />
        <h1 style={{ margin: 0 }}>Dhruv's Portfolio</h1>
      </div>

      <ul className="navbar-list" style={{ display: "flex", gap: "1.5rem", margin: 0 }}>
        <li><a href="#welcome">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
