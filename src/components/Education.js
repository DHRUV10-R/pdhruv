import React from 'react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'XYZ University',
      year: '2022'
    },
    {
      degree: 'High School',
      institution: 'ABC School',
      year: '2019'
    }
  ];

  return (
    <div className="glass-panel" id="education">
      <h2>Education</h2>
      <ul className="education-list">
        {educationList.map((edu, idx) => (
          <li key={idx}>
            <strong>{edu.degree}</strong>, {edu.institution} <span className="edu-year">({edu.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}