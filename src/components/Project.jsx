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
      img: require("../assests/1.png") // <-- project image
    },
    {
      title: "Firebase Todo App",
      description: "Auth, Firestore, Storage",
      category: "Web",
      link: "https://todoapp.com",
      img: require("../assests/2.png")
    },
    {
      title: "Weather App",
      description: "Live API Weather UI",
      category: "Apps",
      link: "https://weather.com",
      img: require("../assests/3.png")
    },
    {
      title: "Design System Kit",
      description: "UI/UX Figma Project",
      category: "UI/UX",
      link: "https://figma.com",
      img: require("../assests/4.png")
    }
  ];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <img 
              src={project.img} 
              alt={project.title}
              className="project-img"
              style={{
                width: "100%",
                height: "160px",
                borderRadius: "10px",
                objectFit: "cover",
                marginBottom: "10px"
              }}
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tag">{project.category}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
