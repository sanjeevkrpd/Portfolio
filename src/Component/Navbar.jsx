import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaFileAlt, 
  FaEnvelope 
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Check if scrolled to the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToSection = (id) => {
  const element = document.getElementById(id.toLowerCase());
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
    setActiveSection(id.toLowerCase()); // Optional: sync state
  }
};

  const navItems = [
    { icon: <FaHome />, label: "Home", section: "home" },
    { icon: <FaUser />, label: "About", section: "about" },
    { icon: <FaCode />, label: "Skills", section: "skills" },
    { icon: <FaFileAlt />, label: "Resume", section: "resume" },
    { icon: <FaEnvelope />, label: "Contact", section: "contact" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">SK</span>
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
                onClick={() => scrollToSection(item.section)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;