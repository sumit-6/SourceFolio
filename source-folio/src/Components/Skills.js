import React from "react";
import Toolsandframework from "./ToolsAndFramework";
import Programmingskills from "./ProgrammingSkills";
import "./skills.css"

const Skills=()=>{
    return (
      <section className="skills section">
        <h2 className="section__title">
          My <span style={{color:"orange"}}>Skills.</span>
        </h2>
        <span className="section__subtitle">My Technical Skills</span>

        <div className="skills__container container grid">
            <Programmingskills/>
            <Toolsandframework/>
        </div>
      </section>
    );
}

export default Skills;