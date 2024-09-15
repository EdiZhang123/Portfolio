// pages/about.js

import React from "react";
import "./about.css";
import homeimage from "../assets/images/headshot.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="subheading-container">
        <div className="subheading-box"></div>
        <div className="subheading-text">
          <h1>Edi Zhang</h1>
        </div>
        <img src={homeimage} alt="Edi Zhang" className="subheading-image" />
      </div>
      <div className="body-container">
        <div className="body-text">
          <p>
            <strong>Hi, I'm Edi,</strong> an undergraduate student at UCLA
            studying applied mathematics and data science engineering. I am a
            researcher at the Cleveland Clinic Lerner Research Institute, where
            I am working on Bone Shape Statistical Modeling in the Advanced Lab
            of Musculoskeletal Imaging. My interests include research, AI/ML,
            and tech consulting.
          </p>
          <p>
            At school, I am part of UCLA Club Swimming, where I competed at
            Nationals earlier this year. I am also involved in multiple clubs on
            campus, from consulting to data analytics clubs.
          </p>
          <p font-size="50px">
            Feel free to contact me at edizhang05@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
