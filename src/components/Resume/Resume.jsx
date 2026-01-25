import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi';
import resumePDF from '../../assets/sanjeev-resume.pdf';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      title: 'Sr. Software Developer',
      company: 'Maharastra Agro Industries Development Corportation Ltd.',
      period: 'December 2024 - Present',
      location: 'Goregaon East, Mumbai',
      achievements: [
        'Built a scalable agri-commerce platform with ASP.NET Core (backend) and Next.js (frontend), featuring JWT auth, server-side rendering, and Razorpay integration.',
        'Deployed full stack using Jenkins, PM2, and Nginx on AWS EC2; included a React + Redux admin dashboard for real-time management.',
      ],
      technologies: ['ASP.NET Core', 'Next.js', 'React.js', 'SQL Server', 'Jenkins', 'Nginx', 'PM2', 'CI/CD'],
    },
    {
      title: 'Software Developer',
      company: 'Design Accent',
      period: 'April 2024 - November 2024',
      location: 'Goregoan West, Mumbai',
      achievements: [
        'Built a template generator for festival greetings where users select a festival, customize names and wishes, preview designs, and download personalized templates.',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'ASP.NET MVC API', 'Sql Server', 'AngularJs'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor’s degree in Computer Applications',
      institution: 'H.D Jain College',
      period: 'April 2020 - March 2024',
      details: ['Relevant Coursework: OOPs, DBMS, Discrete Mathematics, DSA, OS, Computer Networks, Machine Learning, Advanced Data Structures and Algorithms, Information Retrieval.', 'Percentage: 72.00%'],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'S.KS Inter College',
      period: 'April 2018 - April 2020',
      details: ['Physics, Chemistry, Mathematics', 'Percentage: 82%'],
    },
  ];

  const certifications = [
    { name: 'DevOps', issuer: 'Udemy', year: 'May 2025', link: 'https://www.udemy.com/certificate/UC-62948309-5f59-4f5c-b529-34186bf15343/' },
    { name: 'Full Stack Web Development', issuer: 'Apna College', year: 'March 2024' },
  ];

  return (
    <section id="resume" className="resume-section section">
      <div className="container">
        {/* Header + Download */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Professional experience, education & certifications
          </p>
        </motion.div>

        <motion.div
          className="resume-download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={resumePDF}
            download="Sanjeev_Kumar_Resume.pdf"
            className="download-btn glass hover-lift"
          >
            <FiDownload size={20} />
            <span>Download Full Resume (PDF)</span>
          </a>
        </motion.div>

        {/* Experience */}
        <div className="resume-block">
          <div className="block-header">
            <FiBriefcase className="block-icon" />
            <h3>Professional Experience</h3>
          </div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="experience-item glass hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="exp-header">
                  <h4 className="exp-title">{exp.title}</h4>
                  <span className="exp-period">
                    <FiCalendar /> {exp.period}
                  </span>
                </div>

                <div className="exp-meta">
                  <span className="company">{exp.company}</span>
                  <span className="location">• {exp.location}</span>
                </div>

                <ul className="achievements">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {index < experiences.length - 1 && (
                  <div className="horizontal-divider"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="resume-block">
          <div className="block-header">
            <FiBookOpen className="block-icon" />
            <h3>Education</h3>
          </div>

          <div className="education-list">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="education-item glass hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h4 className="degree">{edu.degree}</h4>
                <div className="edu-meta">
                  <span className="institution">{edu.institution}</span>
                  <span className="period">
                    <FiCalendar /> {edu.period}
                  </span>
                </div>
                <ul className="edu-details">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                {index < education.length - 1 && (
                  <div className="horizontal-divider"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-block">
          <div className="block-header">
            <FiAward className="block-icon" />
            <h3>Certifications</h3>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="cert-item glass hover-lift"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="cert-name">{cert.name}</h4>
                <div className="cert-meta">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="year">{cert.year}</span>
                </div>
                {cert.link && (
                  <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                )}

                {index < certifications.length - 1 && (
                  <div className="horizontal-divider thin"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;