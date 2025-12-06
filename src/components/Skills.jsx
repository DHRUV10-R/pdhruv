import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { BiDevices } from 'react-icons/bi'; // replaced BiResponsive

export default function Skills() {
  const skillSet = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Git & GitHub', icon: <FaGitAlt /> },
    { name: 'Responsive Design', icon: <BiDevices /> }, // fixed
    { name: 'UI/UX Basics', icon: <MdDesignServices /> }
  ];

  return (
    <div className="glass-panel" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillSet.map((skill, idx) => (
          <li key={idx}>
            <span className="skill-icon">{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
