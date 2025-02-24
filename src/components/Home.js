import  github  from "../assets/img/github.png";
import email from "../assets/img/email.png";
import linkedin  from "../assets/img/linkedin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { EarthCanvas } from "./canvas";
import React, { useEffect, useState } from 'react';

const Home = () => {
  useEffect(() => {
    // Code to create and animate the tree
    const createTree = function () {
      "use strict";
      const draw = (function () {
        const c = document.getElementById("tree").getContext("2d");
        const canvasWidth = 500;
        const canvasHeight = 600;
        const extent = 3.5; // arbitrary x scale
        const nGen = 4;

        return function (multi, r, theta) {
          const xScale = (function () {
            const xRange = extent;
            const width = canvasWidth;
            const c = width / 2;
            const m = width / xRange;

            return function (val) {
              return Math.round(m * val + c);
            };
          })();

          const yScale = (function () {
            const height = canvasHeight;
            const width = canvasWidth;
            const aspect = width / height;
            const yRange = extent / aspect;
            const m = -height / yRange;
            const c = -(m * extent);

            return function (val) {
              return Math.round(m * val + c);
            };
          })();

          const branchAngles = [];

          (function () {
            const branchSep = (2 * theta) / (multi - 1);
            for (let i = 0; i < multi; i++) {
              branchAngles.push(-theta + i * branchSep);
            }
          })();

          c.clearRect(0, 0, canvasWidth, canvasHeight);
          c.beginPath();
          c.strokeStyle = "#874356"; //D8E9A8
          c.lineWidth = 7;
          const xInit = 0;
          const yInit = 1;
          const rotInit = 0;

          let thisGen = [{ xEnd: xInit, yEnd: yInit, rot: rotInit }];
          c.moveTo(xScale(0), yScale(0));
          c.lineTo(xScale(xInit), yScale(yInit));
          let changedCol = false;

          for (let i = 0; i < nGen; i++) {
            const lastGen = thisGen;
            const nLastGen = lastGen.length;
            thisGen = [];
            thisGen.length = multi * nLastGen;

            const notLastGen = i < nGen - 1;

            const len = Math.pow(r, i + 1);

            if (!changedCol && i > 2) {
              changedCol = true;
              c.stroke();
              c.beginPath();
              c.strokeStyle = "#F6E7D8"; // "F2F7A1";D864A9
            }

            for (let j = 0; j < nLastGen; j++) {
              const parent = lastGen[j];
              const xStart = parent.xEnd;
              const yStart = parent.yEnd;
              const rotParent = parent.rot;

              for (let k = 0; k < multi; k++) {
                const rot = rotParent + branchAngles[k];
                const xEnd = xStart + len * Math.sin(rot);
                const yEnd = yStart + len * Math.cos(rot);

                c.moveTo(xScale(xStart), yScale(yStart));
                c.lineTo(xScale(xEnd), yScale(yEnd));

                if (notLastGen) {
                  thisGen[j * multi + k] = {
                    xEnd: xEnd,
                    yEnd: yEnd,
                    rot: rot,
                  };
                }
              }
            }
          }

          c.stroke();
        };
      })();

      let multiplicity;
      let ratio;

      // set multiplicity and ratio
      (function () {
        const setMultiplicity = function () {
          multiplicity = parseInt(4, 10);
        };
        setMultiplicity();

        const setRatio = function () {
          ratio = parseFloat(0.65);
        };
        setRatio();
      })();

      let animationStartTime;
      let requestId;

      const startAnimation = function () {
        animationStartTime = window.performance.now();
        requestId = window.requestAnimationFrame(animate);
      };

      const animate = function animate(time) {
        const timeDifference = time - animationStartTime;
        const angleDeg = timeDifference / 25;
        
        if (angleDeg >= 320) {
          stopAnimation();
          return;
        }

        const angle = angleDeg * (Math.PI / 180);
        draw(multiplicity, ratio, angle);
        
        if (angleDeg < 360) {
          requestId = window.requestAnimationFrame(animate);
        }
      };

      const stopAnimation = function () {
        if (requestId) {
          window.cancelAnimationFrame(requestId);
        }
        requestId = undefined;
      };

      return {
        startAnimation: function () {
          startAnimation();
          return this;
        },
        stopAnimation: function () {
          stopAnimation();
          return this;
        },
      };
    };

    const tree = createTree().startAnimation();
    
    return () => {
      tree.stopAnimation();
    };
  }, []);
const hobbies = [
  "grinding leetcode",
  "brewing my chai tea",
  "cafe hopping around Halifax",
  "reading poetry",
  "perfecting my spotify playlist",
];
  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [tooltipShown, setTooltipShown] = useState(false);
  function useWordCycle(words) {
    const [currentWord, setCurrentWord] = useState(words[0]);
  
    const cycleWord = () => {
      setCurrentWord(prev => {
        let newWord;
        do {
          newWord = words[Math.floor(Math.random() * words.length)];
        } while (newWord === prev); // Ensures a different word is chosen
        return newWord;
      });
    };
  
    return [currentWord, cycleWord];
  }
  
  
  
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="intro">
        {/* <div className='xl:flex-1 xl:h-auto' >
          <EarthCanvas />
        </div> */}
          <div className="tree-container">
            <div id="tree-multi"></div>
            <div id="tree-ratio"></div>
            <canvas id="tree" width="500" height="600"></canvas>
          </div>
          <h2 className="typing-demo">
            Hi, <span className="typing-name">Shraddha </span> here!
          </h2>
          <span className='intro-flex' >
                  <p style={{margin:"auto"}}>welcome to my little node of the internet!</p>I'm a student and aspiring software engineer based in Canada &#127809;. 
        I enjoy building fun projects to bring joy to the web, collaborating with friends, and working on hard problems, with the goal of building something impactful!
        <div> When I am not busy coding something,  I'm probably
       {" "}<a
  className="clickable"
  id="hobbies"
  onClick={handleHobbyClick}
  onMouseEnter={() => setTooltipShown(true)}
  onMouseLeave={() => setTooltipShown(false)}
>{currentHobby}</a>
</div>
        


          </span>
            <ul className='social-icons'>
              <li>
                <a href="https://www.linkedin.com/in/shraddhasinggh/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />          </a>
              </li>
              <li>
                <a href="https://github.com/shrad059" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" />          </a>
              </li>
              <li>
                <a href="mailto:sh913738@dal.ca" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />          </a>
              </li>
            </ul>


 
        {/* </span> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
