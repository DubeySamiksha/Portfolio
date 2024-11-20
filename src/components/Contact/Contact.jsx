import React from 'react';
import data from '../../data/data.json';

function Contact() {
  return (
    <section className="contact container">
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
      <p>Mobile: <a href={`tel:${data.contact.mobile}`}>{data.contact.mobile}</a></p>
      <p>LinkedIn: <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">{data.contact.linkedin}</a></p>
      {/* <p>GitHub: <a href={data.contact.github} target="_blank" rel="noopener noreferrer">Profile</a></p> */}
    </section>
  );
}

export default Contact;
