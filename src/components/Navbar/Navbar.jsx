import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUser, 
  FiCode, 
  FiBriefcase, 
  FiFileText, 
  FiMail,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  const navItems = [
    { icon: <FiHome />, label: 'Home', id: 'home' },
    { icon: <FiUser />, label: 'About', id: 'about' },
    { icon: <FiCode />, label: 'Skills', id: 'skills' },
    { icon: <FiBriefcase />, label: 'Projects', id: 'projects' },
    { icon: <FiFileText />, label: 'Resume', id: 'resume' },
    { icon: <FiMail />, label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Sanjeevkrpd', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/sanjeevkrpd', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/sanjeevkrpd', label: 'Twitter' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <span className="logo-text">SK</span>
              <span className="logo-name">Sanjeev</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-indicator"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Social Links & Menu Toggle */}
          <div className="nav-right">
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <button
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed animation */}
        <motion.div
          className={`mobile-menu ${isOpen ? 'open' : ''}`}
          initial={false}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
            
            <div className="mobile-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="mobile-social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;