import React from 'react';
import profileImage from '../assets/img/profile.jpg';
// import EarthCanvas from "./canvas/Earth";
import { EarthCanvas } from "./canvas";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title padd-15">About Me</h2>
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
                    Hello! I am Shraddha Singh, a third-year undergraduate student at <b>Dalhousie University</b> double majoring in Computer Science and Physics. I am passionate about both physics and software engineering, and have been trying to develop my knowledge and skills in both fields. I am particularly interested in machine learning, data analysis, computer simulations, and app development. Currently, I am working as a research assistant studying properties of battery and its material properties at my university. 
                    Alongside this, I am working on my soon-to-launch startup focused on building housing and renting solutions to Haligonians (Stay-tuned)!
                  </p>
                  <div>
                    <a href="">
                    {/* <a href={require("../assets/Shraddha_Singh_Resume.pdf")} id="contactBtn" className="btn btn-default" target="_blank" rel="noopener noreferrer">DOWNLOAD RESUME */}
                    </a>
                  </div>
                </div>
                <div className="about-text padd-15">
                  <section className="skill-section">
                    <h2>Skills</h2>
                    <div className="skill-container">
                      <div className="skill">Python</div>
                      <div className="skill">JavaScript</div>
                      <div className="skill">Java</div>
                      <div className="skill">pandas</div>
                      <div className="skill">NumPy</div>
                      <div className="skill">Keras</div>
                      <div className="skill">Scikit-learn</div>
                      <div className="skill">React</div>
                      <div className="skill">HTML/CSS</div>
                      <div className="skill">Node.js</div>
                      <div className="skill">Express</div>
                      <div className="skill">MongoDB</div>
                      <div className="skill">SQL</div>
                      <div className="skill">Git</div>
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
