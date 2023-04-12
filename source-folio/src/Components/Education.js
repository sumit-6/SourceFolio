import React from "react";
import "./education.css"
import { BiPencil } from "react-icons/bi";

const Education=()=>{
    return (
      <section className="education section " id="education">
        <h2 className="section__title">
          My <span style={{ color: "orange" }}>Education.</span>
        </h2>
        <span className="section__subtitle">My education places</span>

        <div className="education__container container">
          <div className="education__heading">
            <div className="education__name">
              <i
                style={{
                  color: "orange",
                  marginTop: "1.4rem",
                  fontSize: "1.5rem",
                }}
                className="education__pencil"
              >
                <BiPencil />
              </i>
              <h3
                className="education__college"
                style={{ color: "white", marginTop: "1.4rem" }}
              >
                <span>Vikas Bharati Public School</span>
              </h3>
            </div>

            <h6 className="education__place">Delhi,India</h6>

            <div className="education__marks">
              <h4 style={{ color: "white" }}>
                <span>
                  Aggregate:9.5 CGPA | Course pursued:12<sup>th</sup> | 2020
                </span>
              </h4>
            </div>
          </div>

          <div style={{ marginTop: "4rem" }} className="education__heading">
            <div className="education__name">
              <i
                style={{
                  color: "orange",
                  fontSize: "1.5rem",
                  marginTop: "1.4rem",
                }}
                className="education__pencil"
              >
                <BiPencil />
              </i>
              <h3
                className="education__college"
                style={{
                  color: "white",
                  marginTop: "1.4rem",
                }}
              >
                Bhagwan Parshuram Institute of Technology
              </h3>
            </div>

            <h6 className="education__place">Delhi,India</h6>

            <div className="education__marks">
              <h4 style={{ color: "white" }}>
                Aggregate:9.23 CGPA | Course pursued:B.Tech(Information
                Technology)| 2024
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Education;