import React from 'react';

const projects = [
  {
    title: 'Awesome Website',
    description: 'A modern, responsive website built using React.',
    link: 'https://example.com/awesome-website'
  },
  {
    title: 'Portfolio Site',
    description: 'My personal portfolio showcasing my projects and skills.',
    link: 'https://example.com/portfolio'
  }
  // Add more projects here!
];

export default function Projects() {
  return (
    <div className="glass-panel" id="projects">
      <h2>Projects</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
}