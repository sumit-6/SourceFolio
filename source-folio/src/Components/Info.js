import React from "react";
import { BiAward, BiBriefcase, BiSupport } from "react-icons/bi";
import "./aboutme.css";

const Info=()=>{
    return (
      <div className="about__info grid">
        <div className="about__box">
          <BiAward/>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">Fresher</span>
        </div>

        <div className="about__box">
          <BiBriefcase/>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">10+ projects</span>
        </div>

        {/* <div className="about__box">
          <BiSupport/>
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online 24/7</span>
        </div> */}
      </div>
    );
}

export default Info