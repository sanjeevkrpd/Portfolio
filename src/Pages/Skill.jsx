import React from 'react';
import './Skill.css'; // Custom styles
import C from '../assets/c.png';
import Cpp from "../assets/cpp.png";
import Cs from "../assets/Cs.png";
import html from "../assets/html.png";
import css from "../assets/css1.png";
import Mysql from "../assets/mysql.png";
import Java from "../assets/java.png";
import Dsa from "../assets/dsa.png";
import js from "../assets/js.png";
import ReactImg from "../assets/react.png";
import Nodejs from "../assets/Nodejs.png";
import mongodb from "../assets/mongodb.png";
import angular from "../assets/angular.webp";
import aspnet from "../assets/asp.net.png";
import linux from "../assets/linux.png";
import { Progress } from 'antd';

const Skill = () => {
  return (
    <div className="skills-section">
      <h1 style={{ textAlign: "center", color: "#0ef", marginBottom : "3%" }}>My Skills</h1>

      <div className='skill'>
        <div className="card">
          <h3 style={{ marginLeft: "20px", color: "#0ef", marginBottom: "20px" }}>Html, Css, Javascript</h3>
          <div className='box'>
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JavaScript" style={{ borderRadius: "10px" }} />
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "20px", color: "#0ef", marginBottom: "20px" }}>MySQL, SQL Server, MongoDB</h3>
          <div className='box'>
            <img src={Mysql} alt="MySQL" />
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "20px", color: "#0ef", marginBottom: "20px" }}>MERN Stack, MEAN Stack, ASP.NET</h3>
          <div className='box'>
            <img src={ReactImg} alt="React" />
            <img src={angular} alt="Angular" style={{ borderRadius: "10px" }} />
            <img src={aspnet} alt="ASP.NET" />
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginLeft: "20px", color: "#0ef", marginBottom: "20px" }}>Coding Languages</h3>
          <div className='box'>
            <img src={C} alt="C" />
            <img src={Cpp} alt="C++" />
            <img src={Cs} alt="C#" />
            <img src={Java} alt="Java" />
            <img src={Dsa} alt="DSA" style={{ backgroundColor: "#fff", borderRadius: "10px" }} />
          </div>
        </div>
      </div>

      {/* <div className='personal-projects'>
        <h3 style={{ textAlign: "center", marginLeft: "20px", color: "#0ef", marginTop: "15%", marginBottom: "5%" }}>My Personal Projects</h3>
        <ul style={{ color: "#0ef", fontSize: "20px" }}>
          <li>Student Management System</li>
          <li>Restaurant Management System</li>
          <li>Library Management System</li>
          <li>WanderLust</li>
          <li>Stock Management System</li>
          <li>Doctor Appointment App</li>
          <li>Notes Discussion App</li>
        </ul>
      </div> */}

      {/* <div className='Industry-projects'>
        <h3 style={{ textAlign: "center", marginLeft: "20px", color: "#0ef", marginTop: "15%", marginBottom: "5%" }}>My Industry Level Projects</h3>
        <ul style={{ color: "#0ef", fontSize: "20px" }}>
          <li>Special Day Template Generator</li>
          <li>Sales Genie</li>
          <li>E-commerce Application</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Skill;
