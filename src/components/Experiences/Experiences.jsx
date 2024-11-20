import React, { useState } from 'react';
import data from '../../data/data.json';
import './Experiences.scss';

function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experiences container">
      <h2>Experience</h2>
      <div className="experiences-list">
        {data.experiences.map((experience, index) => (
          <div
            key={index}
            className={`experience-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleAccordionToggle(index)}
          >
            <div>
              <h3>{experience.company}</h3>
              <div className="experience-summary">
                <p>
                  <strong>{experience.role}</strong>
                </p>
                <p className="duration">{experience.duration}</p>
                <span className="expand-icon">
                  {expandedIndex === index ? '▲' : '▼'}
                </span>
              </div>
            </div>

            {expandedIndex === index && (
              <div className="experience-details">
                {experience?.responsibilities?.length ? <ul>
                  {experience?.responsibilities?.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul> : null}

                {experience?.projects?.length ?
                <ul className='project'>
                  {experience?.projects?.map((project, idx) => (
                    <li key={idx}>
                      <div>
                        <p><strong>Project</strong> - {project.name}</p>
                        <p><strong>Client</strong> - {project.client}</p>
                        <p><strong>Tools and Technologies used</strong> - {project.techstack}</p>
                        <p><strong>Description</strong> - {project.description}</p>
                      </div>
                    </li>
                  ))}
                </ul> : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
