import React from 'react';
import data from '../../data/data.json';
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills container">
      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
