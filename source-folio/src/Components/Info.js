import React, { useContext } from "react";
import { BiAward, BiBriefcase } from "react-icons/bi";
import "./CssFiles/aboutme.css";
import { DataContext } from "./Portfolio";

const Info = () => {
  const { state: { data: {yearsOfExperience, numberOfProjects} } } = useContext(DataContext);
    return (
      <div className="about__info grid">
        <div className="about__box">
          <BiAward className="about__icon" />
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">{yearsOfExperience}</span>
        </div>

        <div className="about__box">
          <BiBriefcase className="about__icon"/>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">{numberOfProjects}</span>
        </div>
      </div>
    );
}

export default Info