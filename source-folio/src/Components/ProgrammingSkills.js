import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import "./skills.css"

const Programmingskills=()=>{
    return (
      <div className="skills__content">
        <h3 className="skills__title">Programming Languages</h3>

        <div style={{ display: "flex" }} className="skills__box ">
          <div className="skills__group">
            <div className="skills__data">
              <BiBadgeCheck className="badge" />
              <div>
                <h3 className="skills__name"> C++/C</h3>
                <span className="skills__level">Expert</span>
              </div>
            </div>

            <div className="skills__data">
              <BiBadgeCheck className="badge" />
              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <BiBadgeCheck className="badge" />
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <BiBadgeCheck className="badge" />
              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Programmingskills;