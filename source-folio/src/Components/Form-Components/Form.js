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
import useUser from "../../hooks/useUser";
import Preview from "../Preview/Preview";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Form= () => {
    const [skip, setSkip] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState([true, false, false, false, false, false, false, false]);
    const [inputData, setInputData] = useState({name: "", instagram: "", 
    linkedIn: "", githubProfile: "", bio: "", yearsOfExperience: "", numberOfProjects: "", 
    description: "", email: "", telephone: 0, profilePicture: {url: "https://res.cloudinary.com/dk26fyzkl/image/upload/v1707765680/SourceFolio/no-user-image_no8zkv.gif", filename: "c7xjisezokd3rbogmba9"}, mainDesignations:[""]});
    const [sfid, setsfId] = useState(null);

    const {user, isLoading} = useUser();
    const [Token, setToken] = useState(null);
    const [togglePreview, setTogglePreview] = useState(0);
    
    const [inputExperienceList, setInputExperienceList] = useState([]);
    const [inputProjectList, setInputProjectList] = useState([]);
    const [inputEducationList, setInputEducationList] = useState([]);
    const [inputSkills, setInputSkills] = useState({programmingSkills: [{skillName: "", skillLevel: ""}], toolsAndFrameworks: [{toolName: "", toolLevel: ""}]});
    const [inputAchievement, setInputAchievement] = useState([""]);
    const [isContact,setIsContact]=useState(false)
    
    useEffect(() => {(async() => {

      const token = user && await user.getIdToken();
      setToken(token);
    })();
    }, [user, sfid]);
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
      if(index===7)
      {
        setIsContact(!isContact);
      }
      else{
        setIsContact(false)
      }
    }
    
    function handleDataChange(e) { 
      const {name, value} = e.target;
      const obj = {...inputData};
      obj[name] = value;
      setInputData(obj);
    }

    useEffect(() => {
      if(skip) setSkip(false);
      if(!skip) {
        const formData = {};
        const names = ["name", "instagram", "linkedIn", "githubProfile", "bio", "yearsOfExperience", "numberOfProjects", "description", "email", "telephone", "mainDesignations"];
        names.forEach((name) => {
          formData[name] = inputData[name];
        })
        if(inputEducationList.length > 0) {
          const names = ["institutionName", "year", "place", "aggregate", "coursePursuied"]
          names.forEach((name) => {
            formData[name] = inputEducationList.map((x) => (x[name]));
          })
        }
        if(inputExperienceList.length) {
          const names = ["role", "company", "certificate"]
          names.forEach((name) => {
            formData[name] = inputExperienceList.map((x) => (x[name]));
            
          });
          formData[`start`] = []
          formData[`end`] = []
          inputExperienceList.forEach((exp, index) => {
            formData[`workDescription_${index}`] = exp.workDescription;
            formData[`start`].push(exp.duration.start);
            formData[`end`].push(exp.duration.end);
          });
        }
        if(inputProjectList.length > 0) {
          const names = ["projectName", "gitHubLink", "projectLink"]
          names.forEach((name) => {
            formData[name] = inputEducationList.map((x) => (x[name]));
          })

          inputProjectList.forEach((project, index) => {
            formData[`projectDescription_${index}`] = project.description;
          })
        }
        formData["skillName"] = [];
        formData["skillLevel"] = [];
        formData["toolName"] = [];
        formData["toolLevel"] = [];
        inputSkills.programmingSkills.forEach((skill) => {
          formData["skillName"].push(skill.skillName);
          formData["skillLevel"].push(skill.skillLevel);
        })
        inputSkills.toolsAndFrameworks.forEach((tool) => {
          formData["toolName"].push(tool.toolName);
          formData["toolLevel"].push(tool.toolLevel);
        })
        formData["myAchievements"] = inputAchievement;
        const abortController = new AbortController();
        const { signal } = abortController;
        const config = {
          headers: {
            'Authtoken': Token,
            'Content-Type': 'multipart/form-data'
          },
          enctype: 'multipart/form-data',
          signal: signal
        }
    
          
        ;(async () => {
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/portfolio/insert`,formData,config);
          if(response.data === "Success") {
            window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
          } else {
            window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/pageDoesn'tExist`;
          }
        })();

        return () => {
          abortController.abort();
        }
      }
    }, [isSubmitted])

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted((prev) => !prev);
    }
    
    return (
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
              className="experience__modal-close z-50 cursor pointer"
              onClick={() => {
                setTogglePreview(0);
              }}
            >
              <AiOutlineCloseCircle />
            </div>
            <Preview data={{...inputData, myExperience: inputExperienceList, myEducation: inputEducationList, myProjects: inputProjectList, myAchievements: inputAchievement, mySkills: inputSkills}} />
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
            data={{
              name: inputData.name,
              instagram: inputData.instagram,
              linkedIn: inputData.linkedIn,
              githubProfile: inputData.githubProfile,
              bio: inputData.bio,
              profilePicture: inputData.profilePicture,
              mainDesignations: inputData.mainDesignations,
            }}
            handleChange={handleDataChange}
            handleMainDesignations={handleMainDesignations}
            handleFileChange={handlePictureChange}
          />
         
          <AboutMe
            isSelected={isVisible[1]}
            data={{
              yearsOfExperience: inputData.yearsOfExperience,
              numberOfProjects: inputData.numberOfProjects,
              description: inputData.description,
            }}
            handleChange={handleDataChange}
          />
          
          <EducationForm
            isSelected={isVisible[2]}
            data={inputEducationList}
            handleChange={handleEducation}
          />
      
          <ExperienceForm
            isSelected={isVisible[3]}
            data={inputExperienceList}
            handleChange={handleExperience}
          />
          
          <ProjectsForm
            isSelected={isVisible[4]}
            data={inputProjectList}
            handleChange={handleProject}
          />
       
          <SkillsForm
            isSelected={isVisible[5]}
            data={inputSkills}
            handleChange={handleSkills}
          />
         
          <AchievementsForm
            isSelected={isVisible[6]}
            data={inputAchievement}
            handleChange={handleAchievement}
          />
         
          <ContactForm
            isSelected={isVisible[7]}
            data={{ email: inputData.email, telephone: inputData.telephone }}
            handleChange={handleDataChange}
          />
          
          <div
            type="submit"
            className="border border-white flex items-center justify-center m-5 p-2 text-orange-400 rounded-lg max-w-min cursor-pointer hover:border-orange-400"
            onClick={(e) => {handleSubmit(e)}}
          >
            Submit&nbsp;Form
          </div>
        </form>
      </div>
    );
}

export default Form;