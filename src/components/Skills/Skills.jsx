import React from 'react';
import { motion } from 'framer-motion';

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaPython,
  FaDatabase,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiJenkins
} from 'react-icons/si';

import './Skills.css';

import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
        { name: 'Redux', icon: <SiRedux />, level: 75, color: '#764ABC' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
        { name: 'C#', level: 85, color: '#239120' },,
        { name: 'Python', icon: <FaPython />, level: 70, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, level: 75, color: '#007396' },
        { name: 'GraphQL', icon: <SiGraphql />, level: 65, color: '#E10098' },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'SQL Server', icon: <FaDatabase />, level: 85, color: '#CC2927' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70, color: '#4169E1' },
        { name: 'MySQL', icon: <SiMysql />, level: 75, color: '#4479A1' },
        { name: 'Redis', level: 65, color: '#DC382D' },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, level: 75, color: '#2496ED' },
        { name: 'AWS', icon: <FaAws />, level: 70, color: '#FF9900' },
        { name: 'Jenkins', icon: <SiJenkins />, level: 65, color: '#D24939' },
        { name: 'Nginx', level: 70, color: '#009639' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="category-card glass-effect hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon-wrapper">
                        {skill.icon ? (
                          <div className="skill-icon">{skill.icon}</div>
                        ) : (
                          <div className="skill-text-icon">{skill.name.charAt(0)}</div>
                        )}
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-progress-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="tools-title">Frequently Used Tools</h3>
          <div className="tools-grid">
            {[
              'VS Code',
              'Git',
              'GitHub',
              'Docker',
              'Postman',
              'Figma',
              'Jira',
              'Confluence',
              'Slack',
              'Chrome DevTools',
              'npm/yarn',
              'ESLint',
              'Prettier',
            ].map((tool, index) => (
              <motion.span
                key={tool}
                className="tool-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;