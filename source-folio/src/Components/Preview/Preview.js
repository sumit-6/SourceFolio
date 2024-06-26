import React from "react";
import NavBar from "./NavBar.js";
import Home from "../Home.js";
import "../../App.css";
import Aboutme from "../Aboutme.js";
import Skills from "../Skills.js";
import Achivements from "../Achivements.js";
import Experience from "../Experience.js";
import Projects from "../Projects.js";
import Contact from "../Contact.js";
import Education from "../Education.js";
import "../CssFiles/portfolio.css";
import "../../index.css";
import { useSelector } from "react-redux";

const Preview = () => {
  const { myProjects, myEducation, myExperience } = useSelector(state => state.portfolio.data);

  return (
      <div className="Portfolio rounded-xl">
          <NavBar />
          <main className="main">
            <Home />
            <hr />
            <Aboutme />
            <hr />
            {myEducation.length ? <><Education />
            <hr /></> : null}
            {myExperience.length ? (
              <>
                <Experience />
                <hr />
              </>
            ) : (
              null
            )}
            {myProjects.length ? (<>
                <Projects />
                <hr />
              </>
            ) : (
              null
            )}
            <Skills />
            <hr />
            <Achivements />
            <hr />
            <Contact />
          </main>
      </div>
  );
};

export default Preview;
