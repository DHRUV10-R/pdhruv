import React, { useState } from "react";
import { motion } from "framer-motion";


const Projects = () => {
  const categories = ["All", "Web", "UI/UX", "Apps"];

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Modern Portfolio",
      description: "React + Glassmorphism UI",
      category: "Web",
      link: "https://portfolio.com",
    },
    {
      title: "Firebase Todo App",
      description: "Auth, Firestore, Storage",
      category: "Web",
      link: "https://todoapp.com",
    },
    {
      title: "Weather App",
      description: "Live API Weather UI",
      category: "Apps",
      link: "https://weather.com",
    },
    {
      title: "Design System Kit",
      description: "UI/UX Figma Project",
      category: "UI/UX",
      link: "https://figma.com",
    },
  ];

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="projects-section glass-panel">
      <h2>Projects</h2>

      {/* Category Filter */}
      <div className="category-buttons">
        {categories.map((c) => (
          <button
            key={c}
            className={activeCategory === c ? "active" : ""}
            onClick={() => setActiveCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filtered.map((project, index) => (
          <motion.button
            key={index}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="tilt-wrap">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tag">{project.category}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
