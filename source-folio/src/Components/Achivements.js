import React from "react";
import "./achivements.css"
import { SlGraduation } from "react-icons/sl";

const Achivements=()=>{

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
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Runner up at Microsoft EduDay competition.
                  </h3>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
                <div>
                  <h3 className="qualification__title">
                    1100+ DSA problems solved on GFG and Leetcode
                  </h3>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    5 Star rated coder on CodeChef (max 2078).
                  </h3>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Secured a rank of 2570 and a rank of 2239 in Google
                    KickStart Round E and G respectively.
                  </h3>
                </div>
              </div>
            </div>

            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Secured a rank of 179 and a rank of 288 in CodeChef Starters
                    29 Division 2 and Codechef June Cook-Off 2021 Division 3
                    respectively.
                  </h3>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Part of #define
                  </h3>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    5 Star rated coder on CodeChef (max 2078).
                  </h3>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Achivements;