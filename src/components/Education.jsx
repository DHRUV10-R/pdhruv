import React from "react";

export default function Education() {
  const educationList = [
    {
      degree: "B.Sc. Computer Science",
      institution: "XYZ University",
      year: "2022",
      details: "Focused on programming, data structures, algorithms & software engineering."
    },
    {
      degree: "High School",
      institution: "ABC School",
      year: "2019",
      details: "Completed Higher Secondary with Science (PCM)."
    }
  ];

  return (
    <div className="glass-panel" id="education">
      <h2>Education</h2>

      <div className="education-timeline">
        {educationList.map((edu, index) => (
          <div className="edu-card" key={index}>
            <div className="dot"></div>

            <div className="edu-content">
              <h3>{edu.degree}</h3>
              <p className="edu-inst">{edu.institution}</p>
              <p className="edu-year">{edu.year}</p>
              <p className="edu-details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
