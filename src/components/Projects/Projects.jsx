import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiDotnet, SiMongodb, SiPostgresql } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Agri-Commerce Platform',
      description: 'Full-stack agricultural marketplace with real-time inventory management, payment processing, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce platform for agricultural products featuring user authentication, product catalog, shopping cart, payment integration with Razorpay, and real-time order tracking.',
      tech: ['ASP.NET Core', 'Next.js', 'SQL Server', 'Razorpay', 'AWS', 'Docker'],
      github: 'https://github.com/Sanjeevkrpd/agri-platform',
      live: 'https://agri-platform.demo',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop'
    },
    {
      title: 'Festival Template Generator',
      description: 'Web application for creating and customizing festival greeting templates with preview and download functionality.',
      longDescription: 'Interactive template generator allowing users to customize festival cards with names, messages, and designs. Features include real-time preview, multiple format downloads, and template management.',
      tech: ['AngularJS', 'ASP.NET MVC', 'JavaScript', 'HTML5/CSS3', 'SQL Server'],
      github: 'https://github.com/Sanjeevkrpd/template-generator',
      live: 'https://templates.demo',
      featured: false,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website with smooth animations, dark mode, and contact form integration.',
      longDescription: 'A personal portfolio website showcasing projects, skills, and experience. Features include responsive design, smooth animations with Framer Motion, contact form with EmailJS, and optimized performance.',
      tech: ['React', 'Framer Motion', 'GSAP', 'EmailJS', 'CSS3'],
      github: 'https://github.com/Sanjeevkrpd/portfolio',
      live: 'https://sanjeevkumar.dev',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      longDescription: 'A comprehensive task management system featuring user authentication, project boards, task assignment, real-time notifications, file attachments, and progress analytics.',
      tech: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'Redis'],
      github: 'https://github.com/Sanjeevkrpd/task-manager',
      live: 'https://taskmanager.demo',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
    },
  ];

  const techIcons = {
    'React': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <FaNodeJs />,
    'ASP.NET Core': <SiDotnet />,
    'MongoDB': <SiMongodb />,
    'SQL Server': <SiPostgresql />,
    'AWS': <FaAws />,
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''} glass-effect hover-lift`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <FiFolder className="project-folder" />
                  <div className="project-links-small">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-long-description">{project.longDescription}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {techIcons[tech] && <span className="tech-icon">{techIcons[tech]}</span>}
                      {tech}
                    </span>
                  ))}
                </div>

                {project.featured && (
                  <div className="featured-badge">
                    <span className="badge-dot"></span>
                    Featured Project
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="github-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="github-title">Open Source Contributions</h3>
          <p className="github-description">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <a
            href="https://github.com/Sanjeevkrpd"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FiGithub />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;