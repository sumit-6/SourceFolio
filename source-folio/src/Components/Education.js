import React from "react";
import "./CssFiles/education.css";

const Education = (props) => {
  return (
    <section className="education section " id="education">
      <h2 className="section__title">
        My <span style={{ color: "orange" }}>Education.</span>
      </h2>
      <span className="section__subtitle">My education places</span>

      <div>
        <div className="flex items-center justify-center mr-2">
          <div className="qualification__sections p-4">
            <div className="qualification__content">
              {props.data.map((x, i) => {
                return (
                  <div className="data_education" key={i}>
                    <div className="w-16">
                      <div className="font-bold text-gray-400">{x.year}</div>
                    </div>
                    <div>
                      <div className="qualification__line"></div>
                    </div>
                    <div className="md:ml-24 ml-4 pb-5 w-[100%]">
                      <div>
                        <p className="w-full">
                          <span className="education__rounder mr-2"></span>
                          <span className="w-full text-gray-400">
                            {" "}
                            {x.institutionName}
                          </span>{" "}
                          |{"  "}
                          <span className="text-xs font-bold">{x.place}</span>
                        </p>
                        <div>
                          <span className="text-sm font-extrabold md:mr-2 p-1">
                            Aggregate - {x.aggregate}
                          </span>{" "}
                          |{" "}
                          <span className="text-sm font-extrabold md:ml-2">
                            Course - {x.coursePursuied}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
