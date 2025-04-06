import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Work />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App; 