import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import "./skills.css"

const Toolsandframework = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title" >Tools and Frameworks</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiBadgeCheck className="badge" />
            <div>
              <h3 className="skills__name">Flask</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge" />
            <div>
              <h3 className="skills__name">Express.js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge" />
            <div>
              <h3 className="skills__name">Open CV</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className="badge" />
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolsandframework;
