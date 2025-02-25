import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants"; // Ensure this path is correct
import { SectionWrapper } from "../hoc"; // Ensure this path is correct
import { textVariant } from "../utils/motion"; // Ensure this path is correct
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ name, description, tags, image, github_link, source_code_link }) => {
  return (
    <div className="portfolio-item">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="portfolio-item-inner"
      >
        <div>
          <img src={image} alt="project_image" className="project-image" />
          <div className="project-mask">
            <div className="iconLink">
              <div
                onClick={() => window.open(github_link, "_blank")}
                className="github-link"
              >
                <FontAwesomeIcon icon={faGithub} className="git-icon" />
              </div>
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGlobe} className="git-icon" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project-content">
          <p className="project-title">{name}</p>
          <p className="project-description">{description}</p>
        </div>
      </Tilt>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <motion.div variants={textVariant()}>
          <div className="title-container">
            <h2 className="section-title padd-15">Projects</h2>
            <svg 
              viewBox="0 0 170 12" 
              className="wiggle-line"
              style={{ 
                width: '225px', 
                height: '12px',
                color: '#4a3023' // Match your text color
              }}
            >
              <path
                d="M 0 6 Q 5 0, 10 6 T 20 6 T 30 6 T 40 6 T 50 6 T 60 6 T 70 6 T 80 6 T 90 6 T 100 6 T 110 6 T 120 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="4" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
        <div className="portfolio-row">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
