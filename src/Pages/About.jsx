import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  const aboutPoints = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Specializing in React, Next.js, and modern JavaScript frameworks to create responsive and interactive user interfaces."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Experienced in building robust APIs and server-side applications using ASP.NET Core and Node.js."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Proficient in both SQL (MySQL, SQL Server) and NoSQL (MongoDB) database systems."
    },
    {
      icon: <FaMobile />,
      title: "Full Stack Solutions",
      description: "Capable of delivering end-to-end solutions from concept to deployment and maintenance."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h1 className="section-title">About <span>Me</span></h1>
        <p className="section-subtitle">Get to know me better</p>
      </div>
      
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">Who am I?</h2>
          <p className="about-text">
            I'm Sanjeev Kumar, a passionate Full Stack Developer based in Mumbai, India. 
            With a strong foundation in computer science and hands-on experience in building 
            web applications, I specialize in creating efficient, scalable, and user-friendly 
            solutions.
          </p>
          <p className="about-text">
            My journey in software development began during my college years, and since then 
            I've worked on various projects ranging from e-commerce platforms to template 
            generators. I'm particularly interested in solving complex problems and 
            implementing clean, maintainable code.
          </p>
          <p className="about-text">
            When I'm not coding, you can find me playing chess, exploring new technologies, 
            or contributing to open-source projects. I believe in continuous learning and 
            staying updated with the latest industry trends.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-skills"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">What I Do</h2>
          <div className="skills-grid">
            {aboutPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-icon">{point.icon}</div>
                <h3 className="skill-title">{point.title}</h3>
                <p className="skill-description">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;