import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';
import { FaDownload, FaFilePdf, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import resumePDF from '../assets/sanjeev_resume.pdf';

export const resumeData = {
  downloadLink: resumePDF,
  fileName: 'Sanjeev_Kumar_Resume.pdf'
};

const Resume = ({id}) => {
  const experiences = [
    {
      title: "Assistant Manager | Sr. Software Developer",
      company: "Maharastra Agro Industries Development Corporation Ltd.",
      period: "Dec 2024 - Present",
      location: "Goregaon East, Mumbai",
      description: [
        "Built a scalable agri-commerce platform with ASP.NET Core (backend) and Next.js (frontend)",
        "Implemented JWT auth, server-side rendering, and Razorpay integration",
        "Deployed full stack using Jenkins, PM2, and Nginx on AWS EC2",
        "Created React + Redux admin dashboard for real-time management"
      ],
      tech: "ASP.NET Core | Next.js | React.js | SQL Server | Razorpay | Jenkins | Nginx | PM2 | CI/CD | eKart"
    },
    {
      title: "Software Developer",
      company: "Design Accent",
      period: "Apr 2024 - Nov 2024",
      location: "Goregaon West, Mumbai",
      description: [
        "Built a template generator for festival greetings",
        "Users can select festivals, customize names/wishes, preview designs, and download templates"
      ],
      tech: "JavaScript | HTML | CSS | ASP.NET MVC API | SQL Server | AngularJS"
    }
  ];

  const education = [
    {
      degree: "Bachelor's degree in Computer Applications",
      institution: "H.D Jain College",
      year: "Apr 2020 - Mar 2024",
      description: [
        "Relevant Coursework: OOPs, DBMS, DSA, OS, Computer Networks, Machine Learning"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "S.KS Inter College",
      year: "Apr 2018 - Apr 2020",
      description: [
        "Physics, Chemistry, Mathematics"
      ]
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["C/C++", "Java", "Python", "JavaScript", "SQL"]
    },
    {
      category: "Technologies & Tools",
      items: ["Git", "GitHub", "Jenkins", "Docker", "PM2", "AWS EC2", "Nginx", "Rest APIs"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js", "ASP.NET Core", "Redux", "Node.js", "Bootstrap", "Tailwind CSS"]
    }
  ];

  return (
    <section id={id} className="resume-section">
      <div className="section-header">
        <h1 className="section-title">My <span>Resume</span></h1>
        <p className="section-subtitle">Professional Journey</p>
      </div>
      
      <div className="resume-container">
        <div className="resume-column">
          <h2 className="resume-column-title">
            <FaBriefcase className="column-icon" /> Experience
          </h2>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="resume-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="resume-item-header">
                <h3>{exp.title}</h3>
                <span className="resume-period">{exp.period}</span>
              </div>
              <h4 className="resume-company">
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a> • {exp.location}
              </h4>
              <ul className="resume-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="resume-tech">
                <strong>Technologies:</strong> {exp.tech}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="resume-column">
          <h2 className="resume-column-title">
            <FaGraduationCap className="column-icon" /> Education
          </h2>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="resume-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="resume-item-header">
                <h3>{edu.degree}</h3>
                <span className="resume-period">{edu.year}</span>
              </div>
              <h4 className="resume-company">{edu.institution}</h4>
              <ul className="resume-description">
                {edu.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <h2 className="resume-column-title skills-title">
            Skills
          </h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{skill.category}</h3>
                <ul className="skill-items">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
 <div className="download-resume">
        <motion.a
          href={resumeData.downloadLink}
          download={resumeData.fileName}
          className="download-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFilePdf /> Download Resume <FaDownload />
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;