import React from "react";
import BioForm from "./BioForm";
import { useState } from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import AboutMe from "./AboutMe";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import AchievementsForm from "./AchievementsForm";
import ContactForm from "./ContactForm";

const Form=(props)=>{
    const [isVisible, setIsVisible] = useState([true, false, false, false, false, false, false, false]);
    const handleNavButtonClick = (e, index) => {
      e.preventDefault();
      let array = Array.apply(null, Array(5)).map(function (y) {return false});
      
      array[index] = true;
      setIsVisible(array);
    }
    return (
      <div className="lol p-8">
        <div className="text-2xl text-center text-white">
          Fill your details below!!
        </div>
        <div className="bg-grey-200 border-gray-500 border h-full w-full mt-10 rounded-lg p-8">
          <div className="flex">
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center rounded-2xl cursor-pointer" onClick={e => {handleNavButtonClick(e, 0)}}>
              Bio
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer " onClick={e => {handleNavButtonClick(e, 1)}}>
              About me
            </div>
            <div className="navButton text-xs border h-8 w-32 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer" onClick={e => {handleNavButtonClick(e, 2)}}>
              My Education
            </div>
            <div className="navButton text-xs border h-8 w-32 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer" onClick={e => {handleNavButtonClick(e, 3)}}>
              My Experience
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer" onClick={e => {handleNavButtonClick(e, 4)}}>
              My Projects
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer " onClick={e => {handleNavButtonClick(e, 5)}}>
              My Skills
            </div>
            <div className="navButton text-xs border h-8 w-36 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer " onClick={e => {handleNavButtonClick(e, 6)}}>
              My Achivements
            </div>
            <div className="navButton text-xs border h-8 w-24 border-white text-white flex items-center justify-center ml-7 rounded-2xl cursor-pointer" onClick={e => {handleNavButtonClick(e, 7)}}>
              Contact
            </div>
          </div>
          
          {isVisible[0] && <BioForm/>}
          {isVisible[1] && <AboutMe/>}
          {isVisible[2] && <EducationForm/>}
          {isVisible[3] && <ExperienceForm/>}
          {isVisible[4] && <ProjectsForm/>}
          {isVisible[5] && <SkillsForm/>}
          {isVisible[6] && <AchievementsForm/>}
          {isVisible[7] && <ContactForm/>}
        </div>
      </div>
    );
}

export default Form;