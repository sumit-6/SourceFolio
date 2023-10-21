import React from "react";
import Toolsandframework from "./ToolsAndFramework";
import Programmingskills from "./ProgrammingSkills";
import "./skills.css"

const Skills=(props)=>{
    return (
      <section className="skills section"  id="skills">
        <h2 className="section__title">
          My <span style={{color:"orange"}}>Skills.</span>
        </h2>
        <span className="section__subtitle">My Technical Skills</span>

        <div className="skills__container nav__container grid">
            <Programmingskills data={props.data.programmingSkills}/>
            <Toolsandframework data={props.data.toolsAndFrameworks}/>
        </div>
      </section>
    );
}

export default Skills;