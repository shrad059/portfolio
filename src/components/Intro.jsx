import "../styles/Intro.scss";
import { useEffect, useRef } from "react";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <div class="wrapper">
            <div className="intro-title">
              <div class="intro-name">
                {" "}
                Hi <span>Shraddha</span> here.{" "}
              </div>
            </div>
            <div className="intro-content">
              I'm an (incoming) software engineer based in Halifax. I am highly
              interested in various areas of computer science, including
              full-stack development, artificial intelligence, and
              human-computer interactions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
