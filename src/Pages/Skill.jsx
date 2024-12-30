import React, { useState } from 'react';
import { Steps, Progress } from 'antd';
import './Skill.css'; // Custom styles
import C from '../assets/c.png';
import Cpp from "../assets/cpp.png"
import Cs from "../assets/Cs.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import Mysql from "../assets/mysql.png"
import Java from "../assets/java.png"
import Dsa from "../assets/dsa.png"
import js from "../assets/js.png"
import ReactImg from "../assets/react.png"
import Nodejs from "../assets/Nodejs.png"
import mongodb from "../assets/mongodb.png"
import angular from "../assets/angular.webp"
import aspnet from "../assets/asp.net.png"
import linux from "../assets/linux.png"



const Skill = () => {
  const [currentStep, setCurrentStep] = useState(4); // Set the last step as the current step for full progress

  return (
    <div className="skills-section">
      <h1 className="skills-heading">My Skills Journey</h1>

      <Steps
        direction="vertical"
        current={currentStep} 
        className="custom-steps"
        items={[
          {
            title: (
              <div className='items-div'>
               <h3> 1 Year in College</h3>
                <div style={{ width : "600px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                  <Progress percent={60} size="small" strokeColor="#0ef" trailColor="#fff" />
                  <img src={C} alt="image" />
                </div>

                <div style={{ width : "750px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : "5%" }}>
                  <Progress percent={75} size="small" strokeColor="#0ef" trailColor="#fff" />
                  <img src={html} alt="image" />
                </div>
                <div style={{ width : "200px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                  <Progress percent={20} size="small" strokeColor="#0ef" trailColor="#fff" />
                  <img src={css} alt="image" />
                </div>
               

                <div style={{ width : "300px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : "5%" }}>
                  <Progress percent={30} size="small" strokeColor="#0ef" trailColor="#fff" />
                  <img src={Cpp} alt="image" />
                </div>

                <div style={{ width : "500px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : "5%" }}>
                  <Progress percent={70} size="small" strokeColor="#0ef" trailColor="#fff" />
                  <img src={linux} alt="image" style={{borderRadius : "10px" }} />
                </div>
              </div>
            ),
          
          },
          {
            title: (
                <div className='items-div'>
                 <h3> 2 Year in College</h3>
                  <div style={{ width : "600px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                    <Progress percent={60} size="small" strokeColor="#0ef" trailColor="#fff" />
                    <img src={Cs} alt="image" />
                  </div>
                  <div style={{ width : "300px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : "5%" }}>
                    <Progress percent={30} size="small" strokeColor="#0ef" trailColor="#fff" />
                    <img src={Mysql} style={{background : "white" , borderRadius : "10px"}} alt="image" />
                  </div>
                  <div style={{ width : "750px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : "5%" }}>
                    <Progress percent={75} size="small" strokeColor="#0ef" trailColor="#fff" />
                    <img src={Java} alt="image" />
                  </div>
                  <div style={{color : "#0ef" , marginBottom : "20px" , fontSize : "18px" }}>JAVA + DSA</div>
                  <div style={{ width : "750px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                    <Progress percent={70} size="small" strokeColor="#0ef" trailColor="#fff" />
                    <img src={Dsa} style={{background : "white" , borderRadius : "10px"}} alt="image" /> 
                  </div>
                 
                  <div style={{ width : "450px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom : "5%" }}>
                    <Progress percent={45} size="small" strokeColor="#0ef" trailColor="#fff" />
                    <img src={css} alt="image" />
                  </div>
                  
                </div>
              ),
          },
          {
            title: (
                <div className='items-div'>
                <h3> 3 Year in College</h3>
                 <div style={{ width : "800px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                   <Progress percent={80} size="small" strokeColor="#0ef" trailColor="#fff" />
                   <img src={html} alt="image" />  <img src={css} alt="image" />  <img src={js} style={{background : "white" , borderRadius : "10px"}} alt="image" />
                 </div>
                 <div style={{color : "#0ef" , marginBottom : "20px" , fontSize : "18px" }} >MongoDB, ExpressJS, NodeJS, ReactJS from Apna College</div>
                 <div style={{ width : "800px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                   <Progress percent={78} size="small" strokeColor="#0ef" trailColor="#fff" />
                   <img src={Nodejs} alt="image" style={{background : "white", height : "40px" , borderRadius : "5px"}} />  <img src={ReactImg} alt="image" />  <img src={mongodb} style={{background : "white" , borderRadius : "10px"}} alt="image" />
                 </div>
                
                 <div style={{color : "#0ef" , marginBottom : "20px" , fontSize : "18px" }} >After that I have done 4 - 5 Full Stack Projects</div>

                 <div style={{ width : "800px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' , marginBottom : "5%" }}>
                 <a href="" style={{color : "#fff" }}>WanderLust :- Clone of AirBnb </a>
                 </div>

               </div>
            ),

          },
          {
            title: (
              <div>
                Software Developer at Design Accent
              </div>
            ),
            description:
              'At Design Accent, I worked on ASP.NET, learned Angular, and SQL Server',
          },
          {
            title: (
              <div>
                Software Developer at MAIDC
              </div>
            ),
            description:
              'Hired to build an e-commerce web app and Android application',
          },
        ]}
      />
    </div>
  );
};

export default Skill;
