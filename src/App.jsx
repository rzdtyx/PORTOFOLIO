// src/App.jsx
import React from 'react'; 

// Import komponen
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Semua logika tema (useState, useEffect, toggleTheme) telah dihapus.
  
  return (
    <div className="App">
      {/* Navbar tidak lagi menerima props */}
      <Navbar /> 
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;