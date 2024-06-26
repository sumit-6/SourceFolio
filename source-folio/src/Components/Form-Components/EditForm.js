import React from "react";
import BioForm from "./BioForm";
import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import AboutMe from "./AboutMe";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import AchievementsForm from "./AchievementsForm";
import ContactForm from "./ContactForm";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Preview from "../Preview/Preview";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const EditForm=()=>{
    const data = useSelector(state => state.portfolio.data);
    const auth = useSelector(state => state.portfolio.auth);
    const [skip, setSkip] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const path = useLocation().pathname;
    const navigate = useNavigate();
    const ID = path.split("/")[2];
    const [isVisible, setIsVisible] = useState([true, false, false, false, false, false, false, false]);
    
    const [togglePreview, setTogglePreview] = useState(0);

    const [isContact,setIsContact]=useState(false);

    const handleNavButtonClick = (e, index) => {
      e.preventDefault();
      let array = Array.apply(null, Array(5)).map(function (y) {return false});
      array[index] = true;
      setIsVisible(array);
      if(index===7)
      {
        setIsContact(!isContact);
      }
      else{
        setIsContact(false)
      }
    }

    useEffect(() => {
      if(skip) setSkip(false);
      if(!skip) {
        const form = document.querySelector('.form');
        const formData_empty = new FormData(form);
        const formData = {};
        for(const key of formData_empty.entries()) {
            if(key[0] === 'profilePicture' && key[1] !== undefined) formData[key[0]] = key[1]; 
        }
        const names = ["name", "instagram", "linkedIn", "githubProfile", "bio", "yearsOfExperience", "numberOfProjects", "description", "email", "telephone", "mainDesignations"];
        names.forEach((name) => {
          formData[name] = data[name];
        })
        if(data.myEducation.length > 0) {
          const names = ["institutionName", "year", "place", "aggregate", "coursePursuied"]
          names.forEach((name) => {
            formData[name] = data.myEducation.map((x) => (x[name]));
          })
        }
        if(data.myExperience.length) {
          const names = ["role", "company", "certificate"]
          names.forEach((name) => {
            formData[name] = data.myExperience.map((x) => (x[name]));
            
          });
          formData[`start`] = []
          formData[`end`] = []
          data.myExperience.forEach((exp, index) => {
            formData[`workDescription_${index}`] = exp.workDescription;
            formData[`start`].push(exp.duration.start);
            formData[`end`].push(exp.duration.end);
          });
        }
        if(data.myProjects.length > 0) {
          const names = ["projectName", "gitHubLink", "projectLink"]
          names.forEach((name) => {
            formData[name] = data.myProjects.map((x) => (x[name]));
          })
  
          data.myProjects.forEach((project, index) => {
            formData[`projectDescription_${index}`] = project.description;
          })
        }
        formData["skillName"] = [];
        formData["skillLevel"] = [];
        formData["toolName"] = [];
        formData["toolLevel"] = [];
        data.mySkills.programmingSkills.forEach((skill) => {
          formData["skillName"].push(skill.skillName);
          formData["skillLevel"].push(skill.skillLevel);
        })
        data.mySkills.toolsAndFrameworks.forEach((tool) => {
          formData["toolName"].push(tool.toolName);
          formData["toolLevel"].push(tool.toolLevel);
        })
        formData["myAchievements"] = data.myAchievements;
        const abortController = new AbortController();
        const { signal } = abortController;
        const config = {
          headers: {
            'Authtoken': auth.token,
          },
          signal: signal
        }
        
        ;(async () => {
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/edit/portfolio/${ID}`,formData,config);
          
          if(response.data === "Success") {
            const config = {
              headers: {
                'Authtoken': auth.token,
                'Content-Type': 'multipart/form-data'
              },
              enctype: 'multipart/form-data',
              signal: signal
            }
            if(formData["profilePicture"]) await axios.post(`${process.env.REACT_APP_BACKEND_URL}/edit/profilePicture/${ID}`,{
              profilePicture: formData["profilePicture"]
            },config);
            navigate("/")
          } else {
            navigate("/pageDoesn'tExist")
          }
        })();

        return () => {
          abortController.abort();
        }
      }
    }, [isSubmitted]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted((prev) => !prev);
    }
    
    return ((data._id !== undefined) &&  
      <div className="p-2 sm:p-8" style={{visibility: togglePreview === 1 ? "hidden" : "visible"}}>
        <div className="text-2xl text-center text-white">
          Fill your details below!!
        </div>
        <div className="border border-white flex items-center justify-center m-5 p-2 text-orange-400 rounded-lg max-w-min cursor-pointer hover:border-orange-400"
         onClick={() => {setTogglePreview(1)}}>
          Preview
        </div>

        <div
          className={
            togglePreview === 1
              ? "experience__modal m-auto fixed active-modal flex items-center justify-center"
              : "experience__modal m-auto"
          }
          style={{width: "90vw", height: "90vh", padding: "0"}}
        >
          <div className="overflow-y-scroll"
          style={{width: "100%", height: "100%", border: "2px solid white", borderRadius: "20px"}}>
            <div
              className="experience__modal-close z-50 cursor-pointer"
              onClick={() => {
                setTogglePreview(0);
              }}
            >
              <AiOutlineCloseCircle />
            </div>
            <Preview />
          </div>

        </div>
        <form
          encType="multipart/form-data"
          className="form bg-grey-200 border-gray-500 border h-full w-full mt-10 rounded-lg p-2 sm:p-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap xl:flex xl:flex-wrap">
            <div className={`navButton text-xs ${isVisible[0] ? "marker:border" : "border"} h-8 w-24 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 0)}} style={{backgroundColor: (isVisible[0] ? "rgb(219, 144, 5)" : "")}}>
              Bio
            </div>
            <div className={`navButton text-xs ${isVisible[1] ? "marker:border" : "border"} h-8 w-24 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 1)}} style={{backgroundColor: (isVisible[1] ? "rgb(219, 144, 5)" : "")}}>
              About me
            </div>
            <div className={`navButton text-xs ${isVisible[2] ? "marker:border" : "border"} h-8 md:w-32 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 2)}} style={{backgroundColor: (isVisible[2] ? "rgb(219, 144, 5)" : "")}}>
              My Education
            </div>
            <div className={`navButton text-xs ${isVisible[3] ? "marker:border" : "border"} h-8 md:w-32 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 3)}} style={{backgroundColor: (isVisible[3] ? "rgb(219, 144, 5)" : "")}}>
              My Experience
            </div>
            <div className={`navButton text-xs ${isVisible[4] ? "marker:border" : "border"} h-8 w-24 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 4)}} style={{backgroundColor: (isVisible[4] ? "rgb(219, 144, 5)" : "")}}>
              My Projects
            </div>
            <div className={`navButton text-xs ${isVisible[5] ? "marker:border" : "border"} h-8 w-24 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 5)}} style={{backgroundColor: (isVisible[5] ? "rgb(219, 144, 5)" : "")}}>
              My Skills
            </div>
            <div className={`navButton text-xs ${isVisible[6] ? "marker:border" : "border"} h-8 md:w-36 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 6)}} style={{backgroundColor: (isVisible[6] ? "rgb(219, 144, 5)" : "")}}>
              My Achivements
            </div>
            <div className={`navButton text-xs ${isVisible[7] ? "marker:border" : "border"} h-8 w-24 border-white text-white flex items-center justify-center sm:ml-1 sm:mr-1 ml-2 rounded-2xl cursor-pointer`} onClick={e => {handleNavButtonClick(e, 7)}} style={{backgroundColor: (isVisible[7] ? "rgb(219, 144, 5)" : "")}}>
              Contact
            </div>
          </div>

          <BioForm
            isSelected={isVisible[0]}
            id={ID}
          />
          
          <AboutMe
            isSelected={isVisible[1]}
          />
         
          <EducationForm
            isSelected={isVisible[2]}
          />
         
          <ExperienceForm
            isSelected={isVisible[3]}
          />
          
          <ProjectsForm
            isSelected={isVisible[4]}
          />
          
          <SkillsForm
            isSelected={isVisible[5]}
          />
          
          <AchievementsForm
            isSelected={isVisible[6]}
          />
          
          <ContactForm
            isSelected={isVisible[7]}
          />
         
          <div
            type="submit"
            className="border border-white flex items-center justify-center m-5 p-2 text-orange-400 rounded-lg w-min cursor-pointer hover:border-orange-400"
            onClick={(e) => {handleSubmit(e)}}
          >
            Submit&nbsp;Form
          </div>
        </form>
      </div>
    );
}

export default EditForm;