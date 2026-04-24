import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws, FaJava, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiDotnet, SiMongodb, SiPostgresql, SiExpress, SiRedux, SiAngular, SiJenkins, SiDocker, SiRedis } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Mahaaqromart E-Commerce Platform',
      description: 'Production-grade e-commerce platform serving thousands of daily active users with secure payment processing and real-time inventory management.',
      longDescription: 'Architect and developed scalable ASP.NET Core Web API backend services supporting production-level e-commerce operations. Implemented JWT-based authentication and Role-Based Access Control (RBAC) for secure API endpoints. Built responsive admin dashboard using React and Redux enabling real-time product, order, and inventory management. Integrated Razorpay payment gateway with webhook support for seamless transactions.',
      tech: ['ASP.NET Core', 'React', 'SQL Server', 'Next.js', 'Redux', 'Jenkins', 'AWS EC2', 'Nginx', 'PM2'],
      github: 'https://github.com/Sanjeevkrpd/mahaaqromart',
      live: '#',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop'
    },
    {
      title: 'Visitor Management System',
      description: 'Role-based visitor management system with structured approval workflows and real-time push notifications.',
      longDescription: 'Built a comprehensive visitor management system supporting Admins, Security Officers, and Employees with structured approval workflows. Implemented real-time push notifications for approval/rejection updates and deployed as a Progressive Web App (PWA) on AWS EC2 with Nginx and PM2.',
      tech: ['ASP.NET Core', 'SQL Server', 'PWA', 'AWS EC2', 'Nginx', 'PM2', 'Web Push Notifications'],
      github: 'https://github.com/Sanjeevkrpd/visitor-management',
      live: '#',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
    },
    {
      title: 'Theme Template Generator',
      description: 'Dynamic festival greeting template generator with customization, preview, and download functionality.',
      longDescription: 'Developed a dynamic festival greeting template generator enabling users to customize, preview, and download designs. Designed REST APIs using ASP.NET MVC for CRUD operations and built interactive frontend with AngularJS, HTML5, CSS3. Created normalized SQL Server database schemas for efficient template storage and retrieval.',
      tech: ['ASP.NET MVC', 'AngularJS', 'JavaScript', 'HTML5/CSS3', 'SQL Server'],
      github: 'https://github.com/Sanjeevkrpd/template-generator',
      live: '#',
      featured: false,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop'
    },
    {
      title: 'Notes Discussion Platform',
      description: 'Full-stack platform for students to upload, download, and discuss notes with AWS S3 integration.',
      longDescription: 'Built a full-stack platform supporting 100+ concurrent users for students to upload, download, and discuss notes. Features include JWT authentication, AWS S3 file uploads, and automated CI/CD pipeline.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT', 'AWS S3', 'CI/CD'],
      github: 'https://github.com/Sanjeevkrpd/notes-discussion',
      live: '#',
      featured: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop'
    },
    {
      title: 'Wanderlust (Airbnb Clone)',
      description: 'Property rental platform with listing management, booking system, and interactive maps integration.',
      longDescription: 'Comprehensive property rental platform with listing and booking management. Features include Cloudinary image uploads, Mapbox maps integration, and Passport.js authentication following MVC architecture.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary', 'Mapbox', 'Passport.js'],
      github: 'https://github.com/Sanjeevkrpd/wanderlust',
      live: '#',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop'
    }
  ];

  const techIcons = {
    'React': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <FaNodeJs />,
    'Express.js': <SiExpress />,
    'ASP.NET Core': <SiDotnet />,
    'ASP.NET MVC': <SiDotnet />,
    'MongoDB': <SiMongodb />,
    'SQL Server': <SiPostgresql />,
    'AWS EC2': <FaAws />,
    'AWS S3': <FaAws />,
    'Jenkins': <SiJenkins />,
    'Docker': <SiDocker />,
    'Redis': <SiRedis />,
    'Redux': <SiRedux />,
    'AngularJS': <SiAngular />,
    'PWA': <FaReact />,
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
            href="https://github.com/sanjeevkprd"
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