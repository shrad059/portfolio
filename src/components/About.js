import React from 'react';
import profileImage from '../assets/img/picture.png';
// import EarthCanvas from "./canvas/Earth";
import { EarthCanvas } from "./canvas";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="title-container">
          <h2 className="section-title padd-15">About Me</h2>
          <svg 
            viewBox="0 0 300 12" 
            className="wiggle-line"
            style={{ 
              width: '360px', 
              height: '12px',
              color: '#9f5366'
            }}
          >
            <path
              d="M 0 6 Q 5 0, 10 6 T 20 6 T 30 6 T 40 6 T 50 6 T 60 6 T 70 6 T 80 6 T 90 6 T 100 6 T 110 6 T 120 6 T 130 6 T 140 6 T 150 6 T 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="row">

        {/* <div className='xl:flex-1 xl:h-auto padd-15' >
          <EarthCanvas />
        </div> */}
          <div className="about-img padd-15">
            <img className="profileImg" src={profileImage} alt="Profile" />
          </div>
          <div className="about-content padd-15">
            <div className="rounded">
              <div className="row about-row">
                <div className="about-text">
                  <p>
                  Hello! I am Shraddha (shra-duh)!!


Originally from Illinois, I am currently in my senior year pursuing Bachelors in Computer Science & Physics at Dalhousie University, Canada!

I am passionate about both physics and software engineering, and have been trying to develop my knowledge and skills in both fields. I am particularly interested in machine learning, data analysis, computer simulations, and software development.

Currently, I am working as a research assistant studying properties of battery and its material properties under Prof.Penghao Xiao. Over the past two summers, I've completed internships at two startups, where I had the opportunity to work as a full-stack software developer intern.



                  </p>
                  <div>
                    <a href="">
                    {/* <a href={require("../assets/Shraddha_Singh_Resume.pdf")} id="contactBtn" className="btn btn-default" target="_blank" rel="noopener noreferrer">DOWNLOAD RESUME */}
                    </a>
                  </div>
                </div>
                <div className="about-text padd-15">
                  <section className=" skill-section">
                    <h2>Skills</h2>
                    <div className="skill-container">
                      <div className="skill">Python</div>
                      <div className="skill">JavaScript</div>
                      <div className="skill">Java</div>
                      <div className="skill">C++</div>
                      <div className="skill">C</div>
                      <div className="skill">GoLang</div>
                      <div className="skill">Kotlin</div>
                      <div className="skill">GraphQL</div>
                      <div className="skill">Flask</div>
                      <div className="skill">TypeScript</div>
                      <div className="skill">Swift</div>
                      <div className="skill">React</div>
                      <div className="skill">HTML/CSS</div>
                      <div className="skill">Node.js</div>
                      <div className="skill">Express</div>
                      <div className="skill">SQL</div>
                    <div className="skill">PostgreSQL</div>
                      <div className="skill">MongoDB</div>
                      <div className="skill">SpringBoot</div>
                      <div className="skill">AWS</div>
                      <div className="skill">Docker</div>
                      <div className="skill">Kubernetes</div>

                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
