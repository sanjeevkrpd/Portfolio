import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';
import './About.css';

const About = () => {
  const skills = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'Building responsive, performant interfaces with modern JavaScript frameworks.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: '#3b82f6'
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Designing robust APIs and server logic with focus on scalability & security.',
      tech: ['ASP.NET Core', 'Node.js', 'Express', 'C#'],
      color: '#10b981'
    },
    {
      icon: <FiDatabase />,
      title: 'Database & Data',
      description: 'Efficient data modeling, querying and optimization across SQL/NoSQL.',
      tech: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis'],
      color: '#8b5cf6'
    },
    {
      icon: <FiCloud />,
      title: 'DevOps & Cloud',
      description: 'Deployment, CI/CD pipelines, infrastructure as code and cloud services.',
      tech: ['AWS', 'Docker', 'Jenkins', 'Nginx'],
      color: '#f97316'
    },
  ];

  const timeline = [
    {
      year: 'Dec 2024 – Present',
      title: 'Assistant Manager | Sr. Software Developer',
      company: 'Maharashtra Agro Industries Development Corporation Ltd.',
      description: 'Leading development of full agri-commerce platform (ASP.NET Core + Next.js).'
    },
    {
      year: 'Apr 2024 – Nov 2024',
      title: 'Software Developer',
      company: 'Design Accent',
      description: 'Developed interactive festival template generator (AngularJS + ASP.NET MVC).'
    },
    {
      year: '2020 – 2024',
      title: 'Bachelor of Computer Applications',
      company: 'H.D Jain College',
      description: 'Focused on core software development concepts and programming.'
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            My background, skills and what drives me
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left – Story / Intro */}
          <motion.div
            className="about-intro glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="about-title">My Journey</h3>

            <p className="about-text">
              I'm Sanjeev Kumar, a Full-Stack Developer based in Mumbai, India.  
              My passion for coding started during college — turning ideas into working software quickly became addictive.
            </p>

            <p className="about-text">
              Today I specialize in building scalable, performant web applications — from pixel-perfect UIs to reliable backend systems.  
              I care deeply about clean code, accessibility, performance, and delivering real business value.
            </p>

            <p className="about-text">
              Outside of work I enjoy learning new tools, contributing to open-source when time allows, playing chess, and exploring Mumbai's food scene.
            </p>

            <div className="personal-info">
              <div className="info-row">
                <span className="info-label">Location</span>
                <span className="info-value">Mumbai, Maharashtra, India</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email</span>
                <a href="mailto:sanjeevkrpd11@gmail.com" className="info-value link">
                  sanjeevkrpd11@gmail.com
                </a>
              </div>
              <div className="info-row">
                <span className="info-label">Status</span>
                <span className="info-value available">Open to new opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right – Skills Cards */}
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                className="skill-card glass hover-lift"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="skill-icon-wrapper" style={{ background: `${skill.color}15` }}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-tags">
                  {skill.tech.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          className="timeline-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="timeline-title">Timeline</h3>

          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-job">{item.title}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;