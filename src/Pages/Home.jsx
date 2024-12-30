import React from "react";
import "./Home.css";
import Logo from "../assets/logo.jpeg";

const Home = () => {
  return (
    <div className="home-component" id="home-section">
     

      <div id="content">
        <h1>Hello, My Name is Sanjeev</h1>
        <h3 >And , I'm a Full Stack Developer</h3>
        <p>
          I specialize in building and maintaining robust web applications that
          offer seamless user experiences. From crafting beautiful, responsive
          front-end designs to developing powerful back-end systems, I work
          across the entire tech stack.
        </p>
        <p>
          With a strong foundation in both front-end and back-end technologies,
          I’m passionate about turning complex challenges into elegant
          solutions. Whether it's creating dynamic websites, interactive user
          interfaces, or efficient server-side applications, I love transforming
          ideas into fully functional products.
        </p>
        <p>
          I enjoy continuous learning and staying up-to-date with the latest
          technologies in the web development ecosystem. Let’s collaborate and
          bring your vision to life!
        </p>
      </div>
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
