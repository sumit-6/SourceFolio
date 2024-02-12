import React, { useEffect } from "react";
import NavBar from "./NavBar.js";
import Home from "../Home.js";
import "../../App.css";
import Aboutme from "../Aboutme.js";
import Skills from "../Skills.js";
import Achivements from "../Achivements.js";
import { useState } from "react";
import Experience from "../Experience.js";
import Projects from "../Projects.js";
import Contact from "../Contact.js";
import Education from "../Education.js";
import "../CssFiles/portfolio.css";
import "../../index.css";

const Preview = (props) => {
  const data = {...props.data};
  
  return (
    <>
      <div className="Portfolio rounded-xl">
          <NavBar name={data.name} myExperience={data.myExperience} myEducation={data.myEducation} myProjects={data.myProjects} />
          <main className="main">
          
            <Home
              name={data.name}
              mainDesignations={data.mainDesignations}
              description={data.description}
              profilePicture={data.profilePicture}
              githubProfile={data.githubProfile}
              linkedIn={data.linkedIn}
              instagram={data.instagram}
            />
            <hr />
            <Aboutme
              bio={data.bio}
              yearsOfExperience={data.yearsOfExperience}
              numberOfProjects={data.numberOfProjects}
              profilePicture={data.profilePicture}
            />
            <hr />
            {data.myEducation.length ? <><Education data={data.myEducation} />
            <hr /></> : ""}
            {data.myExperience.length ? (
              <>
                <Experience data={data.myExperience} />
                <hr />
              </>
            ) : (
              ""
            )}
            {data.myProjects.length ? (<>
                <Projects data={data.myProjects} />
                <hr />
              </>
            ) : (
              ""
            )}
            <Skills data={data.mySkills} />
            <hr />
            <Achivements data={data.myAchievements} />
            <hr />
            <Contact
              linkedIn={data.linkedIn}
              instagram={data.instagram}
              telephone={data.telephone}
              email={data.email}
            />
          </main>
      </div>
    </>
  );
};

export default Preview;
