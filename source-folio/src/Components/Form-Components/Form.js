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
    const [inputData, setInputData] = useState({name: "", instagram: "", 
    linkedIn: "", githubProfile: "", bio: "", yearsOfExperience: "", numberOfProjects: "", 
    description: "", email: "", telephone: "", profilePicture: {url: null, filename: null}, mainDesignations:[""]});
    
    
    const [inputExperienceList, setInputExperienceList] = useState([]);
    const [inputProjectList, setInputProjectList] = useState([]);
    const [inputEducationList, setInputEducationList] = useState([{institutionName: "", place: "", year: "", aggregate: "", coursePursuied: ""}]);
    const [inputSkills, setInputSkills] = useState({programmingSkills: [{skillName: "", skillLevel: ""}], toolsAndFrameworks: [{toolName: "", toolLevel: ""}]});
    const [inputAchievement, setInputAchievement] = useState([""]);
    function handlePictureChange(file) {
      setInputData({...inputData, profilePicture: file});
    }
    function handleMainDesignations(list) {
      const obj = {...inputData};
      obj["mainDesignations"] = list;
      setInputData(obj);
    }
    function handleAchievement(list) {
      setInputAchievement(list);
    }
    function handleSkills(obj) {
      setInputSkills(obj);
    }
    function handleExperience(list) {
      setInputExperienceList(list);
    }
    function handleProject(list) {
      setInputProjectList(list);
    }
    function handleEducation(list) {
      setInputEducationList(list);
    }
    const handleNavButtonClick = (e, index) => {
      e.preventDefault();
      let array = Array.apply(null, Array(5)).map(function (y) {return false});
      array[index] = true;
      setIsVisible(array);
    }
    function handleDataChange(e) { 
      const {name, value} = e.target;
      const obj = {...inputData};
      obj[name] = value;
      setInputData(obj);
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
          
          {isVisible[0] ? <BioForm isSelected={true} data={{name: inputData.name, instagram: inputData.instagram, linkedIn: inputData.linkedIn, githubProfile: inputData.githubProfile, bio: inputData.bio, profilePicture: inputData.profilePicture, mainDesignations: inputData.mainDesignations}} handleChange={handleDataChange} handleMainDesignations={handleMainDesignations} handleFileChange={handlePictureChange}/>
           : <BioForm isSelected={false} data={{name: inputData.name, instagram: inputData.instagram, linkedIn: inputData.linkedIn, githubProfile: inputData.githubProfile, bio: inputData.bio, profilePicture: inputData.profilePicture, mainDesignations: inputData.mainDesignations}} handleChange={handleDataChange} handleMainDesignations={handleMainDesignations} handleFileChange={handlePictureChange}/>}
          {isVisible[1] ? <AboutMe isSelected={true} data={{yearsOfExperience: inputData.yearsOfExperience, numberOfProjects: inputData.numberOfProjects, description: inputData.description}} handleChange={handleDataChange}/>
           : <AboutMe isSelected={false} data={{yearsOfExperience: inputData.yearsOfExperience, numberOfProjects: inputData.numberOfProjects, description: inputData.description}} handleChange={handleDataChange}/>}
          {isVisible[2] ? <EducationForm isSelected={true} data={inputEducationList} handleChange={handleEducation}/>
           : <EducationForm isSelected={false} data={inputEducationList} handleChange={handleEducation}/>}
          {isVisible[3] ? <ExperienceForm isSelected={true} data={inputExperienceList} handleChange={handleExperience}/>
           : <ExperienceForm isSelected={false} data={inputExperienceList} handleChange={handleExperience}/>}
          {isVisible[4] ? <ProjectsForm isSelected={true} data={inputProjectList} handleChange={handleProject}/>
           : <ProjectsForm isSelected={false} data={inputProjectList} handleChange={handleProject}/>}
          {isVisible[5] ? <SkillsForm isSelected={true} data={inputSkills} handleChange={handleSkills}/>
           : <SkillsForm isSelected={false} data={inputSkills} handleChange={handleSkills}/>}
          {isVisible[6] ? <AchievementsForm isSelected={true} data={inputAchievement} handleChange={handleAchievement}/>
           : <AchievementsForm isSelected={false} data={inputAchievement} handleChange={handleAchievement}/>}
          {isVisible[7] ? <ContactForm isSelected={true} data={{email: inputData.email, telephone: inputData.telephone}} handleChange={handleDataChange}/>
           : <ContactForm isSelected={false} data={{email: inputData.email, telephone: inputData.telephone}} handleChange={handleDataChange}/>}
        </div>
      </div>
    );
}

export default Form;