import React from 'react';

export default function Skills() {
  const skillSet = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Git & GitHub',
    'Responsive Design',
    'UI/UX Basics'
  ];

  return (
    <div className="glass-panel" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillSet.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}