import React from "react";
import "./achivements.css"
import { SlGraduation } from "react-icons/sl";

const Achivements=(props)=>{

    return (
      <section className="qualification section" id="achivements">
        <h2 className="section__title">
          My <span style={{ color: "orange" }}>Achievements.</span>
        </h2>
        <span className="section__subtitle">What are my accomplishments!!</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
              <div className="qualification__icon">
                <SlGraduation />
              </div>{" "}
              Achievements
            </div>

            {/* <div className="qualification__button button--flex">
              <SlGraduation /> Achievements
            </div> */}
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              {props.data.map((x, i) => {
                
                if(i & 1) {
                  return (
                  <div className="qualification__data" key={i}>
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <div className="qualification__line"></div>
                    </div>
                    <div>
                      <h3 className="qualification__title">
                        {x}
                      </h3>
                    </div>
                  </div>
                  )
                } else {
                  return (
                  <div className="qualification__data" key={i}>
                    <div>
                      <h3 className="qualification__title">
                        {x}
                      </h3>
                    </div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <div className="qualification__line"></div>
                    </div>
                  </div>
                  )
                }
              })}
              
            </div>
          </div>
        </div>
      </section>
    );
}

export default Achivements;