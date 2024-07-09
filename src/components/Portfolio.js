import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants"; // Ensure this path is correct
import { SectionWrapper } from "../hoc"; // Ensure this path is correct
import { textVariant } from "../utils/motion"; // Ensure this path is correct
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
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
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="project-link"
            >
              <FontAwesomeIcon icon={faGithub} className="git-icon" />
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
            <h2 className="text-white text-3xl font-semibold mb-6">Projects</h2>
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
