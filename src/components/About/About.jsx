import React from 'react';
import data from '../../data/data.json';

function About() {
  return (
    <section className="about container">
      <h2>About Me</h2>
      <p>{data.bio}</p>
    </section>
  );
}

export default About;
