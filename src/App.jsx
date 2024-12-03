import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experiences />
      <Education />
      {/* <Projects /> */}
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
