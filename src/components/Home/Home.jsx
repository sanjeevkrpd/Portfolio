import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiChevronDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import profileImage from '../../assets/MyImage.png';
import resumePDF from '../../assets/sanjeev-resume.pdf';
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect';
import './Home.css';

const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Sanjeevkrpd', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/sanjeevkrpd', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/sanjeevkrpd', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/sanjeev_kr_prasad', label: 'Instagram' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Reserve space for fixed navbar + some breathing room
      const offset = 100; // adjust if your navbar height changes
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Floating particles
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 3 + 1}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Floating Particles */}
      <div className="particles"></div>
      
      {/* Animated Background Gradient */}
      <div className="gradient-bg"></div>

      <div className="container">
        <div className="home-grid">
          {/* Left - Text Content */}
          <motion.div
            className="home-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="availability-badge"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="badge-dot"></span>
              Available for opportunities
            </motion.div>

            <motion.p
              className="greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              className="name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Sanjeev <span className="gradient-text">Kumar</span>
            </motion.h1>

            <motion.div
              className="title-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="title">Full-Stack Developer</h2>
              <div className="typewriter-wrapper">
                <TypewriterEffect />
              </div>
            </motion.div>

            <motion.p
              className="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I build high-performance, accessible digital experiences with clean, modern code.  
              Currently focused on scalable full-stack applications using today's best tools.
            </motion.p>

            <motion.div
              className="stats-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </motion.div>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <FiArrowRight />
              </button>
              <a
                href={resumePDF}
                download="Sanjeev_Kumar_Resume.pdf"
                className="btn btn-secondary"
              >
                <FiDownload />
                <span>Download CV</span>
              </a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span className="social-label">Connect with me:</span>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    className="social-icon"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="profile-section"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.6 }}
          >
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img
                  src={profileImage}
                  alt="Sanjeev Kumar - Full Stack Developer"
                  className="profile-image"
                />
                <div className="profile-glow"></div>
                <div className="profile-tech">
                  <div className="tech-badge react">⚛️</div>
                  <div className="tech-badge node">⬢</div>
                  <div className="tech-badge dotnet">🔷</div>
                  <div className="tech-badge aws">☁️</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollToSection('about')}
      >
        <FiChevronDown className="scroll-icon" />
      </motion.div>
    </section>
  );
};

export default Home;