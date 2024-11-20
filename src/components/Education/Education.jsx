import React from 'react';
import data from '../../data/data.json';
import './Education.scss';

function Education() {
  return (
    <section className="education container">
      <h2>Education</h2>
      <div className="education-list">
        {data.education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree} {edu.score ? <span className="score"> ({edu.score})</span>: null}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p className="duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
