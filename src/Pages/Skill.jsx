import React from 'react';
import { motion } from 'framer-motion';
import './Skill.css';
import { Progress } from 'antd';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from 'react-icons/fa';


import { FaJava } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMongodb , SiMysql , SiCplusplus} from "react-icons/si";

const Skill = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 80 },
        { name: "React", icon: <FaReact />, level: 85 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 75 },
        { name: "ASP.NET", icon: <AiOutlineDotNet/>, level: 70 },
        { name: "C#", icon: <TbBrandCSharp />, level: 75 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 70 },
        { name: "MySQL", icon: <SiMysql />, level: 75 },
        { name: "SQL Server", icon: <FaDatabase />, level: 70 }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus />, level: 75 },
        { name: "Java", icon: <FaJava />, level: 70 },
        { name: "Python", icon: <FaJava />, level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skill-section">
      <div className="section-header">
        <h1 className="section-title">My <span>Skills</span></h1>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <motion.div 
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="category-title">{category.category}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex}
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <Progress 
                      percent={skill.level} 
                      strokeColor="#64ffda" 
                      showInfo={false} 
                      strokeWidth={5}
                    />
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;