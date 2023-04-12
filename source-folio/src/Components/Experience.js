import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import "./experience.css";

const Experience=()=>{

    const [toggleState,setToggleState]=useState(0);
    
    const toggleTab=(index)=>{
      setToggleState(index);
    }
    return (
      <section className="services section" id="services">
        <h2 className="section__title">
          My <span style={{ color: "orange" }}>Experience.</span>
        </h2>
        <span className="section__subtitle">My work Places</span>

        <div className="experience__container container grid">
          <div
            style={{ marginRight: "-0.7rem" }}
            className="experience__content"
          >
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

            <div
              className={
                toggleState === 1
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

          <div
            style={{ marginRight: "-0.7rem" }}
            className="experience__content"
          >
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

            <div
              className={
                toggleState === 2
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
                <h3 className="experience__modal-title">Web Developer</h3>
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

          <div
            style={{ marginRight: "-0.7rem" }}
            className="experience__content"
          >
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

            <div
              className={
                toggleState === 3
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
                <h3 className="experience__modal-title">Research Intern</h3>
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
        </div>
      </section>
    );
}

export default Experience;