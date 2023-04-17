import React from "react";
import "./project.css";

import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

// import backgroundd from "../asset/image/back.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./experience.css"

const Projects=()=>{
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
        <div
          style={{ marginTop: "-6rem" }}
          className="experience__content_like"
        >
          <h2 className="section__title">
            My <span style={{ color: "orange" }}>Projects.</span>
          </h2>
          <span className="section__subtitle">My work</span>
          <Carousel responsive={responsive}>
            <div className="project__content">
              <div>
                <div className="Experience__icon">
                  <FaRegHeart />
                </div>
                <h3 className="experience__title">
                  UI/UX <br /> Design Intern
                </h3>
              </div>

              <span className="experience__button" onClick={() => toggleTab(1)}>
                View More
                <div className="experience__button-icon">
                  <AiFillCaretRight />
                </div>
              </span>

              <div>
                <button className="button__links">Web Link</button>
                <button className="button__links">Github</button>
              </div>
            </div>

            <div className="project__content">
              <div>
                <div className="Experience__icon">
                  <FaRegHeart />
                </div>
                <h3 className="experience__title">
                  Web <br /> Development Intern
                </h3>
              </div>

              <span className="experience__button" onClick={() => toggleTab(2)}>
                View More
                <div className="experience__button-icon">
                  <AiFillCaretRight />
                </div>
              </span>

              <div>
                <button className="button__links">Web Link</button>
                <button className="button__links">Github</button>
              </div>
            </div>

            <div className="project__content">
              <div>
                <div className="Experience__icon">
                  <FaRegHeart />
                </div>
                <h3 className="experience__title">
                  Research <br /> Intern
                </h3>
              </div>

              <span className="experience__button" onClick={() => toggleTab(3)}>
                View More
                <div className="experience__button-icon">
                  <AiFillCaretRight />
                </div>
              </span>

              <div>
                <button className="button__links">Web Link</button>
                <button className="button__links">Github</button>
              </div>
            </div>

            <div className="project__content">
              <div>
                <div className="Experience__icon">
                  <FaRegHeart />
                </div>
                <h3 className="experience__title">
                  Research <br /> Intern
                </h3>
              </div>

              <span className="experience__button" onClick={() => toggleTab(4)}>
                View More
                <div className="experience__button-icon">
                  <AiFillCaretRight />
                </div>
              </span>

              <div>
                <button className="button__links">Web Link</button>
                <button className="button__links">Github</button>
              </div>
            </div>
          </Carousel>
          <div
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
              <h3 className="experience__modal-title">UI/UX Designer</h3>
              <p className="experience__modal-description">
                I have worked as an UI/UX Intern for 2 months at Outshade
                Digital Media
              </p>
              <ul className="experience__modal-experiences grid">
                <li className="experience__modal-experience">
                  <div className="experience__modal-icon">
                    <AiOutlineCheckCircle />
                  </div>
                  <p className="experience__modal-info">
                    Contributed as UI/UX Designer
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <div>
                    <AiOutlineCheckCircle />
                  </div>
                  <p className="experience__modal-info">
                    Created figma board for a cryto app using Figma,Adobe XD
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <div>
                    <AiOutlineCheckCircle />
                  </div>
                  <p className="experience__modal-info">
                    <a
                      href="https://drive.google.com/file/d/1C4g-NLiq4qdNsj2c-CnCvhUU8tFjZnFw/view?usp=sharing"
                      target="_blank"
                    >
                      Letter Of Completion
                    </a>
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <div>
                    <AiOutlineCheckCircle />
                  </div>
                  <p className="experience__modal-info">
                    <a
                      href="https://drive.google.com/file/d/1FfvoexLS4XSJS5d8KyO-CEiYa4OK6Yqn/view?usp=sharing"
                      target="_blank"
                    >
                      Letter Of Recommendation
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects;