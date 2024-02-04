import React from "react";
import "./CssFiles/education.css"
import { BiPencil } from "react-icons/bi";

const Education=(props)=>{
    return (
      <section className="education section " id="education">
        <h2 className="section__title">
          My <span style={{ color: "orange" }}>Education.</span>
        </h2>
        <span className="section__subtitle">My education places</span>

        <div className="education__container nav__container">
          {
            props.data.map((x, i) => {
              return (
                // <div className="education__heading" style={(i > 0) ? { marginTop: "4rem" } : {}}>
                //   <div className="education__name">
                //     <i
                //       className="education__pencil"
                //     >
                //       <BiPencil />
                //     </i>{" "}
                //     <h3
                //       className="education__college"
                //       style={{ color: "white", marginTop: "1.4rem" }}
                //     >
                //       <span>{x.institutionName}</span>
                //     </h3>
                //   </div>

                //   <h6 className="education__place">{x.place}</h6>

                //   <div className="education__marks">
                //     <h4 style={{ color: "white" }}>
                //       <span className="education__detail">
                //         Aggregate: {x.aggregate}
                //       </span>
                //       <span className="pipe"> | </span>
                //       <span className="education__detail">
                //         Course pursued: {x.coursePursuied}
                //       </span>
                //       <span className="pipe"> | </span>
                //       <span className="education__detail">
                //         Year: {x.year}
                //       </span>
                //     </h4>
                //   </div>
                // </div>
                <div class="flex flex-1">
                  <p class="pr-6">Text</p>
                  <div class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                  <p class="pl-6">Text</p>
                </div>
              );
            })
          }
          
          
        </div>
      </section>
    );
}

export default Education;