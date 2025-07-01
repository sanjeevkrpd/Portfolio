import { motion } from 'framer-motion';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Skill from './Pages/Skill';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-container">
      <header style={{ zIndex: 100 }}>
        <Navbar />
      </header>
      
      <main>
       <Home id="home" setActiveSection={setActiveSection} />
        <About id="about" />
        <Skill id="skills" />
        <Resume id="resume" />
        <Contact id="contact" />
      </main>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sanjeev Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;