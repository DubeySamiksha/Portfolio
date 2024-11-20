import React from 'react';
import data from '../../data/data.json';

function Projects() {
  return (
    <section className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
