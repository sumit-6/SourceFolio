import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import "../App.css"
import Aboutme from "./Aboutme.js"
import Skills from "./Skills";
import Achivements from "./Achivements";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FlashMessage from "./FlashMessage";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import axios from 'axios';
import "./portfolio.css";
import "../index.css";
import Footer from "./Footer";

const Portfolio = () => {
  const path = useLocation().pathname;
  const ID = path.split('/')[2];
  const location = useLocation();
  const [data, setData] = useState({});
  const [isReady, setIsReady] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const [successMessage, setSuccessMessage] = useState(queryParams.get('success'));

  useEffect(() => {
    // Set a timeout to remove the flash message after 3 seconds
    const timeout = setTimeout(() => {
      setSuccessMessage(null);
    }, 1500);
    
    // Clear the timeout if the component unmounts before the timeout finishes
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://source-folio-backend.onrender.com/api/portfolio/${ID}`);
      if(typeof(response.data) === 'object') {
        const dataRes = response.data;
        console.log(dataRes);
        setData(dataRes);
        setIsReady(true);
      }
    })();
  }, [ID]);
  return (
    <>
      <div className="Portfolio">
        {successMessage && <FlashMessage msg={successMessage} />}
        {isReady && <NavBar name={data.name} />}
        {isReady && (
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
            <Education data={data.myEducation} />
            <hr />
            <Experience data={data.myExperience} />
            <hr />
            <Projects data={data.myProjects} />
            <hr />
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
            <Footer id={ID} data={data}/>
          </main>
        )}
      </div>
    </>
  );
};

export default Portfolio;
