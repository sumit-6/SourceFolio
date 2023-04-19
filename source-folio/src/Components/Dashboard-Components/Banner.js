import React from 'react';
import cloud from "../../asset/image/mobilee.jpg"
import "./banner.css"
import Typewriter from "typewriter-effect";

const DashHome=()=>{
    return (
      <div className="banner">
        <div className="content">
          {/* <img src={cloud}></img> */}

          <h1 className="heading">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Welcome to SourceFolio.", "Design Your Portfolio."],
              }}
            />
          </h1>
          <p>Create, inspire, succeed with our portfolio builder.</p>
          <div className="content_a">
            <a className="butt" href="#">
              View Sourcefolio
            </a>
          </div>
        </div>
      </div>
    );
}

export default DashHome;