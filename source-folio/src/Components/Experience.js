import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import "./CssFiles/experience.css"

const Experience=(props)=>{

  function formatDate(dateString) {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    const dateParts = dateString.split("-");
    const day = dateParts[2];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const monthName = months[monthIndex];
    const year = dateParts[0];
    return `${monthName} ${year}`;
  }
    const [toggleState,setToggleState]=useState(0);
    
    const toggleTab=(index)=>{
      setToggleState(index);
    }
    return (
      <section className="services section" id="experience">
        {props.data.length ? <h2 className="section__title">
          My <span style={{ color: "orange" }}>Experience.</span>
        </h2> : ""}
        {props.data.length ? <span className="section__subtitle">My work Places</span> : ""}

        <div className="experience__container nav__container grid">
          {props.data.map((x, i) => {
            return (
              <div
                style={{ marginRight: "-0.7rem", borderRadius: "1.3rem" }}
                className="experience__content"
              >
                <div>
                  <div className="Experience__icon">
                    <FaRegHeart />
                  </div>
                  <h3 className="experience__title">
                    {x.role.split(' ').map((unit, j) => {return (
                      <>
                        {unit} {(j < x.role.split(' ').length) && <br /> }
                      </>
                    );})}
                  </h3>
                </div>

                <span className="experience__button" onClick={() => toggleTab(i+1)}>
                  View More
                  <div className="experience__button-icon">
                    <AiFillCaretRight />
                  </div>
                </span>

                <div
                  className={
                    toggleState === i+1
                      ? "experience__modal active-modal"
                      : "experience__modal"
                  }
                >
                  <div className="experience__modal-content">
                    <div
                      className="experience__modal-close"
                      onClick={() => {
                        toggleTab(0);
                      }}
                    >
                      <AiOutlineCloseCircle />
                    </div>
                    <h3 className="experience__modal-title">{x.role}</h3>
                    <p className="experience__modal-description">
                      {x.role} at <b style={{color: "orange"}}>{x.company}</b>, {formatDate(x.duration.start)} to {formatDate(x.duration.end)}
                    </p>
                    <ul className="experience__modal-experiences grid">
                      {
                      x.workDescription.map((desc) => {
                        return (
                        <li className="experience__modal-experience">
                          <div className="experience__modal-icon">
                            <AiOutlineCheckCircle />
                          </div>
                          <p className="experience__modal-info">
                            {desc}
                          </p>
                        </li>
                        );
                      })
                      
                      }

                      {
                        x.certificate &&
                      <li className="experience__modal-experience">
                        <div>
                          <AiOutlineCheckCircle />
                        </div>
                        <p className="experience__modal-info">
                          <a
                            href={`${x.certificate}`}
                            target="_blank"
                          >
                            Letter Of Completion
                          </a>
                        </p>
                      </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}




          
        </div>
      </section>
    );
}

export default Experience;