import React from "react";
import Toolsandframework from "./ToolsAndFramework";
import Programmingskills from "./ProgrammingSkills";
import "./CssFiles/skills.css"
import { useSelector } from "react-redux";

const Skills=()=>{
    const { mySkills } = useSelector(state => state.portfolio.data);
    return (
      <section className="skills section"  id="skills">
        <h2 className="section__title">
          My <span style={{color:"orange"}}>Skills.</span>
        </h2>
        <span className="section__subtitle">My Technical Skills</span>

        <div className="skills__container nav__container grid">
            <Programmingskills data={mySkills.programmingSkills}/>
            <Toolsandframework data={mySkills.toolsAndFrameworks}/>
        </div>
      </section>
    );
}

export default Skills;