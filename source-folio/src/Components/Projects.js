import React from "react";
import "./CssFiles/project.css";

import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

// import backgroundd from "../asset/image/back.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CssFiles/experience.css"

const Projects=(props)=>{
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    
    return (
      <section className="section projects" id="projects">
        <div style={{marginTop : "-6rem"}}className="experience__content_like" >
        <h2 className="section__title">
          My <span style={{ color: "orange" }}>Projects.</span>
        </h2>
        <span className="section__subtitle">My work</span>
        <Carousel responsive={responsive} >
          {
          props.data.map((x, i) => {
            return (
              <div className="project__content w-11/12 h-full" key={i}>
                <div>
                  <div className="Experience__icon">
                    <FaRegHeart />
                  </div>
                  <h3 className="experience__title">
                    {x.projectName.split(" ").map((unit, j) => {
                      return (
                        <>
                          {unit} {j % 2 === 1 && j < x.projectName.split(" ").length && <br />}
                        </>
                      );
                    })}
                  </h3>
                </div>

                <span
                  className="experience__button"
                  onClick={() => toggleTab(i + 1)}
                >
                  View More
                  <div className="experience__button-icon">
                    <AiFillCaretRight />
                  </div>
                </span>

                <div>
                  {x.projectLink && (
                    <button
                      className="button__links"
                      onClick={() => {
                        window.location.href = x.projectLink;
                      }}
                    >
                      Web Link
                    </button>
                  )}

                  {x.gitHubLink && (
                    <button
                      className="button__links"
                      onClick={() => {
                        window.location.href = x.gitHubLink;
                      }}
                    >
                      Github
                    </button>
                  )}
                </div>
              </div>
            );
          })
          
          }
          
        </Carousel>
        
        {(toggleState !== 0) && <div
              className={
                toggleState !== 0
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
                <h3 className="experience__modal-title">{props.data[toggleState-1].projectName}</h3>
              
                <ul className="experience__modal-experiences grid">
                    {
                      props.data[toggleState-1].description.map((desc) => {
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
                  </ul>
              </div>
            </div>}
          </div>
        
      </section>
    );
}

export default Projects;