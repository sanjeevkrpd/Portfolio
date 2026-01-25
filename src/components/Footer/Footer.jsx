import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart, FiCoffee } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Sanjeevkrpd', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/sanjeevkrpd', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/sanjeevkrpd', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/sanjeev_kr_prasad', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Back to Top Button */}
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FiArrowUp />
        </motion.button>

        <div className="footer-content">
          {/* Logo & Description */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">SK</div>
            <p className="footer-description">
              Full-stack developer passionate about building exceptional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="links-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="contact-title">Get In Touch</h3>
            <a href="mailto:sanjeevkrpd11@gmail.com" className="footer-email">
              sanjeevkrpd11@gmail.com
            </a>
            <a href="tel:+917633920927" className="footer-phone">
              +91 7633920927
            </a>
            <p className="footer-location">Mumbai, India</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="social-title">Connect</h3>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="copyright">
            © {currentYear} Sanjeev Kumar. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> and <FiCoffee className="coffee-icon" /> 
            by Sanjeev Kumar
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;