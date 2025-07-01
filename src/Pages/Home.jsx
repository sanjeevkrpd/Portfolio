import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import ProfileImage from '../assets/profile.jpeg';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import TypewriterEffect from "../Component/TypewriterEffect.jsx"

const Home = ({ setActiveSection }) => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Sanjeevkrpd" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sanjeevkrpd" },
    { icon: <FaTwitter />, url: "https://twitter.com/sanjeevkrpd" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/sanjeev_kr_prasad" },
    { icon: <HiOutlineMail />, url: "mailto:sanjeevkrpd11@gmail.com" }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="home-subtitle">Hi, my name is</h4>
          <h1 className="home-title">Sanjeev Kumar.</h1>
           <h2 className="home-subtitle-large">I build things for the web and App.</h2>


          {/* ✅ GSAP Typewriter Effect */}
          <TypewriterEffect />

          <p className="home-description">
            I'm a Full-Stack Developer specializing in building exceptional digital experiences.
            Currently focused on building scalable web applications using ASP.NET Core, Node.js,
            and modern frontend frameworks.
          </p>

          <div className="home-buttons">
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </motion.button>

            <motion.button
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('resume')}
            >
              View Resume
            </motion.button>
          </div>

          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--highlight-color)" }}
                transition={{ duration: 0.3 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <img src={ProfileImage} alt="Sanjeev Kumar" className="profile-image" />
            <div className="image-border"></div>
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
