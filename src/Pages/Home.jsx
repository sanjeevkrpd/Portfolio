import React from "react";
import "./Home.css";
import Logo from "../assets/logo.jpeg";
import TypewriterEffect from "../Component/TypewriterEffect";
import { CiTwitter , CiInstagram , CiMail} from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

const Home = () => {
  return (
    <div className="home-component" id="home-section">
     

      <div id="content">
        <h1>Hii, Everyone !</h1>
        <TypewriterEffect/>

        <h3>As a passionate Software Engineer, I specialize in building robust and scalable web applications. With expertise in both front-end and back-end technologies, I create seamless, user-friendly experiences while ensuring performance and scalability. I am dedicated to continuous learning and staying up-to-date with the latest industry trends to deliver innovative solutions.</h3>

        <br />
        <br />
        <div className="icons">
          <a href="" >< CiTwitter style={{color : "#0ef"}}/></a>
          <a href="" >< CiInstagram style={{color: "#0ef"}}/></a>
          <a href="" >< SlSocialFacebook style={{color: "#0ef"}}/></a>
          <a href="" >< CiMail style={{color: "#0ef"}}/></a>
        </div>
      </div>
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
