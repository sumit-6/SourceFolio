import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import "./skills.css"

const Toolsandframework = (props) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title" >Tools and Frameworks</h3>

      <div style={{ display: "flex" }} className="skills__box">
        <div className="skills__group">
          {props.data.map((x, i) => {
            return (
              <div className="skills__data" key={i}>
                <BiBadgeCheck className="badge" />
                <div>
                  <h3 className="skills__name">{x.toolName}</h3>
                  <span className="skills__level">{x.toolLevel}</span>
                </div>
              </div>
            );
          })
          
          } 

          
        </div>
      </div>
    </div>
  );
}

export default Toolsandframework;
