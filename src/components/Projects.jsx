import "../styles/Projects.scss";
import { useEffect, useRef, useState } from "react";
import { featuredPortfolio } from "../data";
export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData]= useState([]);
  useEffect(()=>{

    switch(selected){
      case "featured":
          setData(featuredPortfolio);
          break
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
    <div className="section-header ">
      <span className="section-title">/ projects</span>
    </div>
      <div className="wrapper">
          {data.map((d) =>(
            <div className="item">
          <img src={d.img} alt="blacksun"/>
            <h3>{d.title}</h3>
           </div>
          
          ))}    
      </div>
        
    </div>
  );
}