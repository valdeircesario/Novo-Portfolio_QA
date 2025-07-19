import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import QADashboard from './components/QADashboard';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { addCssAnimation } from './utils/animations';

function App() {
  useEffect(() => {
    // Add CSS animations to document
    addCssAnimation();
    
    // Set the title
    document.title = "Valdeir C. Silva | QA Analyst Portfolio";
  }, []);

  return (
    <div className="font-inter text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <QADashboard />
      <Skills />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;