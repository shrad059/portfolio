import "../styles/About.scss";
import { useEffect, useRef, useState } from "react";
export default function About() {

  const skills_list = [
    "Javascript",
    "Python",
    "React.js",
    "Java",
    "Node.js",
    "HTML & CSS"
  ];

  return (
  <div className="about">
    <div className="section-header ">
        <span className="section-title">/ about me</span>
    </div>
      <div className="wrapper">
        <div className="about-content">
          I am currently a second - year student at <b><a href="#">Dalhousie University </a> </b>  double majoring in Computer Science and Physics. I am a very self-driven and motivated person. 
          <div>
          <br/>Here are some technologies I have been working with:
          <ul className="skills-list">
                  {skills_list.map(function (item, i) {
                    return (
                        <li>{item}</li>
                    );
                  })}
                </ul>
          </div>
          </div>
    </div>
  </div>
  );
}